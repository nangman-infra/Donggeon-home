import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Header } from "@/components/layout/Header";
import { ScrollSpyNav } from "@/components/layout/ScrollSpyNav";

// 이 파일에서는 현재 경로를 /projects 로 고정해 Header 활성 상태 분기를 커버한다.
vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

const SECTION_IDS = ["about", "featured", "projects", "publications", "awards", "stack", "contact"];

function mountSections(tops: Record<string, number>) {
  SECTION_IDS.forEach((id) => {
    const el = document.createElement("section");
    el.id = id;
    el.getBoundingClientRect = () => ({ top: tops[id] ?? 9999 } as unknown as DOMRect);
    document.body.appendChild(el);
  });
}

describe("layout navigation", () => {
  beforeEach(() => {
    // rAF 를 동기 실행해 scroll 핸들러의 compute 를 즉시 검증
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    vi.stubGlobal("cancelAnimationFrame", () => {});
    Object.defineProperty(window, "innerHeight", { configurable: true, value: 800 });
    // 기본은 페이지 하단이 아님(=하단 가드 미발동)
    Object.defineProperty(document.documentElement, "scrollHeight", { configurable: true, value: 5000 });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = "";
    vi.unstubAllGlobals();
  });

  it("ScrollSpyNav: 읽기 기준선에 걸린 섹션을 활성화하고 스크롤에 따라 갱신한다", () => {
    // line = 0.35 * 800 = 280 → about(-200), featured(120) 가 기준선 위 → featured 활성
    mountSections({
      about: -200,
      featured: 120,
      projects: 600,
      publications: 1200,
      awards: 1800,
      stack: 2400,
      contact: 3000,
    });

    render(React.createElement(ScrollSpyNav));

    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("aria-current", "true");
    expect(screen.getByRole("link", { name: "Projects" })).not.toHaveAttribute("aria-current");

    // projects 가 기준선을 넘어오도록 위치 변경 후 스크롤 → projects 활성
    const projectsEl = document.getElementById("projects");
    if (projectsEl) projectsEl.getBoundingClientRect = () => ({ top: 100 } as unknown as DOMRect);
    fireEvent.scroll(window);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "true");
  });

  it("ScrollSpyNav: 페이지 최하단에서는 마지막 섹션을 활성화한다", () => {
    mountSections({
      about: -3000,
      featured: -2400,
      projects: -1800,
      publications: -1200,
      awards: -600,
      stack: -100,
      contact: 50,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", { configurable: true, value: 4000 });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 3500 }); // 3500 + 800 >= 4000 - 2

    render(React.createElement(ScrollSpyNav));
    fireEvent.scroll(window);

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("aria-current", "true");
  });

  it("Header: 현재 경로에 해당하는 내비게이션 항목을 활성 표시한다", () => {
    const { container } = render(React.createElement(Header));

    // 모바일 메뉴까지 열어 데스크톱·모바일 활성 분기를 모두 실행
    fireEvent.click(screen.getByRole("button", { name: "메뉴 열기" }));

    const projectsLinks = container.querySelectorAll('a[href="/projects"]');
    expect(projectsLinks.length).toBeGreaterThanOrEqual(2);

    // 활성 항목은 진한 텍스트(text-slate-900) 클래스를 가진다
    const hasActive = Array.from(projectsLinks).some((a) => a.className.includes("text-slate-900"));
    expect(hasActive).toBe(true);
  });
});

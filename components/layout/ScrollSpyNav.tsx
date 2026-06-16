"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "featured", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

/**
 * 긴 홈 페이지에서 현재 섹션을 알려주는 세로 인디케이터.
 * 데스크톱(xl 이상)에서만 노출하고, 활성 섹션만 라벨을 보여 시각적으로 조용하게 유지한다.
 */
export function ScrollSpyNav() {
  // 빈 문자열 = 아직 첫 섹션 전(히어로) → 아무것도 강조하지 않음
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const ids = sections.map((section) => section.id);
    let frame = 0;

    const compute = () => {
      frame = 0;
      // "읽고 있는 위치" 기준선 — 뷰포트 위쪽 35%
      const line = window.innerHeight * 0.35;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      // 페이지 맨 아래에 닿으면 마지막 섹션을 확실히 활성화
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = ids.at(-1) ?? current;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label="섹션 내비게이션"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:right-10 xl:block"
    >
      <ul className="flex flex-col items-end gap-3.5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center justify-end gap-2.5"
              >
                <span
                  className={`text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-slate-900 opacity-100"
                      : "text-slate-400 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`h-px transition-all duration-200 ${
                    isActive ? "w-8 bg-brand" : "w-4 bg-slate-300 group-hover:bg-slate-400"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

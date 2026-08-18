import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";

import AboutPage from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import ContactPage from "@/app/contact/page";
import Home from "@/app/page";
import ProjectsPage from "@/app/projects/page";
import ResumePage from "@/app/resume/page";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const getRequiredElement = <T extends Element>(container: HTMLElement, selector: string): T => {
  const element = container.querySelector<T>(selector);

  if (element === null) {
    throw new Error(`Expected element matching selector "${selector}" to exist.`);
  }

  return element;
};

describe("portfolio pages", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders the home hero positioning, featured work, and core calls to action", () => {
    render(React.createElement(Home));

    expect(
      screen.getByText(
        "RAG와 AI Agent부터 Backend, On-premise LLM Serving, 배포와 운영까지 End-to-End로 AI 시스템을 설계하고 구축합니다.",
      ),
    ).toBeInTheDocument();
    // Hero 배지는 메인 직함(AI Engineer) 하나로 고정한다
    expect(screen.getByText(/AI Engineer · RAG · Agents · LLM Systems/)).toBeInTheDocument();
    expect(screen.getByText("사내 규정 검색 AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Docker-based Federated Learning Heterogeneity Testbed")).toBeInTheDocument();
    // 평가셋 기반 수치는 측정 규모를 함께 노출한다
    expect(screen.getByText("240 docs · 106 queries")).toBeInTheDocument();
    expect(document.querySelectorAll('a[href="#projects"]').length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('a[href^="mailto:gunni6112@gmail.com"]')).not.toBeNull();
  });

  it("renders about positioning and tech stack context", () => {
    render(React.createElement(AboutPage));

    expect(screen.getAllByText("AI / Agent Systems").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Retrieval").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("LLM Systems").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("사내 규정 검색 AI Assistant")).toBeInTheDocument();
    // 회사 경력은 하나의 회사 아래 여러 업무로 묶여 보여야 한다
    expect(screen.getByText("(주)엑스코어시스템")).toBeInTheDocument();
    expect(screen.getByText("사내망 CI/CD 개발환경 구축")).toBeInTheDocument();
  });

  it("renders resume awards, publications, and certifications", () => {
    render(React.createElement(ResumePage));

    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("NAVER Cloud Platform Certified Associate")).toBeInTheDocument();
    expect(screen.getByText("CEDC 2025 Bronze Award")).toBeInTheDocument();
    expect(
      screen.getByText("쿠버네티스 기반 연합학습 및 스플릿 컴퓨팅의 최신 연구 동향"),
    ).toBeInTheDocument();
  });

  it("renders the full projects index with role separation", () => {
    render(React.createElement(ProjectsPage));

    expect(screen.getByText(/When2Work/)).toBeInTheDocument();
    expect(screen.getByText("Budgetly")).toBeInTheDocument();
    expect(screen.getAllByText("PyTorch").length).toBeGreaterThanOrEqual(1);
    // AfterFail 역할 구분 note가 노출되어야 한다
    expect(screen.getByText(/Chaos Mesh 장애 주입.*팀원이 담당/)).toBeInTheDocument();
    // Featured에서 내린 초기 프로젝트는 Archive 영역에만 남는다
    expect(screen.getByText("초기 프로젝트")).toBeInTheDocument();
    expect(screen.getByText("로컬 RAG 파이프라인 (local-rag-policy-chat)")).toBeInTheDocument();
  });

  it("submits the contact form successfully", async () => {
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200, text: "OK" });

    const { container } = render(React.createElement(ContactPage));

    const name = getRequiredElement<HTMLInputElement>(container, 'input[name="name"]');
    const email = getRequiredElement<HTMLInputElement>(container, 'input[name="email"]');
    const message = getRequiredElement<HTMLTextAreaElement>(container, 'textarea[name="message"]');
    const submitButton = getRequiredElement<HTMLButtonElement>(container, 'button[type="submit"]');

    fireEvent.change(name, { target: { value: "Donggeon" } });
    fireEvent.change(email, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message, { target: { value: "hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(name).toHaveValue("");
      expect(email).toHaveValue("");
      expect(message).toHaveValue("");
    });
  });

  it("renders the contact form error state", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("mail failed"));

    const { container } = render(React.createElement(ContactPage));
    const name = getRequiredElement<HTMLInputElement>(container, 'input[name="name"]');
    const email = getRequiredElement<HTMLInputElement>(container, 'input[name="email"]');
    const message = getRequiredElement<HTMLTextAreaElement>(container, 'textarea[name="message"]');
    const submitButton = getRequiredElement<HTMLButtonElement>(container, 'button[type="submit"]');

    fireEvent.change(name, { target: { value: "Donggeon" } });
    fireEvent.change(email, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message, { target: { value: "hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(container.querySelector(".form-status--error")).not.toBeNull();
    });
  });

  it("renders blog, header, and footer navigation surfaces", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: "ok", items: [] }),
      }),
    );

    const blogRender = render(React.createElement(BlogPage));

    expect(screen.getByRole("link", { name: /Tistory/i })).toHaveAttribute("href", "https://exit0.tistory.com");

    blogRender.unmount();
    const { container } = render(React.createElement(Header));
    expect(container.querySelector('a[href="/"]')).not.toBeNull();
    fireEvent.click(getRequiredElement<HTMLButtonElement>(container, "button"));
    expect(container.querySelectorAll('a[href="/projects"]').length).toBeGreaterThanOrEqual(1);

    cleanup();
    render(React.createElement(Footer));
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});

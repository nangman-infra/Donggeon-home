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

    expect(screen.getByText("AI 서비스를 제품 수준으로 구현하고 운영 환경까지 고려하는 엔지니어")).toBeInTheDocument();
    expect(screen.getAllByText("RAG Application").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("사내 규정 검색 AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Federated Learning Testbed & Real Device Validation")).toBeInTheDocument();
    expect(document.querySelectorAll('a[href="#projects"]').length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('a[href^="mailto:gunni6112@gmail.com"]')).not.toBeNull();
  });

  it("renders about positioning and tech stack context", () => {
    render(React.createElement(AboutPage));

    expect(screen.getAllByText("AI / ML").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Infra / DevOps").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("사내 규정 검색 AI Assistant")).toBeInTheDocument();
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

    expect(screen.getByText("When2Work")).toBeInTheDocument();
    expect(screen.getByText("Budgetly")).toBeInTheDocument();
    expect(screen.getAllByText("PyTorch").length).toBeGreaterThanOrEqual(1);
    // AfterFail 역할 구분 note가 노출되어야 한다
    expect(screen.getByText(/해당 영역.*팀원이 담당/)).toBeInTheDocument();
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

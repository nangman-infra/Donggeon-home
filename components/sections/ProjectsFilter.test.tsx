import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import type { Project } from "@/content/portfolio";

vi.useFakeTimers();

const makeProject = (overrides: Partial<Project> & Pick<Project, "id" | "title" | "category">): Project => ({
  description: "",
  year: "2026",
  contributions: [],
  tech: [],
  featured: false,
  ...overrides,
});

const PROJECTS: Project[] = [
  makeProject({ id: "rag-1", title: "RAG 챗봇", category: "RAG / LLM" }),
  makeProject({ id: "web-1", title: "When2Work", category: "Web Service" }),
  makeProject({ id: "infra-1", title: "KISA 점검", category: "Security / Shell" }),
  makeProject({ id: "ai-2", title: "Federated Learning", category: "Federated Learning" }),
];

describe("ProjectsFilter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("전체 필터에서 모든 프로젝트를 렌더링한다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    expect(screen.getByText("RAG 챗봇")).toBeInTheDocument();
    expect(screen.getByText("When2Work")).toBeInTheDocument();
    expect(screen.getByText("KISA 점검")).toBeInTheDocument();
    expect(screen.getByText("Federated Learning")).toBeInTheDocument();
  });

  it("초기 상태에서 전체 필터 버튼이 aria-pressed=true다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    expect(screen.getByRole("button", { name: /전체/i })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /AI/i })).toHaveAttribute("aria-pressed", "false");
  });

  it("필터 버튼에 각 카테고리의 프로젝트 카운트가 표시된다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    const allBtn = screen.getByRole("button", { name: /전체/i });
    expect(allBtn.textContent).toContain("4");

    const aiBtn = screen.getByRole("button", { name: /AI/i });
    expect(aiBtn.textContent).toContain("2");
  });

  it("AI 필터 클릭 후 타이머 경과하면 AI 프로젝트만 표시된다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    fireEvent.click(screen.getByRole("button", { name: /AI/i }));

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.getByText("RAG 챗봇")).toBeInTheDocument();
    expect(screen.getByText("Federated Learning")).toBeInTheDocument();
    expect(screen.queryByText("When2Work")).not.toBeInTheDocument();
    expect(screen.queryByText("KISA 점검")).not.toBeInTheDocument();
  });

  it("Infra 필터 클릭 후 타이머 경과하면 Infra 프로젝트만 표시된다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    fireEvent.click(screen.getByRole("button", { name: /Infra/i }));

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.getByText("KISA 점검")).toBeInTheDocument();
    expect(screen.queryByText("RAG 챗봇")).not.toBeInTheDocument();
    expect(screen.queryByText("When2Work")).not.toBeInTheDocument();
  });

  it("Web 필터 클릭 후 타이머 경과하면 Web 프로젝트만 표시된다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    fireEvent.click(screen.getByRole("button", { name: /^Web/i }));

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.getByText("When2Work")).toBeInTheDocument();
    expect(screen.queryByText("RAG 챗봇")).not.toBeInTheDocument();
  });

  it("이미 활성화된 필터를 다시 클릭해도 변경되지 않는다", () => {
    render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    const allBtn = screen.getByRole("button", { name: /전체/i });
    fireEvent.click(allBtn);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(allBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByRole("article").length).toBe(PROJECTS.length);
  });

  it("필터 전환 중 opacity가 0이 됐다가 타이머 후 1로 복구된다", () => {
    const { container } = render(React.createElement(ProjectsFilter, { projects: PROJECTS }));

    const grid = container.querySelector<HTMLDivElement>(".grid.gap-6");
    expect(grid).not.toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /AI/i }));
    expect(grid?.style.opacity).toBe("0");

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(grid?.style.opacity).toBe("1");
  });
});

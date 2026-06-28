import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import NotFound from "@/app/not-found";

describe("not-found page", () => {
  afterEach(() => {
    cleanup();
  });

  it("404 메시지와 홈·프로젝트 링크를 렌더링한다", () => {
    render(React.createElement(NotFound));

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("페이지를 찾을 수 없습니다")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "홈으로 돌아가기" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "프로젝트 보기" })).toHaveAttribute("href", "/projects");
  });
});

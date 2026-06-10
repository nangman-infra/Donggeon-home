import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";
import Home from "@/app/page";
import ResumePage from "@/app/resume/page";

describe("donggeon main pages", () => {
  it("renders the AI product engineering home page", () => {
    render(React.createElement(Home));

    expect(screen.getByText("실제 업무 흐름에 붙는 AI 시스템을 만드는 엔지니어.")).toBeInTheDocument();
    expect(screen.getByText("일반 프로젝트 카드가 아니라 엔지니어링 케이스 스터디로 보여줍니다.")).toBeInTheDocument();
    expect(screen.getByText("Budgetly")).toBeInTheDocument();
    expect(screen.getByText("Federated Learning")).toBeInTheDocument();
    expect(screen.getByText("Dev Card Hunter")).toBeInTheDocument();
  });

  it("renders about and resume pages", () => {
    const { rerender } = render(React.createElement(AboutPage));

    expect(screen.getByText("AI 기능을 실제 제품 흐름으로 연결하는 엔지니어를 목표로 합니다.")).toBeInTheDocument();
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();

    rerender(React.createElement(ResumePage));

    expect(screen.getByText("AI 제품 엔지니어링 역할에 맞춘 역량 요약")).toBeInTheDocument();
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
  });
});

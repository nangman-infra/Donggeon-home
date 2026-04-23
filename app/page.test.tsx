import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AboutPage from "@/app/about/page";
import Home from "@/app/page";
import ResumePage from "@/app/resume/page";

describe("donggeon main pages", () => {
  it("renders home sections and responds to keyboard shortcuts", () => {
    vi.useFakeTimers();
    render(React.createElement(Home));

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("동건")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Budgetly")).toBeInTheDocument();

    fireEvent.keyDown(globalThis, { key: "k", ctrlKey: true });
    fireEvent.keyDown(globalThis, { key: "Escape" });

    vi.useRealTimers();
  });

  it("renders about and resume pages", () => {
    const { rerender } = render(React.createElement(AboutPage));

    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();

    rerender(React.createElement(ResumePage));

    expect(screen.getByText("Education, Skills & Certifications")).toBeInTheDocument();
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
  });
});

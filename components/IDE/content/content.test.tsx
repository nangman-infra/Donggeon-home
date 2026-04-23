import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AboutContent } from "@/components/IDE/content/AboutContent";
import { ContactContent } from "@/components/IDE/content/ContactContent";
import { ExperienceContent } from "@/components/IDE/content/ExperienceContent";
import { ProjectsContent } from "@/components/IDE/content/ProjectsContent";
import { ReadmeContent } from "@/components/IDE/content/ReadmeContent";
import { SkillsContent } from "@/components/IDE/content/SkillsContent";

describe("donggeon ide content", () => {
  it("renders static panels", () => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(AboutContent),
        React.createElement(ExperienceContent),
        React.createElement(ProjectsContent),
        React.createElement(SkillsContent)
      )
    );

    expect(screen.getByText("about.json")).toBeInTheDocument();
    expect(screen.getByText("experience.ts")).toBeInTheDocument();
    expect(screen.getByText("Budgetly")).toBeInTheDocument();
    expect(screen.getByText("skills.config.js")).toBeInTheDocument();
  });

  it("submits contact form and animates readme", async () => {
    vi.useFakeTimers();

    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(ContactContent),
        React.createElement(ReadmeContent)
      )
    );

    fireEvent.change(screen.getByLabelText("NAME"), { target: { value: "Donggeon" } });
    fireEvent.change(screen.getByLabelText("EMAIL"), { target: { value: "donggeon@example.com" } });
    fireEvent.change(screen.getByLabelText("MESSAGE"), { target: { value: "hello" } });
    fireEvent.submit(screen.getByRole("button", { name: "SEND MESSAGE" }));

    await act(async () => {
      vi.advanceTimersByTime(4000);
      await Promise.resolve();
    });

    expect(screen.getByText("README.md")).toBeInTheDocument();
    expect(screen.getByText("✓ Message sent successfully!")).toBeInTheDocument();

    vi.useRealTimers();
  });
});

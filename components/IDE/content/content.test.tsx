import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

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
        React.createElement(SkillsContent),
      ),
    );

    expect(screen.getByText("about.json")).toBeInTheDocument();
    expect(screen.getByText("experience.ts")).toBeInTheDocument();
    expect(screen.getAllByText("Budgetly").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("skills.config.js")).toBeInTheDocument();
  });

  it("submits contact form and animates readme", async () => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(ContactContent),
        React.createElement(ReadmeContent),
      ),
    );

    fireEvent.change(screen.getByLabelText("NAME"), { target: { value: "Donggeon" } });
    fireEvent.change(screen.getByLabelText("EMAIL"), { target: { value: "donggeon@example.com" } });
    fireEvent.change(screen.getByLabelText("MESSAGE"), { target: { value: "hello" } });
    fireEvent.submit(screen.getByRole("button", { name: "SEND MESSAGE" }));

    await waitFor(() => {
      expect(screen.getByLabelText("NAME")).toHaveValue("");
      expect(screen.getByLabelText("EMAIL")).toHaveValue("");
      expect(screen.getByLabelText("MESSAGE")).toHaveValue("");
    });

    expect(screen.getByText("README.md")).toBeInTheDocument();
  });
});

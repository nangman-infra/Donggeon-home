import React from "react";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CommandPalette } from "@/components/IDE/CommandPalette";
import { Editor } from "@/components/IDE/Editor";
import { IDELayout } from "@/components/IDE/IDELayout";
import { Sidebar } from "@/components/IDE/Sidebar";
import { Titlebar } from "@/components/IDE/Titlebar";

describe("ide shell", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("opens the command palette from the keyboard and selects a file", () => {
    render(React.createElement(IDELayout));

    expect(screen.getAllByText("README.md").length).toBeGreaterThanOrEqual(1);

    fireEvent.keyDown(globalThis, { key: "k", ctrlKey: true });
    fireEvent.change(screen.getByPlaceholderText("Type a command or search..."), {
      target: { value: "contact" },
    });
    fireEvent.click(screen.getByText("Open contact.tsx"));

    expect(screen.getAllByText("contact.tsx").length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByPlaceholderText("Type a command or search...")).not.toBeInTheDocument();
  });

  it("closes the command palette with escape", () => {
    render(React.createElement(IDELayout));

    fireEvent.keyDown(globalThis, { key: "k", metaKey: true });
    expect(screen.getByPlaceholderText("Type a command or search...")).toBeInTheDocument();

    fireEvent.keyDown(globalThis, { key: "Escape" });

    expect(screen.queryByPlaceholderText("Type a command or search...")).not.toBeInTheDocument();
  });

  it("filters and runs command palette actions from the keyboard", () => {
    const onClose = vi.fn();
    const onFileSelect = vi.fn();

    render(React.createElement(CommandPalette, { onClose, onFileSelect }));

    fireEvent.change(screen.getByPlaceholderText("Type a command or search..."), {
      target: { value: "skills" },
    });
    fireEvent.keyDown(globalThis, { key: "ArrowDown" });
    fireEvent.keyDown(globalThis, { key: "ArrowUp" });
    fireEvent.keyDown(globalThis, { key: "Enter" });

    expect(onFileSelect).toHaveBeenCalledWith("skills");
    expect(onClose).toHaveBeenCalled();
  });

  it("closes the command palette from the backdrop", () => {
    const onClose = vi.fn();

    render(React.createElement(CommandPalette, { onClose, onFileSelect: vi.fn() }));
    fireEvent.click(screen.getByRole("button", { name: "Close command palette" }));

    expect(onClose).toHaveBeenCalled();
  });

  it("navigates files from the sidebar and toggles folders", () => {
    const onFileClick = vi.fn();

    render(React.createElement(Sidebar, { activeFile: "readme", onFileClick }));

    fireEvent.click(screen.getByText("about.json"));
    expect(onFileClick).toHaveBeenCalledWith("about");

    fireEvent.click(screen.getByText("portfolio"));
    expect(screen.queryByText("README.md")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("portfolio"));
    expect(screen.getByText("README.md")).toBeInTheDocument();
  });

  it("renders editor tabs and tab interactions", () => {
    const onTabClick = vi.fn();
    const onTabClose = vi.fn();

    const { rerender } = render(
      React.createElement(Editor, {
        activeFile: "about",
        openTabs: ["readme", "about"],
        onTabClick,
        onTabClose,
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: /README\.md/ }));
    expect(onTabClick).toHaveBeenCalledWith("readme");

    const aboutTab = screen.getByRole("button", { name: /about\.json/ }).closest(".editor-tab");
    if (!(aboutTab instanceof HTMLElement)) {
      throw new Error("Expected about tab to exist.");
    }

    const aboutTabButtons = within(aboutTab).getAllByRole("button");
    const closeButton = aboutTabButtons.at(-1);
    if (closeButton === undefined) {
      throw new Error("Expected about tab close button to exist.");
    }

    fireEvent.click(closeButton);
    expect(onTabClose).toHaveBeenCalledWith("about");

    rerender(
      React.createElement(Editor, {
        activeFile: "experience",
        openTabs: ["experience", "skills", "projects", "contact"],
        onTabClick,
        onTabClose,
      }),
    );

    expect(screen.getAllByText("experience.ts").length).toBeGreaterThanOrEqual(1);

    rerender(
      React.createElement(Editor, {
        activeFile: "projects",
        openTabs: ["projects"],
        onTabClick,
        onTabClose,
      }),
    );

    expect(screen.getAllByText("Budgetly").length).toBeGreaterThanOrEqual(1);

    rerender(
      React.createElement(Editor, {
        activeFile: "contact",
        openTabs: ["contact"],
        onTabClick,
        onTabClose,
      }),
    );

    expect(screen.getAllByText("contact.tsx").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the titlebar", () => {
    render(React.createElement(Titlebar));

    expect(screen.getByText(/donggeon\.dev/)).toBeInTheDocument();
  });
});

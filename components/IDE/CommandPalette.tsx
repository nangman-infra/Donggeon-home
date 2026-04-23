"use client";

import { useState, useEffect, useRef } from "react";
import { FileType } from "./IDELayout";

interface CommandPaletteProps {
  onClose: () => void;
  onFileSelect: (file: FileType) => void;
}

interface Command {
  id: string;
  label: string;
  description: string;
  action: () => void;
  icon: string;
}

export function CommandPalette({ onClose, onFileSelect }: Readonly<CommandPaletteProps>) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "readme",
      label: "Open README.md",
      description: "View portfolio introduction",
      icon: "📄",
      action: () => {
        onFileSelect("readme");
        onClose();
      },
    },
    {
      id: "about",
      label: "Open about.json",
      description: "Personal information",
      icon: "📋",
      action: () => {
        onFileSelect("about");
        onClose();
      },
    },
    {
      id: "experience",
      label: "Open experience.ts",
      description: "Work experience and education",
      icon: "💼",
      action: () => {
        onFileSelect("experience");
        onClose();
      },
    },
    {
      id: "skills",
      label: "Open skills.config.js",
      description: "Technical skills and expertise",
      icon: "⚙️",
      action: () => {
        onFileSelect("skills");
        onClose();
      },
    },
    {
      id: "projects",
      label: "Open projects/",
      description: "View all projects",
      icon: "📁",
      action: () => {
        onFileSelect("projects");
        onClose();
      },
    },
    {
      id: "contact",
      label: "Open contact.tsx",
      description: "Get in touch",
      icon: "✉️",
      action: () => {
        onFileSelect("contact");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [filteredCommands, selectedIndex]);

  return (
    <>
      <button
        type="button"
        aria-label="Close command palette"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="command-palette">
        <input
          ref={inputRef}
          type="text"
          className="command-input"
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
        />
        <div className="max-h-96 overflow-y-auto">
          {filteredCommands.map((cmd, index) => (
            <button
              type="button"
              key={cmd.id}
              className={`command-item ${selectedIndex === index ? "selected" : ""}`}
              onClick={cmd.action}
            >
              <span className="text-2xl">{cmd.icon}</span>
              <div className="flex-1">
                <div className="font-mono text-sm">{cmd.label}</div>
                <div className="text-xs text-muted-foreground">{cmd.description}</div>
              </div>
              {selectedIndex === index && (
                <kbd className="px-2 py-1 bg-muted rounded text-xs">↵</kbd>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

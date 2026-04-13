"use client";

import { FileType } from "./IDELayout";
import { ReadmeContent } from "./content/ReadmeContent";
import { AboutContent } from "./content/AboutContent";
import { ExperienceContent } from "./content/ExperienceContent";
import { SkillsContent } from "./content/SkillsContent";
import { ProjectsContent } from "./content/ProjectsContent";
import { ContactContent } from "./content/ContactContent";

interface EditorProps {
  activeFile: FileType;
  openTabs: FileType[];
  onTabClick: (file: FileType) => void;
  onTabClose: (file: FileType) => void;
}

const fileIcons: Record<FileType, string> = {
  readme: "📄",
  about: "📋",
  experience: "💼",
  skills: "⚙️",
  projects: "📁",
  contact: "✉️",
};

const fileNames: Record<FileType, string> = {
  readme: "README.md",
  about: "about.json",
  experience: "experience.ts",
  skills: "skills.config.js",
  projects: "projects/",
  contact: "contact.tsx",
};

export function Editor({ activeFile, openTabs, onTabClick, onTabClose }: EditorProps) {
  const renderContent = () => {
    switch (activeFile) {
      case "readme":
        return <ReadmeContent />;
      case "about":
        return <AboutContent />;
      case "experience":
        return <ExperienceContent />;
      case "skills":
        return <SkillsContent />;
      case "projects":
        return <ProjectsContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <ReadmeContent />;
    }
  };

  return (
    <div className="ide-editor">
      <div className="editor-tabs">
        {openTabs.map((tab) => (
          <div
            key={tab}
            className={`editor-tab ${activeFile === tab ? "active" : ""}`}
            onClick={() => onTabClick(tab)}
          >
            <span>{fileIcons[tab]}</span>
            <span className="font-mono text-xs">{fileNames[tab]}</span>
            <button
              className="ml-2 hover:bg-muted/50 rounded px-1"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
}

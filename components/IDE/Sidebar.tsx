"use client";

import { useState } from "react";
import { FileType } from "./IDELayout";

interface SidebarProps {
  activeFile: FileType;
  onFileClick: (file: FileType) => void;
}

export function Sidebar({ activeFile, onFileClick }: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["root", "src"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder) ? prev.filter((f) => f !== folder) : [...prev, folder]
    );
  };

  const files = [
    { name: "README.md", type: "readme" as FileType, icon: "📄" },
    { name: "about.json", type: "about" as FileType, icon: "📋" },
    { name: "experience.ts", type: "experience" as FileType, icon: "💼" },
    { name: "skills.config.js", type: "skills" as FileType, icon: "⚙️" },
    { name: "projects/", type: "projects" as FileType, icon: "📁" },
    { name: "contact.tsx", type: "contact" as FileType, icon: "✉️" },
  ];

  return (
    <div className="ide-sidebar">
      <div className="p-3 border-b border-border">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Explorer
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="py-2">
          <div
            className="file-tree-folder"
            onClick={() => toggleFolder("root")}
          >
            <span>{expandedFolders.includes("root") ? "▼" : "▶"}</span>
            <span>portfolio</span>
          </div>
          
          {expandedFolders.includes("root") && (
            <div className="ml-4">
              {files.map((file) => (
                <div
                  key={file.type}
                  className={`file-tree-item ${activeFile === file.type ? "active" : ""}`}
                  onClick={() => onFileClick(file.type)}
                >
                  <span>{file.icon}</span>
                  <span className="font-mono text-xs">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-mono">main</span>
        </div>
      </div>
    </div>
  );
}

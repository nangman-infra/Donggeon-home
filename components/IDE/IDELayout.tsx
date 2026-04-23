"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Editor } from "./Editor";
import { CommandPalette } from "./CommandPalette";
import { Titlebar } from "./Titlebar";

export type FileType = "about" | "experience" | "skills" | "projects" | "contact" | "readme";

export function IDELayout() {
  const [activeFile, setActiveFile] = useState<FileType>("readme");
  const [openTabs, setOpenTabs] = useState<FileType[]>(["readme"]);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openFile = (file: FileType) => {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveFile(file);
  };

  const closeTab = (file: FileType) => {
    const newTabs = openTabs.filter((tab) => tab !== file);
    setOpenTabs(newTabs);
    if (activeFile === file && newTabs.length > 0) {
      setActiveFile(newTabs.at(-1) ?? "readme");
    }
  };

  return (
    <div className="ide-container">
      <Titlebar />
      
      <div className="ide-main">
        <Sidebar activeFile={activeFile} onFileClick={openFile} />
        <Editor 
          activeFile={activeFile} 
          openTabs={openTabs}
          onTabClick={setActiveFile}
          onTabClose={closeTab}
        />
      </div>

      {commandPaletteOpen && (
        <CommandPalette 
          onClose={() => setCommandPaletteOpen(false)}
          onFileSelect={openFile}
        />
      )}
    </div>
  );
}

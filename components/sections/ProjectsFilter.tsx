"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";

const FILTERS = [
  { label: "전체", value: "all" },
  { label: "AI / LLM", value: "ai" },
  { label: "Web", value: "web" },
  { label: "Infra", value: "infra" },
];

function matchFilter(project: Project, filter: string): boolean {
  if (filter === "all") return true;
  if (filter === "ai") return /RAG|LLM|AI|Federated|Document/i.test(project.category);
  if (filter === "web") return /Web|Platform|Frontend|Chrome|C \//i.test(project.category);
  if (filter === "infra") return /Security|Backend|DB|Embedded/i.test(project.category);
  return true;
}

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");
  const [pending, setPending] = useState("all");
  const [visible, setVisible] = useState(true);

  const filtered = projects.filter((p) => matchFilter(p, active));

  const handleFilter = (value: string) => {
    if (value === active) return;
    setPending(value);
    setVisible(false);
  };

  useEffect(() => {
    if (visible) return;
    const id = setTimeout(() => {
      setActive(pending);
      setVisible(true);
    }, 150);
    return () => clearTimeout(id);
  }, [visible, pending]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={active === f.value}
            onClick={() => handleFilter(f.value)}
            className={`rounded-lg border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === f.value
                ? "border-brand bg-brand text-white"
                : "border-gray-200 bg-white text-slate-500 hover:border-brand hover:text-brand"
            }`}
          >
            {f.label}
            <span className="ml-2 tabular-nums opacity-60">
              {projects.filter((p) => matchFilter(p, f.value)).length}
            </span>
          </button>
        ))}
      </div>

      <div
        className="grid gap-6 transition-opacity duration-150"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

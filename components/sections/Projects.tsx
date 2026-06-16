import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionHeader } from "./Shell";

type ProjectsProps = {
  projects: Project[];
  /** 전체 프로젝트 페이지로 가는 링크 노출 여부 (홈에서 사용) */
  showAllLink?: boolean;
};

export function Projects({ projects, showAllLink = false }: Readonly<ProjectsProps>) {
  return (
    <Section id="projects" labelledby="projects-title" band>
      <SectionHeader
        eyebrow="Projects"
        title="문제와 역할이 드러나는 프로젝트"
        titleId="projects-title"
        action={
          showAllLink ? (
            <Link
              href="/projects"
              className="group shrink-0 text-sm font-semibold text-slate-500 transition-colors hover:text-brand"
            >
              전체 프로젝트 보기 <span className="link-arrow">↗</span>
            </Link>
          ) : undefined
        }
      />

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

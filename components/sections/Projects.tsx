import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { sectionHeaders } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionHeader } from "./Shell";

type ProjectsProps = {
  projects: Project[];
  /** 전체 프로젝트 페이지로 가는 링크 노출 여부 (홈에서 사용) */
  showAllLink?: boolean;
  /** 페이지 자체에 PageHeader가 있을 때 내부 헤더 숨김 */
  hideHeader?: boolean;
};

export function Projects({ projects, showAllLink = false, hideHeader = false }: Readonly<ProjectsProps>) {
  return (
    <Section id="projects" labelledby="projects-title" band>
      {!hideHeader && (
        <SectionHeader
          eyebrow={sectionHeaders.projects.eyebrow}
          title={sectionHeaders.projects.title}
          titleId="projects-title"
          action={
            showAllLink ? (
              <Link
                href="/projects"
                className="group shrink-0 text-sm font-semibold text-slate-500 transition-colors hover:text-brand"
              >
                {sectionHeaders.projects.allLink} <span className="link-arrow">↗</span>
              </Link>
            ) : undefined
          }
        />
      )}

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

import { Archive } from "@/components/sections/Archive";
import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders, projects } from "@/content/portfolio";

export const metadata = {
  title: "Projects | 임동건",
  description: "AI Agent · RAG · LLM Systems부터 인프라, 웹까지 임동건이 직접 구현한 프로젝트 전체 목록.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.projects.eyebrow}
        title={pageHeaders.projects.title}
        desc={pageHeaders.projects.desc}
      />
      <div className="mx-auto grid w-full max-w-5xl gap-20 px-6 py-16 sm:gap-24 sm:px-8 sm:py-20">
        <ProjectsFilter projects={projects} />
        <Archive />
      </div>
    </div>
  );
}

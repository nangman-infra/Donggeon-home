import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders, projects } from "@/content/portfolio";

export const metadata = {
  title: "Projects | 임동건",
  description: "임동건이 직접 구현한 AI 서비스, 인프라, 웹 프로젝트 전체 목록.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.projects.eyebrow}
        title={pageHeaders.projects.title}
        desc={pageHeaders.projects.desc}
      />
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}

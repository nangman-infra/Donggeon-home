import { Projects } from "@/components/sections/Projects";
import { PageHeader } from "@/components/sections/Shell";
import { projects } from "@/content/portfolio";

export const metadata = {
  title: "Projects | 임동건",
  description: "임동건이 직접 구현한 AI 서비스, 인프라, 웹 프로젝트 전체 목록.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="문제 · 해결 · 성과로 정리한 전체 프로젝트"
        desc="기술 나열이 아니라 실제로 맡은 역할과 해결한 문제 중심으로 정리했습니다."
      />
      <Projects projects={projects} hideHeader />
    </div>
  );
}

import { Awards } from "@/components/sections/Awards";
import { Publications } from "@/components/sections/Publications";
import { TechStack } from "@/components/sections/TechStack";
import { PageHeader } from "@/components/sections/Shell";

export const metadata = {
  title: "Resume | 임동건",
  description: "임동건의 학력, 수상, 활동, 자격증, 논문, 기술 스택 정리.",
};

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resume"
        title="임동건 · AI/AX Engineer"
        desc="RAG 기반 사내 AI 서비스와 폐쇄망 CI/CD 환경을 직접 구축해 온 이력입니다."
      />
      <Awards />
      <Publications />
      <TechStack />
    </div>
  );
}

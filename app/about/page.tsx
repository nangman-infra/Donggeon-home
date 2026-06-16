import { About } from "@/components/sections/About";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { TechStack } from "@/components/sections/TechStack";
import { PageHeader } from "@/components/sections/Shell";

export const metadata = {
  title: "About | 임동건",
  description: "RAG 기반 AI 서비스와 온프레미스 LLM 추론 환경을 구축해 온 AI/AX Engineer 임동건 소개.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="AI 서비스와 인프라를 실제로 구현해 온 AI/AX Engineer"
        desc="모델을 붙이는 데서 끝내지 않고, 보안 환경과 운영까지 고려한 AI 서비스를 만드는 데 집중합니다."
      />
      <About />
      <FeaturedExperience />
      <TechStack />
    </div>
  );
}

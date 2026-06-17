import { About } from "@/components/sections/About";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { TechStack } from "@/components/sections/TechStack";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders } from "@/content/portfolio";

export const metadata = {
  title: "About | 임동건",
  description: "RAG 기반 AI 서비스와 온프레미스 LLM 추론 환경을 구축해 온 AI/AX Engineer 임동건 소개.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.about.eyebrow}
        title={pageHeaders.about.title}
        desc={pageHeaders.about.desc}
      />
      <About />
      <FeaturedExperience />
      <TechStack />
    </div>
  );
}

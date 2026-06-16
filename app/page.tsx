import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { TechStack } from "@/components/sections/TechStack";
import { ScrollSpyNav } from "@/components/layout/ScrollSpyNav";
import { projects } from "@/content/portfolio";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <div>
      <ScrollSpyNav />
      <Hero />
      <About />
      <FeaturedExperience />
      <Projects projects={featuredProjects} showAllLink />
      <Publications />
      <Awards />
      <TechStack />
      <Contact />
    </div>
  );
}

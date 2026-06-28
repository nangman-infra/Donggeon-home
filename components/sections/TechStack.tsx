import { sectionHeaders, techStack } from "@/content/portfolio";
import { Section, SectionHeader } from "./Shell";

const wideCategories = new Set(["AI / ML", "Infra / DevOps", "Backend"]);

export function TechStack() {
  return (
    <Section id="stack" labelledby="stack-title" band wide>
      <SectionHeader
        eyebrow={sectionHeaders.techStack.eyebrow}
        title={sectionHeaders.techStack.title}
        titleId="stack-title"
        desc={sectionHeaders.techStack.desc}
      />

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, index) => (
          <div
            key={group.category}
            className={`card card-hover flex flex-col p-7 ${
              wideCategories.has(group.category) ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">{group.category}</h3>
              <span className="font-mono text-xs text-slate-300">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

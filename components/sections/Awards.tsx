import { awards, certifications, education, sectionHeaders } from "@/content/portfolio";
import { Section, SectionHeader } from "./Shell";

export function Awards() {
  return (
    <Section id="awards" labelledby="awards-title" wide>
      <SectionHeader
        eyebrow={sectionHeaders.awards.eyebrow}
        title={sectionHeaders.awards.title}
        titleId="awards-title"
      />

      <div className="grid gap-5 lg:grid-cols-[2fr_1.3fr_2fr]">
        <div className="card card-hover p-7">
          <p className="eyebrow text-slate-400">Awards</p>
          <ul className="mt-5 grid gap-4">
            {awards.map((award) => (
              <li key={award.title} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <span>
                  {award.title}
                  {award.detail && <span className="mt-1 block text-slate-400">{award.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card card-hover p-7">
          <p className="eyebrow text-slate-400">Education</p>
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">{education.school}</p>
            <p className="mt-1 text-sm text-slate-400">{education.detail}</p>
          </div>
          {education.research && (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm font-semibold text-slate-900">{education.research.lab}</p>
              <p className="mt-1 text-sm text-slate-500">{education.research.role}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">{education.research.period}</p>
            </div>
          )}
        </div>

        <div className="card card-hover p-7">
          <p className="eyebrow text-slate-400">Certifications</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li key={cert} className="badge">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

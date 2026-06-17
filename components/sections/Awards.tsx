import { activities, awards, certifications, education, sectionHeaders } from "@/content/portfolio";
import { Section, SectionHeader } from "./Shell";

export function Awards() {
  return (
    <Section id="awards" labelledby="awards-title" wide>
      <SectionHeader
        eyebrow={sectionHeaders.awards.eyebrow}
        title={sectionHeaders.awards.title}
        titleId="awards-title"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="card card-hover p-7">
          <p className="eyebrow text-slate-400">수상</p>
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
          <p className="eyebrow text-slate-400">활동</p>
          {activities.map((activity) => (
            <div key={activity.title} className="mt-5">
              <p className="text-sm font-semibold leading-snug text-slate-900">{activity.title}</p>
              <ul className="mt-3 grid gap-2.5">
                {activity.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card card-hover p-7">
          <p className="eyebrow text-slate-400">Education & Certifications</p>
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">{education.school}</p>
            <p className="mt-1 text-sm text-slate-400">{education.detail}</p>
          </div>
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

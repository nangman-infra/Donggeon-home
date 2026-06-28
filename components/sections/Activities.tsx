import { activities, sectionHeaders } from "@/content/portfolio";
import { Section, SectionHeader } from "./Shell";

export function Activities() {
  return (
    <Section id="activities" labelledby="activities-title" wide band>
      <SectionHeader
        eyebrow={sectionHeaders.activities.eyebrow}
        title={sectionHeaders.activities.title}
        titleId="activities-title"
      />

      <div className="grid gap-5">
        {activities.map((activity) => (
          <div key={activity.title} className="card card-hover p-8 sm:p-10">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow text-slate-400">Study</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                  {activity.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {activity.role && <span className="badge">{activity.role}</span>}
                  {activity.period && (
                    <span className="text-sm text-slate-400">{activity.period}</span>
                  )}
                </div>
              </div>
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs font-semibold text-slate-500 transition-colors hover:text-brand"
                >
                  {activity.link.replace(/^https?:\/\//, "")} <span className="link-arrow">↗</span>
                </a>
              )}
            </div>
            <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
              <div>
                {activity.description && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {activity.description}
                  </p>
                )}
                {activity.tech && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {activity.tech.map((t) => (
                      <li key={t} className="badge">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  주요 활동
                </p>
                <ul className="mt-4 grid gap-3.5">
                  {activity.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

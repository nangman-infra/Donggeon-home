import { featured, sectionHeaders } from "@/content/portfolio";
import { FlowDiagram } from "./FlowDiagram";
import { Section, SectionHeader } from "./Shell";

function FeaturedCard({ item }: { item: (typeof featured)[number] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
      {/* 문제 → 해결 → 성과 */}
      <div className="card p-8 sm:p-10">
        <div>
          <p className="eyebrow text-slate-400">Problem</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{item.problem}</p>
        </div>

        <div className="mt-10">
          <p className="eyebrow text-slate-400">Approach</p>
          <ul className="mt-4 grid gap-3">
            {item.approach.map((a) => (
              <li key={a} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="eyebrow text-slate-400">Result</p>
          <ul className="mt-4 grid gap-3">
            {item.result.map((r) => (
              <li key={r} className="flex gap-3 text-[0.95rem] font-medium leading-relaxed text-slate-800">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 벤토 사이드: 규모 · 파이프라인 · 기술 */}
      <div className="grid content-start gap-8">
        <dl className="card grid grid-cols-1 gap-px overflow-hidden bg-gray-200 p-px">
          {item.scale.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between bg-white px-6 py-5">
              <dt className="text-sm text-slate-500">{s.label}</dt>
              <dd className="font-mono text-sm font-semibold text-slate-900">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="card card-hover p-6">
          <p className="eyebrow text-slate-400">Pipeline</p>
          <div className="mt-5">
            <FlowDiagram steps={item.flow} label={`${item.title} 처리 흐름`} />
          </div>
        </div>

        <div className="card card-hover p-6">
          <p className="eyebrow text-slate-400">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tech.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedExperience() {
  return (
    <Section id="featured" labelledby="featured-title" wide>
      <SectionHeader
        eyebrow={sectionHeaders.featured.eyebrow}
        title="Featured Work"
        titleId="featured-title"
      />

      <div className="grid gap-16">
        {featured.map((item) => (
          <div key={item.title}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
            </div>
            <FeaturedCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}

import { featured } from "@/content/portfolio";
import { FlowDiagram } from "./FlowDiagram";
import { Section, SectionHeader } from "./Shell";

export function FeaturedExperience() {
  return (
    <Section id="featured" labelledby="featured-title" wide>
      <SectionHeader
        eyebrow="Featured Work"
        title={featured.title}
        titleId="featured-title"
        desc={featured.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
        {/* 문제 → 해결 → 성과: 텍스트 위주로 읽히는 본문 */}
        <div className="card p-8 sm:p-10">
          <div>
            <p className="eyebrow text-slate-400">Problem</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{featured.problem}</p>
          </div>

          <div className="mt-10">
            <p className="eyebrow text-slate-400">Approach</p>
            <ul className="mt-4 grid gap-3">
              {featured.approach.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="eyebrow text-slate-400">Result</p>
            <ul className="mt-4 grid gap-3">
              {featured.result.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] font-medium leading-relaxed text-slate-800">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 벤토 사이드: 규모 · 파이프라인 · 기술 */}
        <div className="grid content-start gap-8">
          <dl className="card grid grid-cols-1 gap-px overflow-hidden bg-gray-200 p-px">
            {featured.scale.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between bg-white px-6 py-5">
                <dt className="text-sm text-slate-500">{item.label}</dt>
                <dd className="font-mono text-sm font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="card card-hover p-6">
            <p className="eyebrow text-slate-400">Pipeline</p>
            <div className="mt-5">
              <FlowDiagram steps={featured.flow} label="규정 검색 AI Assistant 처리 흐름" />
            </div>
          </div>

          <div className="card card-hover p-6">
            <p className="eyebrow text-slate-400">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featured.tech.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

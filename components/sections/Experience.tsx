import type { WorkItem } from "@/content/portfolio";
import { experience, sectionHeaders } from "@/content/portfolio";
import { DetailAccordion } from "./DetailAccordion";
import { FlowDiagram } from "./FlowDiagram";
import { Section, SectionHeader } from "./Shell";

/** 수치의 측정 조건처럼 오해를 막기 위한 주석. */
function MeasurementNote({ note }: Readonly<{ note: string }>) {
  return (
    <p className="mt-6 border-l-2 border-gray-300 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-slate-500">
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">측정 조건 · </span>
      {note}
    </p>
  );
}

/** 문제 → 접근 → 결과 + 벤토 사이드(지표 · 파이프라인 · 스택). */
function WorkItemBody({ item }: Readonly<{ item: WorkItem }>) {
  const hasSide = Boolean(item.scale?.length || item.flow?.length || item.tech.length);

  return (
    <div className={`grid gap-8 ${hasSide ? "lg:grid-cols-[1.25fr_0.75fr] lg:gap-10" : ""}`}>
      <div className="card p-8 sm:p-10">
        <div>
          <p className="eyebrow text-slate-400">Problem</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{item.problem}</p>
        </div>

        <div className="mt-10">
          <p className="eyebrow text-slate-400">Contribution</p>
          <ul className="mt-4 grid gap-3">
            {item.approach.map((a) => (
              <li key={a} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {item.result && item.result.length > 0 && (
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
        )}

        {item.note && <MeasurementNote note={item.note} />}
      </div>

      {hasSide && (
        <div className="grid content-start gap-8">
          {item.scale && item.scale.length > 0 && (
            <dl className="card grid grid-cols-1 gap-px overflow-hidden bg-gray-200 p-px">
              {item.scale.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4 bg-white px-6 py-5">
                  <dt className="text-sm text-slate-500">{s.label}</dt>
                  <dd className="text-right font-mono text-base font-bold text-brand">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {item.flow && item.flow.length > 0 && (
            <div className="card card-hover p-6">
              <p className="eyebrow text-slate-400">Pipeline</p>
              <div className="mt-5">
                <FlowDiagram steps={item.flow} label={`${item.title} 처리 흐름`} />
              </div>
            </div>
          )}

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
      )}
    </div>
  );
}

function WorkItemHeading({ index, item }: Readonly<{ index: string; item: WorkItem }>) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 font-mono text-sm font-semibold text-slate-300">{index}</span>
      <div>
        <h4 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{item.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.subtitle}</p>
      </div>
    </div>
  );
}

/**
 * 하나의 회사 아래에 여러 업무를 배치하는 경력 섹션.
 * 주력 업무(primary)는 펼친 상태로, 나머지는 접이식 카드로 두어 모바일에서도 길어지지 않게 한다.
 */
export function ExperienceSection() {
  const { company, role, period, summary, items } = experience;

  return (
    <Section id="experience" labelledby="experience-title" wide>
      <SectionHeader
        eyebrow={sectionHeaders.experience.eyebrow}
        title={sectionHeaders.experience.title}
        titleId="experience-title"
      />

      <div className="mb-12 flex flex-col gap-5 border-l-2 border-brand pl-6 sm:mb-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">{company}</h3>
            <span className="badge">{role}</span>
          </div>
          <span className="font-mono text-sm text-slate-400">{period}</span>
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-slate-500">{summary}</p>
      </div>

      <ol className="grid gap-12 sm:gap-16">
        {items.map((item, i) => {
          const index = String(i + 1).padStart(2, "0");

          if (!item.primary) {
            return (
              <li key={item.id}>
                <details className="card group/work overflow-hidden">
                  <summary className="flex cursor-pointer list-none flex-col gap-4 p-7 transition-colors hover:bg-gray-50 sm:flex-row sm:items-start sm:justify-between sm:p-8 [&::-webkit-details-marker]:hidden">
                    <WorkItemHeading index={index} item={item} />
                    <span className="flex shrink-0 items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <span className="group-open/work:hidden">자세히</span>
                      <span className="hidden group-open/work:inline">접기</span>
                      <span className="transition-transform duration-200 group-open/work:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-gray-100 bg-gray-50 p-6 sm:p-8">
                    <WorkItemBody item={item} />
                    {item.detail && <DetailAccordion blocks={item.detail} />}
                  </div>
                </details>
              </li>
            );
          }

          return (
            <li key={item.id}>
              <div className="mb-6">
                <WorkItemHeading index={index} item={item} />
              </div>
              <WorkItemBody item={item} />
              {item.detail && <DetailAccordion blocks={item.detail} />}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

import { publications, sectionHeaders } from "@/content/portfolio";
import { Section, SectionHeader } from "./Shell";

export function Publications() {
  return (
    <Section id="publications" labelledby="publications-title">
      <SectionHeader
        eyebrow={sectionHeaders.publications.eyebrow}
        title={sectionHeaders.publications.title}
        titleId="publications-title"
      />

      <ol className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
        {publications.map((paper) => (
          <li
            key={paper.title}
            className="flex flex-col gap-4 bg-white p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8"
          >
            <div className="max-w-3xl">
              <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">{paper.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{paper.authors}</p>
              <p className="mt-1 text-sm text-slate-400">{paper.venue}</p>
            </div>
            <span className="inline-flex shrink-0 items-center self-start rounded-full border border-gray-200 px-3 py-1 font-mono text-xs font-semibold text-slate-600">
              {paper.role}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { archive, sectionHeaders } from "@/content/portfolio";
import { SectionHeader } from "./Shell";

/**
 * Featured에서 내린 초기 프로젝트.
 * 지금 하는 일과 섞이지 않도록 작은 카드로만, 페이지 맨 아래에 둔다.
 */
export function Archive() {
  return (
    <div className="border-t border-gray-200 pt-16 sm:pt-20">
      <SectionHeader
        eyebrow={sectionHeaders.archive.eyebrow}
        title={sectionHeaders.archive.title}
        desc={sectionHeaders.archive.desc}
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {archive.map((item) => (
          <li key={item.title} className="card card-hover group flex flex-col p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <span className="shrink-0 font-mono text-xs text-slate-300">{item.year}</span>
            </div>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-mono text-xs font-semibold text-slate-400 transition-colors hover:text-brand"
              >
                {item.href.replace(/^https?:\/\//, "")} <span className="link-arrow">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

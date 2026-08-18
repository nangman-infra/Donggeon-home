import type { DetailBlock } from "@/content/portfolio";

/**
 * 아키텍처·평가·운영처럼 카드 기본 뷰에 두면 길어지는 내용은 접어 둔다.
 * 네이티브 details/summary라 JS 없이 동작하고 키보드 조작도 그대로 지원된다.
 */
export function DetailAccordion({ blocks }: Readonly<{ blocks: DetailBlock[] }>) {
  return (
    <div className="mt-8 grid gap-3">
      {blocks.map((block) => (
        <details key={block.label} className="card group/detail overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
            <span className="eyebrow text-slate-400">{block.label}</span>
            <span
              className="font-mono text-xs text-slate-400 transition-transform duration-200 group-open/detail:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <ul className="grid gap-2.5 border-t border-gray-100 px-6 py-5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

import type { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";

type SectionProps = {
  id?: string;
  labelledby?: string;
  /** 오프화이트 밴드 배경 (섹션 리듬용) */
  band?: boolean;
  /** 벤토 그리드처럼 넓은 콘텐츠용 (max-w 확장) */
  wide?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * 모든 섹션의 공통 골격.
 * 넉넉한 세로 여백(py-24~32)과 중앙 정렬 컨테이너를 일관되게 제공한다.
 */
export function Section({ id, labelledby, band, wide, className, children }: Readonly<SectionProps>) {
  return (
    <SectionReveal
      as="section"
      id={id}
      aria-labelledby={labelledby}
      className={band ? "w-full bg-gray-50" : "w-full"}
    >
      <div
        className={`mx-auto w-full px-6 py-24 sm:px-8 sm:py-32 ${wide ? "max-w-6xl" : "max-w-5xl"} ${
          className ?? ""
        }`}
      >
        {children}
      </div>
    </SectionReveal>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  desc?: string;
  action?: ReactNode;
};

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  action?: ReactNode;
};

/** 서브페이지 상단 히어로 (sticky 헤더 아래 여백 포함). */
export function PageHeader({ eyebrow, title, desc, action }: Readonly<PageHeaderProps>) {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 pb-4 pt-32 sm:px-8 sm:pt-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          {desc && <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">{desc}</p>}
        </div>
        {action}
      </div>
    </header>
  );
}

export function SectionHeader({ eyebrow, title, titleId, desc, action }: Readonly<SectionHeaderProps>) {
  return (
    <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {desc && <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

import type { Project } from "@/content/portfolio";

type ProjectCardProps = {
  project: Project;
};

/**
 * "문제 → 해결 방법 → 성과" 흐름으로 읽히는 플랫 카드.
 * 인프라/AI 최적화 경험이 텍스트 위주로 깔끔하게 읽히도록 구성한다.
 */
export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <article className="card card-hover group p-7 sm:p-9">
      <header className="flex flex-col gap-4 border-b border-gray-100 pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{project.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">{project.description}</p>
        </div>
        {project.link && (
          <a
            className="shrink-0 font-mono text-xs font-semibold text-slate-500 transition-colors hover:text-brand"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.replace(/^https?:\/\//, "")} <span className="link-arrow">↗</span>
          </a>
        )}
      </header>

      {project.problem && (
        <div className="pt-7">
          <p className="eyebrow text-slate-400">Problem</p>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-slate-600">{project.problem}</p>
        </div>
      )}

      <div className="mt-7 grid gap-8 sm:grid-cols-2 sm:gap-10">
        <div>
          <p className="eyebrow text-slate-400">Approach</p>
          {project.role && <p className="mt-3 text-sm font-medium text-slate-700">담당 · {project.role}</p>}
          <ul className="mt-3 grid gap-2.5">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          {project.results && project.results.length > 0 && (
            <div>
              <p className="eyebrow text-slate-400">Impact</p>
              <ul className="mt-3 grid gap-2.5">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-slate-800">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="eyebrow text-slate-400">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {project.note && (
        <p className="mt-7 border-l-2 border-gray-300 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-slate-500">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            역할 구분 ·{" "}
          </span>
          {project.note}
        </p>
      )}
    </article>
  );
}

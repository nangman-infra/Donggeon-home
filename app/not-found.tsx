import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-400">404</p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 max-w-sm text-base text-slate-500">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          홈으로 돌아가기
        </Link>
        <Link href="/projects" className="btn-ghost">
          프로젝트 보기
        </Link>
      </div>
    </div>
  );
}

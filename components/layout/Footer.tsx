export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="font-mono text-sm text-muted-foreground">© {currentYear} 임동건. All rights reserved.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Next.js와 Tailwind CSS로 만든 AI 제품 엔지니어링 포트폴리오.
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/whitejbb"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gunni6112@gmail.com"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

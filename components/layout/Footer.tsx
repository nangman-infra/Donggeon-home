export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} 동건. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/whitejbb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gunni6112@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

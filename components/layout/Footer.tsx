export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>(c) {currentYear} 임동건. Building AI products from retrieval to runtime.</p>
      <div>
        <a href="https://github.com/whitejbb" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:gunni6112@gmail.com">Email</a>
      </div>
    </footer>
  );
}

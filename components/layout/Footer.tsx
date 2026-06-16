import { contact } from "@/content/portfolio";

const links = [
  { label: "GitHub", href: contact.github, external: true },
  { label: "Website", href: contact.website, external: true },
  { label: "Email", href: `mailto:${contact.email}`, external: false },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-slate-400">© {currentYear} 임동건 · AI/AX Engineer</p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:text-brand"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

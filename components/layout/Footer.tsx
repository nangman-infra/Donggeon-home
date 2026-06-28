"use client";

import Link from "next/link";
import { contact } from "@/content/portfolio";
import { Logo } from "./Logo";

const sectionLinks = [
  { href: "/#about", label: "About" },
  { href: "/#featured", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#publications", label: "Research" },
  { href: "/#activities", label: "Activities" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

const externalLinks = [
  { label: "GitHub", href: contact.github },
  { label: "Website", href: contact.website },
  { label: "Email", href: `mailto:${contact.email}` },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6" />
            <span className="text-sm font-bold tracking-tight text-slate-900">임동건</span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-5">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <p className="text-xs text-slate-400">© {currentYear} 임동건 · AI Product Engineer</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-xs font-semibold text-slate-400 transition-colors hover:text-brand"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

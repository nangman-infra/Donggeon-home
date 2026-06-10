"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/projects", label: "프로젝트" },
    { href: "/resume", label: "이력" },
    { href: "/contact", label: "연락" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-lg border border-black/10 bg-background/90 px-4 py-3 shadow-lg shadow-black/[0.04] backdrop-blur-xl">
          <Link href="/" className="font-mono text-sm font-semibold text-foreground">
            임동건
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            {isMenuOpen ? "닫기" : "메뉴"}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="mt-2 grid gap-1 rounded-lg border border-black/10 bg-background/95 p-2 shadow-lg shadow-black/[0.05] backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" aria-label="홈으로 이동" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="text-base font-bold tracking-tight text-slate-900">임동건</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                pathname === item.href ? "text-slate-900" : "text-slate-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 items-center rounded-lg border border-gray-200 px-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="메뉴 열기"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? "닫기" : "메뉴"}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="mx-4 mb-3 grid gap-1 rounded-xl border border-gray-200 bg-white p-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-lg px-3.5 py-3 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-gray-50 text-slate-900"
                  : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

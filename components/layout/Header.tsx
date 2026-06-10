"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", marker: "01" },
  { href: "/projects", label: "Projects", marker: "02" },
  { href: "/blog", label: "Blog", marker: "03" },
  { href: "/resume", label: "Resume", marker: "04" },
  { href: "/contact", label: "Contact", marker: "05" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <aside className="site-sidebar" aria-label="주요 메뉴">
        <Link href="/" className="sidebar-brand" aria-label="홈으로 이동">
          <span className="sidebar-brand__mark">DG</span>
          <span>
            <strong>임동건</strong>
            <small>AI Product Engineer</small>
          </span>
        </Link>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "sidebar-nav__item sidebar-nav__item--active" : "sidebar-nav__item"}
              >
                <span>{item.marker}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-status">
          <span>Available for</span>
          <strong>Applied AI, FDE, AX</strong>
        </div>
      </aside>

      <header className="mobile-header">
        <Link href="/" className="mobile-brand">
          DG
        </Link>
        <button type="button" className="mobile-menu-button" onClick={() => setIsMenuOpen((value) => !value)}>
          {isMenuOpen ? "닫기" : "메뉴"}
        </button>
        {isMenuOpen && (
          <nav className="mobile-menu" aria-label="모바일 메뉴">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "mobile-menu__item mobile-menu__item--active" : "mobile-menu__item"}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

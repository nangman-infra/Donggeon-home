"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/#systems", label: "Work" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-header">
      <Link href="/" className="top-brand" aria-label="Go to home">
        <Image src="/icon.svg" alt="" width={32} height={32} className="brand-logo" aria-hidden="true" priority />
        <strong>임동건</strong>
      </Link>

      <nav className="top-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={pathname === item.href ? "top-nav__item top-nav__item--active" : "top-nav__item"}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button type="button" className="mobile-menu-button" onClick={() => setIsMenuOpen((value) => !value)}>
        {isMenuOpen ? "닫기" : "메뉴"}
      </button>
      {isMenuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
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
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type SiteHeaderProps = {
  lang: Locale;
  labels: Dictionary["nav"];
};

export default function SiteHeader({ lang, labels }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: localePath(lang, "/"), label: labels.home },
    { href: localePath(lang, "/about"), label: labels.about },
    { href: localePath(lang, "/services"), label: labels.services },
  ];
  const bookHref = localePath(lang, "/book");

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-surface-muted/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href={localePath(lang, "/")}
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="TÓKI"
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain"
          />
          <span className="sr-only">{labels.homeLink}</span>
        </Link>

        <nav aria-label={labels.main} className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-sans text-nav transition-colors duration-200 hover:text-primary ${
                  isActive ? "text-primary" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher current={lang} label={labels.changeLanguage} />
          <Button href={bookHref} variant="outline" size="md">
            {labels.book}
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span
            aria-hidden
            className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-black/10 bg-surface-muted lg:hidden"
      >
        <Container className="flex flex-col gap-6 py-8">
          <nav aria-label={labels.mobile} className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="font-sans text-lead text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <LanguageSwitcher current={lang} label={labels.changeLanguage} />
            <Button href={bookHref} variant="outline" size="md" onClick={() => setMenuOpen(false)}>
              {labels.book}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

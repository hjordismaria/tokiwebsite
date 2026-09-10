"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-surface-muted/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
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
          <span className="sr-only">TÓKI home</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
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
          <LanguageSwitcher />
          <Button href="/book" variant="outline" size="md">
            Book
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
          <nav aria-label="Mobile" className="flex flex-col gap-5">
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
            <LanguageSwitcher />
            <Button href="/book" variant="outline" size="md" onClick={() => setMenuOpen(false)}>
              Book
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-pill border border-black px-4 py-2 font-sans text-eyebrow text-ink transition-colors duration-200 hover:bg-black hover:text-white"
    >
      EN
      <svg
        aria-hidden
        viewBox="0 0 18 18"
        className="h-4 w-4 fill-current"
        focusable="false"
      >
        <path d="M5.5575 6.4425L9 9.87751L12.4425 6.4425L13.5 7.5L9 12L4.5 7.5L5.5575 6.4425Z" />
      </svg>
      <span className="sr-only">Change language</span>
    </button>
  );
}

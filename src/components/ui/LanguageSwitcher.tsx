"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  LOCALE_COOKIE,
  localeNames,
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/i18n/config";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
};

/** Persist the choice so locale-less URLs redirect to this language next time. */
function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const path = stripLocale(pathname);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-pill border border-black px-4 py-2 font-sans text-eyebrow uppercase text-ink transition-colors duration-200 hover:bg-black hover:text-white"
      >
        {current}
        <svg
          aria-hidden
          viewBox="0 0 18 18"
          className={`h-4 w-4 fill-current transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          focusable="false"
        >
          <path d="M5.5575 6.4425L9 9.87751L12.4425 6.4425L13.5 7.5L9 12L4.5 7.5L5.5575 6.4425Z" />
        </svg>
        <span className="sr-only">{label}</span>
      </button>

      <ul
        id={menuId}
        role="menu"
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-2 min-w-40 rounded-card border border-black/10 bg-surface p-2 shadow-lift"
      >
        {locales.map((locale) => {
          const isCurrent = locale === current;
          return (
            <li key={locale} role="none">
              <Link
                role="menuitem"
                href={localePath(locale, path)}
                hrefLang={locale}
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => {
                  rememberLocale(locale);
                  setOpen(false);
                }}
                className={`flex items-center justify-between gap-4 rounded-pill px-4 py-2 font-sans text-nav transition-colors duration-200 hover:bg-surface-muted ${
                  isCurrent ? "text-primary" : "text-ink"
                }`}
              >
                {localeNames[locale]}
                <span className="text-eyebrow uppercase">{locale}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

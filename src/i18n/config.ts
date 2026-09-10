import { notFound } from "next/navigation";

export const locales = ["en", "is"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  is: "Íslenska",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an app path with the locale segment: localePath("is", "/book") -> "/is/book". */
export function localePath(locale: Locale, path = "/"): string {
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Strip a leading locale segment: "/is/book" -> "/book". */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first)) {
    const remainder = rest.join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname;
}

/** Resolve the [lang] route param, 404ing anything that is not a supported locale. */
export async function getLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

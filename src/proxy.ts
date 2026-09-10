import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales } from "@/i18n/config";

function pickLocale(request: NextRequest) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.trim().split(";")[0].toLowerCase().split("-")[0];
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

/** Next internals, static assets and anything that looks like a file are never localised. */
function isPageRequest(pathname: string) {
  if (pathname.startsWith("/_next") || pathname.startsWith("/images") || pathname.startsWith("/icons")) {
    return false;
  }
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  return !lastSegment.includes(".");
}

// Send locale-less page URLs to the visitor's language: "/book" -> "/is/book".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!isPageRequest(pathname)) return NextResponse.next();

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Elms_Sans,
  Hi_Melody,
  Montserrat,
  Newsreader,
  Raleway,
  Reenie_Beanie,
} from "next/font/google";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import { getLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const hiMelody = Hi_Melody({
  variable: "--font-hi-melody",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const elmsSans = Elms_Sans({
  variable: "--font-elms-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontVariables = [
  montserrat,
  raleway,
  reenieBeanie,
  newsreader,
  hiMelody,
  elmsSans,
]
  .map((font) => font.variable)
  .join(" ");

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const dict = getDictionary(await getLocale(params));
  return {
    title: { default: dict.meta.title, template: "%s — TÓKI" },
    description: dict.meta.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const lang = await getLocale(params);
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader lang={lang} labels={dict.nav} />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter lang={lang} labels={dict.footer} />
      </body>
    </html>
  );
}

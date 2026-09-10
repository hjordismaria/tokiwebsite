import type { Metadata } from "next";
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
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "TÓKI — A partner from idea to impact",
    template: "%s — TÓKI",
  },
  description:
    "TÓKI helps businesses develop, source and optimise physical products, packaging and the entire value chain around them.",
};

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

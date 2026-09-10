import type { Metadata } from "next";
import { Montserrat, Raleway, Reenie_Beanie } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "TÓKI — A partner from idea to impact",
    template: "%s — TÓKI",
  },
  description:
    "TÓKI helps businesses develop, source and optimise physical products, packaging and the entire value chain around them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${reenieBeanie.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

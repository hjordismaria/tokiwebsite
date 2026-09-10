import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tóki",
  description: "A partner from idea to impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

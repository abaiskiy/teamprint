import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TeamPrint — сублимационная печать и пошив в Алматы",
    template: "%s | TeamPrint",
  },
  description:
    "Флаги, текстиль и оформление мероприятий с собственного производства в Алматы. Сублимационная печать на ткани. От макета до доставки — 1–7 дней.",
  metadataBase: new URL("https://teamprint.kz"),
  openGraph: {
    siteName: "TeamPrint",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

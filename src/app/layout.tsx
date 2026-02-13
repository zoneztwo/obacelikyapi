import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Oba Çelik Yapı | Premium Çelik Ev ve Yapı Sistemleri",
  description: "Türkiye genelinde en üst segment çelik ev, hafif çelik ve endüstriyel yapı çözümleri sunan Oba Çelik Yapı kurumsal web sitesi.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className="antialiased font-sans bg-oba-light text-oba-dark"
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

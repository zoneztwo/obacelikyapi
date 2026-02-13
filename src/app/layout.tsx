import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oba Çelik Yapı | Çelik Yapı ve Prefabrik Çözümleri",
  description: "Türkiye genelinde en üst segment çelik yapı, prefabrik ev ve endüstriyel çözümler sunan Oba Çelik Yapı kurumsal web sitesi.",
  icons: {
    icon: "/assets/logos/favicon.webp",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-oba-light text-oba-dark`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

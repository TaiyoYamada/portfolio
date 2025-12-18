import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taiyoyamada.dev";

export const metadata: Metadata = {
  title: "Portfolio | 山田大陽",
  description:
    "山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。",
  keywords: [
    "山田大陽",
    "Taiyo Yamada",
    "ポートフォリオ",
    "エンジニア",
    "学生",
    "熊本県立大学",
    "飯村研究室",
    "Swift",
    "iOS開発",
    "Web開発",
    "量子アルゴリズム",
  ],
  authors: [{ name: "山田大陽", url: siteUrl }],
  creator: "山田大陽",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    title: "Portfolio | 山田大陽",
    description:
      "山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。",
    siteName: "Portfolio | 山田大陽",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "山田大陽 ポートフォリオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "山田大陽 | ポートフォリオ - エンジニア / 学生",
    description:
      "山田大陽のポートフォリオサイトです。iOSアプリ開発やWeb開発、量子アルゴリズムの研究に取り組んでいます。",
    images: ["/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD 構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "山田大陽",
  alternateName: "Taiyo Yamada",
  url: siteUrl,
  image: `${siteUrl}/portfolio.png`,
  jobTitle: "エンジニア / 学生",
  description:
    "山田大陽のポートフォリオサイトです。iOSアプリ開発、Webアプリケーション開発、量子アルゴリズムの研究に取り組むエンジニア/学生です。",
  knowsAbout: [
    "Swift",
    "iOS開発",
    "Web開発",
    "TypeScript",
    "React",
    "Next.js",
    "量子コンピューティング",
  ],
};

import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-text`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}

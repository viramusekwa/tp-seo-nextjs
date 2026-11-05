import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formation informatique à Goma | Académie Numérique",
  description: "Découvrez des formations pratiques en développement web, réseaux informatiques et intelligence artificielle à Goma.",
  keywords: [
    "formation informatique à Goma",
    "développement web",
    "réseaux informatiques",
    "intelligence artificielle",
    "formation numérique",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Académie Numérique | Formation informatique à Goma",
    description:
      "Développez vos compétences en informatique et technologies numériques.",
    type: "website",
    locale: "fr_CD",
    siteName: "Académie Numérique",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

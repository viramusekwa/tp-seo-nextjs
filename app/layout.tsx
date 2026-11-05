import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://isigform.vercel.app"),

  title: "Formation informatique à Goma | Académie Numérique",

  description:
    "Découvrez nos formations en développement web, réseaux informatiques et intelligence artificielle à Goma.",

  alternates: {
    canonical: "/",
  },

  verification: {
  google: "cy2cVbdtVizxPNv899-J-zZoReWILIsLelMxAnJPCoI",
  },

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
    url: "/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      <GoogleAnalytics gaId="G-DQNOTSTJH8" />
    </html>
  );
}


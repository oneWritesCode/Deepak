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
  title: "Deepak Kumar Singh | Full Stack Developer | triordeep",
  description:
    "Portfolio of Deepak Kumar Singh (triordeep) — full stack developer building with Next.js, React, TypeScript, and Node.js.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deepak Kumar Singh",
  alternateName: "triordeep",
  url: "https://d33pak.space",
  sameAs: [
    "https://twitter.com/triordeep",
    "https://www.linkedin.com/in/deepak-singh-27a17a321/",
    "https://github.com/oneWritesCode",
    "https://medium.com/@triordeep",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
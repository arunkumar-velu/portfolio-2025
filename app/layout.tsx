import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Arun Kumar - Principal Frontend Architect | React & Micro-Frontend Expert",
  description:
    "Arun Kumar is a Principal Frontend Architect with 14 years of experience specializing in React, Next.js, micro-frontend architectures, and performance optimization. Founding engineer at ZEPIC, former Staff Engineer at Freshworks. Expert in building scalable web applications and leading high-performing teams.",
  keywords: [
    "frontend architect",
    "react developer",
    "next.js expert",
    "micro-frontend architecture",
    "typescript developer",
    "performance optimization",
    "web vitals",
    "principal engineer",
    "freshworks engineer",
    "zepic founding engineer",
    "chennai frontend developer",
    "javascript architect",
    "single-spa",
    "module federation",
  ],
  authors: [{ name: "Arun Kumar" }],
  openGraph: {
    title: "Arun Kumar - Principal Frontend Architect",
    description:
      "Expert in React, Next.js, and micro-frontend architectures. 14 years building scalable platforms at ZEPIC and Freshworks.",
    type: "website",
    locale: "en_US",
    siteName: "Arun Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar - Principal Frontend Architect",
    description: "Expert in React, Next.js, and micro-frontend architectures",
    creator: "@arun_kumar_velu",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arunkumar.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

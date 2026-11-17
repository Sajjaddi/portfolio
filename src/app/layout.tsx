import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Sajjad Jahani | Software Engineer",
  description:
    "Portfolio of Sajjad Jahani — Software Engineer with 4+ years of experience in Next.js, TypeScript, NestJS, Web3, and Full-Stack Engineering. Available for Freelance, Remote, and Hybrid roles.",
  keywords: [
    "Sajjad Jahani",
    "Software Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "NestJS",
    "TypeScript",
    "Web3",
    "Solana",
    "Tailwind CSS",
    "Tehran",
    "سجاد جهانی",
    "مهندس نرم‌افزار",
  ],
  authors: [{ name: "Sajjad Jahani" }],
  openGraph: {
    title: "Sajjad Jahani | Software Engineer",
    description: "4+ years engineering high-performance DApps, scalable dashboards, and solo SaaS products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#040711" />
      </head>
      <body className="min-h-screen bg-[#040711] text-slate-100 antialiased selection:bg-cyan-400 selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

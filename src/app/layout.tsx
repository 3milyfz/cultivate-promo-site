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
  title: "Cultivate Beta | Overview & Wiki",
  description:
    "Single external entry point for Cultivate beta testers, contributors, and evaluators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} relative h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-earth-50)] text-zinc-900">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="container mx-auto flex-1 px-4 py-8 lg:px-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-2">
          <a
            href="/"
            aria-label="Cultivate home"
            className="flex items-center gap-2"
          >
            <img
              src="/cultivate-logo-wordmark.png"
              alt="Cultivate"
              className="h-7 w-auto"
            />
            <span className="ml-1 rounded-full bg-[#E0F2EB] px-2 py-0.5 text-[11px] font-medium text-[#00674F]">
              Beta
            </span>
          </a>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a href="/" className="hover:text-zinc-900">
            Overview
          </a>
          <a href="/demo" className="hover:text-zinc-900">
            Demo
          </a>
          <a href="/workflow-architecture" className="hover:text-zinc-900">
            Workflow &amp; Architecture
          </a>
          <a href="/wiki" className="hover:text-zinc-900">
            Wiki
          </a>
          <a href="/contributing" className="hover:text-zinc-900">
            Contribute
          </a>
        </nav>
        <a
          href="/setup"
          className="rounded-md bg-[#00674F] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#00543f]"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[color:var(--color-earth-50)]">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-xs text-zinc-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          Status:{" "}
          <span className="font-medium text-amber-300">
            Beta
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/csc454-team-main-catzo/Cultivate"
            className="hover:text-zinc-900"
          >
            GitHub Repository
          </a>
          <a href="/wiki" className="hover:text-zinc-900">
            Wiki Home
          </a>
          <a
            href="https://github.com/csc454-team-main-catzo/Cultivate/issues"
            className="hover:text-zinc-900"
          >
            Issue Tracker
          </a>
        </div>
      </div>
    </footer>
  );
}

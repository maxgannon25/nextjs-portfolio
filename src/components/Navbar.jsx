"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="transition hover:text-blue-400"
        >
          MG
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">

          <Link href="/about" className="transition hover:text-blue-400">
            About
          </Link>

          <Link href="/projects" className="transition hover:text-blue-400">
            Projects
          </Link>

          <Link href="/contact" className="transition hover:text-blue-400">
            Contact
          </Link>

          <Link
            href="https://github.com/maxgannon25"
            target="_blank"
            className="rounded-lg border border-white/10 px-4 py-2 transition hover:border-blue-500 hover:text-blue-400"
          >
            GitHub
          </Link>

        </nav>

      </div>
    </header>
  );
}
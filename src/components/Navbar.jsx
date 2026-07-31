"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-blue-400 transition"
        >
          Max Gannon
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">

          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
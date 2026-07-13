"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          HireSense AI
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <button className="rounded-xl border px-4 py-2">
            Sign In
          </button>

          <button className="rounded-xl bg-black px-5 py-2 text-white hover:bg-zinc-800">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
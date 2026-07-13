import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-8 text-center">

        <h3 className="text-xl font-bold">HireSense AI</h3>

        <p className="mt-2 text-sm text-gray-500">
          AI-powered Resume Analyzer for Students.
        </p>

        <div className="mt-6 flex gap-6 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Contact</Link>
        </div>
        <p className="mt-6 text-xs text-gray-400">
  © 2026 HireSense AI. All rights reserved.
</p>

      </div>
    </footer>
  );
}
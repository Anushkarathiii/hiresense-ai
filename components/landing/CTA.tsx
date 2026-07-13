import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Build a Resume That Gets Interviews?
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Analyze your resume with AI, improve your ATS score, match job
          descriptions, and stand out during placements.
        </p>

        <Link
          href="/dashboard"
          className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Get Started Free
        </Link>

      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">

      <span className="mb-4 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
        🚀 AI Resume Analyzer
      </span>

      <h1 className="max-w-5xl text-6xl font-bold tracking-tight">
        Land More Interviews
        <br />
        with AI-Powered Resume Analysis
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Analyze your resume, improve ATS score, match job descriptions,
        identify missing skills and prepare for interviews using AI.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-black px-6 py-3 text-white hover:bg-zinc-800">
          Analyze Resume
        </button>

        <button className="rounded-xl border px-6 py-3 hover:bg-zinc-100">
          Learn More
        </button>
      </div>

    </section>
  );
}
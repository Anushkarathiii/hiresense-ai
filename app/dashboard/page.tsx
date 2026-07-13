export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Upload your resume and start improving it with AI.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              ATS Score
            </h2>

            <p className="mt-4 text-5xl font-bold">
              --
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Resume Analyses
            </h2>

            <p className="mt-4 text-5xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Job Matches
            </h2>

            <p className="mt-4 text-5xl font-bold">
              0
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
const features = [
  {
    title: "ATS Score",
    description: "Know how well your resume performs in ATS systems.",
  },
  {
    title: "Job Match",
    description: "Match your resume against any job description.",
  },
  {
    title: "AI Suggestions",
    description: "Get personalized improvements instantly.",
  },
  {
    title: "Missing Skills",
    description: "Discover which skills recruiters expect.",
  },
  {
    title: "Interview Prep",
    description: "Generate interview questions from your resume.",
  },
  {
    title: "Resume Versions",
    description: "Track every improvement over time.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Built for students preparing for placements.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
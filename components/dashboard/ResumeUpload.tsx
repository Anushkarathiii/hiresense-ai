"use client";

import { useState } from "react";

export default function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="mt-12">
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 text-center transition hover:border-black">

        <h2 className="text-2xl font-semibold">
          Upload Your Resume
        </h2>

        <p className="mt-3 text-gray-500">
          Upload your resume in PDF format to receive AI feedback.
        </p>

        <input
          type="file"
          accept=".pdf"
          className="mt-8"
          onChange={(event) => {
            const file = event.target.files?.[0] ?? null;
            setSelectedFile(file);
          }}
        />

        {selectedFile && (
          <p className="mt-6 text-green-600 font-medium">
            Selected File: {selectedFile.name}
          </p>
        )}
      <button
  disabled={!selectedFile || isLoading}
  onClick={() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }}
  className="mt-8 rounded-xl bg-black px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
>
  {isLoading ? "Analyzing..." : "Analyze Resume"}
</button>

      </div>
    </section>
  );
}
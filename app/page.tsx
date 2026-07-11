import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          HireSense AI
        </h1>

        <p className="max-w-xl text-lg text-zinc-600">
          AI-powered resume analyzer that helps students improve their
          resumes, match job descriptions, and prepare better for
          opportunities.
        </p>
      </div>

      <div className="flex gap-4">
        <Show when="signed-out">
  <SignInButton mode="modal">
    <button className="rounded-lg bg-black px-6 py-3 text-white">
      Sign In
    </button>
  </SignInButton>

  <SignUpButton mode="modal">
    <button className="rounded-lg border px-6 py-3">
      Sign Up
    </button>
  </SignUpButton>
</Show>

<Show when="signed-in">
  <UserButton />
</Show>
      </div>
    </main>
  );
}
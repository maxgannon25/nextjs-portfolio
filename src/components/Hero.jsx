import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">

        <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
          Software Engineer
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Max Gannon
        </h1>

        <p className="mb-10 max-w-2xl text-xl leading-9 text-zinc-400">
          Commercial experience developing customer-facing web applications
          across frontend and backend technologies. Passionate about building
          reliable software and continuously learning modern development tools.
        </p>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            About
          </Link>

          <Link
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            GitHub
          </Link>

        </div>

      </div>
    </section>
  );
}
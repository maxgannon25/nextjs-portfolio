import Link from "next/link";

export default function Contact() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold">Contact</h1>
          <div className="mt-3 h-1 w-16 rounded bg-blue-500"></div>
        </div>

        {/* Intro */}
        <div className="mb-16 max-w-2xl">
          <p className="text-lg leading-8 text-zinc-400">
            Thanks for taking the time to view my portfolio.
            If you'd like to discuss an opportunity or just get in touch,
            feel free to reach out through any of the platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Email
            </h2>

            <Link
              href="mailto:maxgannon25@outlook.com"
              className="text-zinc-400 transition hover:text-white"
            >
              maxgannon25@outlook.com
            </Link>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              GitHub
            </h2>

            <Link
              href="https://github.com/maxgannon25"
              target="_blank"
              className="text-zinc-400 transition hover:text-white"
            >
              github.com/maxgannon25
            </Link>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              LinkedIn
            </h2>

            <Link
              href="https://linkedin.com/in/maxgannon"
              target="_blank"
              className="text-zinc-400 transition hover:text-white"
            >
              linkedin.com/in/maxgannon
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
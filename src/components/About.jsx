export default function About() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold">About</h1>
          <div className="mt-3 h-1 w-16 rounded bg-blue-500"></div>
        </div>

        {/* Introduction */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 text-lg leading-8 text-zinc-300">
            I'm a software engineer with commercial experience developing
            customer-facing web applications. I enjoy building reliable,
            maintainable software and continuously improving my frontend and
            backend development skills.
          </p>

          <p className="text-lg leading-8 text-zinc-400">
            After completing a year in industry and graduating with a
            First Class Computer Science degree, I'm looking to further my career
            as a software engineer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Education */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Education
            </h2>

            <h3 className="text-lg font-medium">
              Queen's University Belfast
            </h3>

            <p className="mt-2 text-zinc-400">
              BSc Computer Science
            </p>

            <p className="mt-2 font-bold text-zinc-300">
              First Class Honours (82%)
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              2022 – 2026
            </p>
          </div>

          {/* Experience */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Experience
            </h2>

            <h3 className="text-lg font-medium">
              Puppet by Perforce
            </h3>

            <p className="mt-2 text-zinc-400">
              Software Engineering Intern
            </p>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>• Built production frontend features using JavaScript, TypeScript with EmberJS for Puppet Enterprise</li>
              <li>• Contributed to backend development on Puppet Comply and REST API tooling</li>
              <li>• Worked within Agile Scrum teams</li>
              <li>• Collaborated through GitHub pull requests and code reviews</li>
            </ul>
          </div>

        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-semibold">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Java",
              "Python",
              "SQL",
              "Docker",
              "Git",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
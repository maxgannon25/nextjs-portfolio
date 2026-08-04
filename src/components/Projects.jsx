"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to showcase my projects, skills and experience.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
  },
  {
    id: 3,
    title: "Final Year Project",
    description:
      "A responsive full-stack application developed during my Computer Science degree with a focus on scalable software engineering principles.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Flask", "GCP", "Linux", "Bash", "CSS", "HTML"],
    images: [
      "/overview-page.png",
      "/distribution-analysis.png",
      "/temporal-analysis.png",
      "/vendor-analysis.png",
      "/danger-analysis.png",
      "/kev-analysis.png",
      "/epss-analysis.png",
      "/cwe-search.png",
      "/cve-search.png",
      "/api-guidance.png",
    ],
    github: "#",
  },
];

export default function Projects() {

  const [currentImages, setCurrentImages] = useState(projects.map((project) => 0));

  const nextImage = (projectIndex) => {
    setCurrentImages((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        (updated[projectIndex] + 1) % projects[projectIndex].images.length;
      return updated;
    });
};

const prevImage = (projectIndex) => {
  setCurrentImages((prev) => {
    const updated = [...prev];
    updated[projectIndex] =
      (updated[projectIndex] - 1 + projects[projectIndex].images.length) %
      projects[projectIndex].images.length;
    return updated;
  });
};

  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="mt-3 h-1 w-16 rounded bg-blue-500"></div>
        </div>

        <p className="mb-16 max-w-3xl text-lg leading-8 text-zinc-400">
          A selection of personal, university and commercial projects that have
          helped develop my software engineering skills.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-zinc-700"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mb-6 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mb-8 flex flex-col items-center">
                {project.images && project.images.length > 0 && (
                  <Image
                    src={project.images[currentImages[index]]}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="rounded-lg"
                  />
                )}

                <div className="mt-4 flex gap-4">
                  <button className="rounded border border-zinc-700 px-4 py-2 hover:bg-zinc-800" onClick={() => prevImage(index)}>
                    &lt;
                  </button>

                  <button className="rounded border border-zinc-700 px-4 py-2 hover:bg-zinc-800" onClick={() => nextImage(index)}>
                    &gt;
                  </button>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">

                <Link
                  href={project.github}
                  className="rounded-lg border border-zinc-700 px-5 py-2 transition hover:bg-zinc-800"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
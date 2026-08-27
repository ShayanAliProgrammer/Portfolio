import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/portfolio/projects-grid";

export const metadata: Metadata = {
  title: "Selected work",
  description: "A curated selection of Shayan Ali Jalbani's full-stack web projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-3xl">
        <p className="text-muted text-xs font-extrabold tracking-[0.2em] uppercase">
          Selected work
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
          Projects built to be useful.
        </h1>
        <p className="text-muted mt-6 text-lg leading-8">
          A focused set of applications and web experiences. Each entry shows the product
          context, my role, and the technical choices behind the work.
        </p>
      </div>
      <ProjectsGrid allProjects />
    </main>
  );
}

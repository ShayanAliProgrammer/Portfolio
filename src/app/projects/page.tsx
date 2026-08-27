import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/portfolio/projects-grid";

export const metadata: Metadata = {
  title: "Selected work",
  description: "A curated selection of Shayan Ali Jalbani's full-stack web projects.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="spotlight border-line border-b">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
            Selected work
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[0.98] font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Projects built to be useful.
          </h1>
          <p className="text-muted mt-8 max-w-2xl text-lg leading-8 md:text-xl">
            A focused set of applications and web experiences. Each entry shows the
            product context, my role, and the technical decisions behind the build.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ProjectsGrid allProjects />
      </section>
    </main>
  );
}

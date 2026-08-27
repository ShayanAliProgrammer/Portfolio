import { ArrowUpRight, GitBranch } from "lucide-react";

import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import { siteConfig } from "@/data/site";

export function SelectedWork() {
  return (
    <section id="work" className="border-line border-b">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-16">
          <div>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              02 / Selected work
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Proof over promises.
            </h2>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <p className="text-muted max-w-xl text-base leading-7 md:text-lg">
              A short list of real projects, described by the problem, the role, and the
              decisions behind the build.
            </p>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent-strong inline-flex shrink-0 items-center gap-2 text-sm font-black hover:underline"
            >
              <GitBranch size={15} aria-hidden="true" />
              GitHub profile
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}

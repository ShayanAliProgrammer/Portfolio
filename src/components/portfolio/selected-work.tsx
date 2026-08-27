import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/data/site";
import { ProjectsGrid } from "@/components/portfolio/projects-grid";

export function SelectedWork() {
  return (
    <section id="work" className="border-line border-b">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-muted text-xs font-extrabold tracking-[0.2em] uppercase">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Proof over promises.
            </h2>
          </div>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent-strong inline-flex items-center gap-2 text-sm font-extrabold hover:underline"
          >
            See the GitHub profile
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}

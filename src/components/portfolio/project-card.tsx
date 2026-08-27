import { ArrowUpRight, GitBranch } from "lucide-react";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group border-line bg-surface hover:border-accent flex h-full flex-col rounded-[1.5rem] border p-6 transition duration-200 hover:-translate-y-1 ${featured ? "md:p-8" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-muted text-xs font-extrabold tracking-[0.16em] uppercase">
          {project.eyebrow}
        </p>
        <span className="bg-surface-strong text-muted rounded-full px-3 py-1 text-xs font-extrabold">
          {project.language}
        </span>
      </div>
      <h3 className="mt-10 text-2xl font-black tracking-tight">{project.name}</h3>
      <p className="text-muted mt-3 text-sm leading-6">{project.description}</p>
      <div className="border-line/80 bg-background/60 mt-6 rounded-xl border p-4">
        <p className="text-accent-strong text-xs font-extrabold tracking-[0.16em] uppercase">
          Why it matters
        </p>
        <p className="text-foreground mt-2 text-sm leading-6">{project.outcome}</p>
      </div>
      <dl className="border-line mt-6 grid grid-cols-2 gap-4 border-t pt-5 text-sm">
        <div>
          <dt className="text-muted text-xs font-extrabold tracking-[0.12em] uppercase">
            Role
          </dt>
          <dd className="mt-1 font-bold">{project.role}</dd>
        </div>
        <div>
          <dt className="text-muted text-xs font-extrabold tracking-[0.12em] uppercase">
            Stack
          </dt>
          <dd className="mt-1 font-bold">{project.stack.join(" · ")}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition"
          >
            Live demo
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="border-line text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold transition"
        >
          <GitBranch size={15} aria-hidden="true" />
          Source code
        </a>
      </div>
    </article>
  );
}

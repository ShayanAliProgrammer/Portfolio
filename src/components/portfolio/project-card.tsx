import Link from "next/link";
import { ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";

import { MotionReveal } from "@/components/motion/motion-reveal";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionReveal delay={index * 0.08} className="h-full">
      <article className="group border-line bg-surface hover:border-accent flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_-28px_var(--accent)]">
        <div className="relative">
          <ProjectPreview slug={project.slug} />
          <span className="text-accent absolute top-5 left-5 font-mono text-xs font-bold">
            0{index + 1}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-accent text-xs font-black tracking-[0.16em] uppercase">
                {project.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                {project.name}
              </h3>
            </div>
            <span className="border-line bg-background text-muted shrink-0 rounded-md border px-2.5 py-1 font-mono text-xs font-bold">
              {project.language}
            </span>
          </div>
          <p className="text-muted mt-3 text-sm leading-6">{project.description}</p>
          <div className="border-accent mt-6 border-l-2 pl-4">
            <p className="text-accent text-xs font-black tracking-[0.16em] uppercase">
              Why it matters
            </p>
            <p className="text-foreground mt-2 text-sm leading-6">{project.outcome}</p>
          </div>
          <dl className="border-line mt-7 grid grid-cols-2 gap-4 border-t pt-5 text-sm">
            <div>
              <dt className="text-muted text-xs font-black tracking-[0.12em] uppercase">
                Role
              </dt>
              <dd className="mt-1 font-bold">{project.role}</dd>
            </div>
            <div>
              <dt className="text-muted text-xs font-black tracking-[0.12em] uppercase">
                Stack
              </dt>
              <dd className="mt-1 font-bold">{project.stack.join(" · ")}</dd>
            </div>
          </dl>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <Link
              href={`/work/${project.slug}`}
              className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-black transition"
            >
              Read case study
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="border-line text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-black transition"
              >
                Live demo
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border-line text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-black transition"
            >
              <GitBranch size={15} aria-hidden="true" />
              Source code
            </a>
          </div>
        </div>
      </article>
    </MotionReveal>
  );
}

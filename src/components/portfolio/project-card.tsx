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
  const isReversed = index % 2 === 1;

  return (
    <MotionReveal delay={index * 0.08}>
      <article className="border-line group grid gap-8 border-t py-8 md:gap-12 md:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-center lg:gap-20">
        <div className={isReversed ? "lg:order-2" : undefined}>
          <div className="relative overflow-hidden rounded-xl">
            <ProjectPreview slug={project.slug} />
            <span className="bg-background text-accent absolute top-4 left-4 rounded-md px-2 py-1 font-mono text-xs font-bold">
              0{index + 1}
            </span>
          </div>
        </div>

        <div className={isReversed ? "lg:order-1" : undefined}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-accent text-xs font-black tracking-[0.16em] uppercase">
              {project.eyebrow}
            </p>
            <span className="text-muted font-mono text-xs font-bold uppercase">
              {project.language}
            </span>
          </div>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
            {project.name}
          </h3>
          <p className="text-muted mt-5 max-w-lg text-base leading-7">
            {project.description}
          </p>
          <div className="border-accent mt-7 border-l-2 pl-4">
            <p className="text-accent text-xs font-black tracking-[0.16em] uppercase">
              Why it matters
            </p>
            <p className="text-foreground mt-2 text-sm leading-6">{project.outcome}</p>
          </div>
          <dl className="border-line mt-8 grid grid-cols-2 gap-4 border-t pt-5 text-sm">
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
          <div className="mt-8 flex flex-wrap gap-3">
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

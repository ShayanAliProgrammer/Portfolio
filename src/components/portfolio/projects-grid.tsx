import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/portfolio/project-card";
import { featuredProjects, projects } from "@/data/projects";

export function ProjectsGrid({ allProjects = false }: { allProjects?: boolean }) {
  const visibleProjects = allProjects ? projects : featuredProjects;

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {visibleProjects.length > 0 ? (
        visibleProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))
      ) : (
        <p className="border-line text-muted rounded-2xl border p-8">
          No projects are available yet.
        </p>
      )}
      {!allProjects && (
        <div className="flex items-center lg:col-span-3 lg:justify-end">
          <Link
            href="/projects"
            className="text-accent-strong inline-flex items-center gap-2 text-sm font-black hover:underline"
          >
            Browse all projects
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

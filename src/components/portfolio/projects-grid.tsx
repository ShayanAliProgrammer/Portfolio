import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/portfolio/project-card";
import { featuredProjects, projects } from "@/data/projects";

export function ProjectsGrid({ allProjects = false }: { allProjects?: boolean }) {
  const visibleProjects = allProjects ? projects : featuredProjects;

  return (
    <div>
      {visibleProjects.length > 0 ? (
        <div>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="border-line text-muted rounded-2xl border p-8">
          No projects are available yet.
        </p>
      )}
      {!allProjects && (
        <div className="flex justify-end pt-8">
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

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { T3Logo } from "~/components/logos/t3";
import { TrpcLogo } from "~/components/logos/trpc";
import { TursoLogo } from "~/components/logos/turso";
import { Button } from "~/components/ui/button";
import { PER_PAGE } from ".";
import { ExternalLink, Eye, Star, Code2, Calendar } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  private: boolean;
  created_at: string;
  updated_at: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const icons: Record<string, JSX.Element> = {
  JavaScript: (
    <SiJavascript className="text-muted-foreground group-hover/box:text-yellow-400" />
  ),
  javascript: (
    <SiJavascript className="text-muted-foreground group-hover/box:text-yellow-400" />
  ),
  TypeScript: (
    <SiTypescript className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  typescript: (
    <SiTypescript className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  Python: (
    <SiPython className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  python: (
    <SiPython className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  Go: <SiGo className="text-muted-foreground group-hover/box:text-blue-400" />,
  go: <SiGo className="text-muted-foreground group-hover/box:text-blue-400" />,
  PHP: (
    <SiPhp className="text-muted-foreground group-hover/box:text-[#4F5B93]" />
  ),
  php: (
    <SiPhp className="text-muted-foreground group-hover/box:text-[#4F5B93]" />
  ),
  HTML: (
    <SiHtml5 className="text-muted-foreground group-hover/box:text-orange-500" />
  ),
  html: (
    <SiHtml5 className="text-muted-foreground group-hover/box:text-orange-500" />
  ),
  CSS: (
    <SiCss className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  css: (
    <SiCss className="text-muted-foreground group-hover/box:text-blue-500" />
  ),

  react: (
    <SiReact className="text-muted-foreground group-hover/box:text-[#61DAFB]" />
  ),
  nextjs: (
    <SiNextdotjs className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  tailwindcss: (
    <SiTailwindcss className="text-muted-foreground group-hover/box:text-[#06B6D4]" />
  ),
  tailwind: (
    <SiTailwindcss className="text-muted-foreground group-hover/box:text-[#06B6D4]" />
  ),
  nodejs: (
    <SiNodedotjs className="text-muted-foreground group-hover/box:text-[#339933]" />
  ),
  express: (
    <SiExpress className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  mongodb: (
    <SiMongodb className="text-muted-foreground group-hover/box:text-[#47A248]" />
  ),
  postgresql: (
    <SiPostgresql className="text-muted-foreground group-hover/box:text-[#4169E1]" />
  ),
  prisma: (
    <SiPrisma className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  git: (
    <SiGit className="text-muted-foreground group-hover/box:text-[#F05032]" />
  ),
  github: (
    <SiGithub className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  "shadcn-ui": (
    <SiShadcnui className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  shadcnui: (
    <SiShadcnui className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  shadcn: (
    <SiShadcnui className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-white" />
  ),
  "t3-stack": (
    <T3Logo className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-[#E2E8F0]" />
  ),
  t3stack: (
    <T3Logo className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-[#E2E8F0]" />
  ),
  t3: (
    <T3Logo className="text-muted-foreground group-hover/box:text-black dark:group-hover/box:text-[#E2E8F0]" />
  ),

  trpc: (
    <TrpcLogo className="text-muted-foreground group-hover/box:text-[#398CCB]" />
  ),
  turso: (
    <TursoLogo className="text-muted-foreground group-hover/box:text-[#4FF8D2]" />
  ),
  sqlite: (
    <SiSqlite className="text-muted-foreground group-hover/box:text-[#003B57]" />
  ),
};

interface ProjectCardsProps {
  repos: Repository[];
  total: number;
}

export default React.memo(function ProjectCards({
  repos,
  total,
}: ProjectCardsProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const currentRepos = repos.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRepos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group/box relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between p-6 pb-4">
              <div className="flex-1">
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="flex items-center gap-3 group"
                >
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {repo.description || "No description available"}
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-6 pb-4 space-y-4">
              {/* Language and Stats */}
              <div className="flex flex-wrap items-center gap-4">
                {repo.language && (
                  <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5">
                    <span className="*:size-4">
                      {icons[repo.language] || (
                        <span className="size-3 rounded-full bg-primary" />
                      )}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {repo.stargazers_count}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Code2 className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {repo.forks_count}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {repo.topics.slice(0, 5).map((topic) => (
                    <span
                      key={topic}
                      className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                      title={topic}
                    >
                      {icons[topic] || topic}
                    </span>
                  ))}
                  {repo.topics.length > 5 && (
                    <span className="text-xs text-muted-foreground">
                      +{repo.topics.length - 5} more
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between p-6 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href={repo.html_url} target="_blank">
                  <SiGithub className="size-4" />
                  View Code
                </a>
              </Button>

              {repo.homepage && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(repo.homepage?.toString(), "_blank");
                  }}
                >
                  <Eye className="size-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-2"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              asChild
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className="min-w-[40px]"
            >
              <Link
                href={`/projects?page=${page}`}
                scroll={false}
              >
                {page}
              </Link>
            </Button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
});

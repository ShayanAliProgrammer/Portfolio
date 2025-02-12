"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  SiCss3,
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
}

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
    <SiCss3 className="text-muted-foreground group-hover/box:text-blue-500" />
  ),
  css: (
    <SiCss3 className="text-muted-foreground group-hover/box:text-blue-500" />
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

export function ProjectCards({ repos, total }: ProjectCardsProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const currentRepos = repos.slice(startIndex, endIndex);

  return (
    <div
      className="z-10 mx-auto w-full max-w-7xl px-5 pt-10"
      id="project-cards"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentRepos.map((repo) => (
          <div
            key={repo.id}
            className="group/box relative z-10 flex flex-col overflow-hidden rounded-lg border bg-card/50 transition-all duration-150 hover:bg-card/40"
          >
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="underline-offset-8 hover:underline"
                >
                  <h3 className="mb-3 bg-gradient-to-t from-muted-foreground via-foreground/80 to-foreground bg-clip-text text-xl font-bold text-transparent">
                    {repo.name}
                  </h3>
                </a>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {repo.description || "No description available"}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {repo.language && (
                    <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1">
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

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        className="fill-muted-foreground"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      <span className="text-sm font-medium text-muted-foreground">
                        {repo.stargazers_count}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        className="fill-muted-foreground"
                      >
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                      </svg>
                      <span className="text-sm font-medium text-muted-foreground">
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  {repo.homepage && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto bg-background/50 text-foreground backdrop-blur-sm hover:bg-accent hover:text-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(repo.homepage?.toString(), "_blank");
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 border-t-2 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="flex items-center justify-center rounded-full bg-muted/50 p-2 text-xs *:size-5"
                          title={topic}
                        >
                          {icons[topic] || topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            scroll={false}
            className={`inline-flex min-w-[40px] items-center justify-center rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              currentPage === page
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}

import { env } from "~/env";
import { ProjectCards } from "./cards";

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

export const PER_PAGE = 6;

// Languages we want to show
const ALLOWED_LANGUAGES = ["TypeScript", "JavaScript", "HTML", "CSS", "PHP"];

async function getRepos(
  page: number,
): Promise<{ repos: Repository[]; total: number }> {
  const [reposRes, countRes] = await Promise.all([
    fetch(
      `https://api.github.com/users/${env.GITHUB_USERNAME}/repos?sort=updated&per_page=${PER_PAGE}&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    ),
    fetch(
      `https://api.github.com/users/${env.GITHUB_USERNAME}/repos?per_page=1`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      },
    ),
  ]);

  if (!reposRes.ok || !countRes.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await reposRes.json();
  const totalCount =
    Number(
      countRes.headers.get("link")?.match(/page=(\d+)>; rel="last"/)?.[1],
    ) || 1;

  const filteredRepos = repos.filter(
    (repo: Repository) =>
      !repo.private &&
      repo.name !== env.GITHUB_USERNAME &&
      repo.language &&
      ALLOWED_LANGUAGES.includes(repo.language),
  );

  return {
    repos: filteredRepos,
    total: totalCount,
  };
}

interface ProjectsSectionProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProjectsSection({
  searchParams,
}: ProjectsSectionProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const { repos, total } = await getRepos(currentPage);

  return (
    <section className="py-10" id="projects">
      <div className="text-center">
        <h2 className="mb-4 bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text text-3xl font-bold text-transparent">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-sm text-muted-foreground">
          Some of my projects that I am working on, from my{" "}
          <a
            className="text-foreground underline underline-offset-8"
            href={`https://github.com/${env.GITHUB_USERNAME ?? env.NEXT_PUBLIC_GITHUB_USERNAME}/`}
            target="_blank"
          >
            Github account
          </a>
        </p>
      </div>

      <ProjectCards repos={repos} total={total} />
    </section>
  );
}

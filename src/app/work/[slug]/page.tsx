import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";

import { PortraitCard } from "@/components/portfolio/portrait-card";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.name} — Case study`,
    description: `${project.description} ${project.outcome}`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case study`,
      description: project.outcome,
      url: `${siteConfig.url}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${siteConfig.url}/work/${project.slug}`,
    creator: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: project.stack.join(", "),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <section className="hero-scene border-line border-b">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/#work"
            className="text-muted hover:text-accent-strong inline-flex items-center gap-2 text-sm font-bold transition"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to selected work
          </Link>
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
                Case study / {project.language}
              </p>
              <h1 className="mt-5 max-w-4xl text-6xl leading-[0.88] font-black tracking-[-0.075em] sm:text-7xl lg:text-[8rem]">
                {project.name}
              </h1>
              <p className="text-muted mt-8 max-w-2xl text-lg leading-8 md:text-xl">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition"
                >
                  <GitBranch size={15} aria-hidden="true" />
                  View source
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-line bg-surface/60 hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition"
                  >
                    Live demo <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <PortraitCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <aside>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              Project notes
            </p>
            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="text-muted font-black tracking-[0.12em] uppercase">
                  Role
                </dt>
                <dd className="mt-2 font-bold">{project.role}</dd>
              </div>
              <div>
                <dt className="text-muted font-black tracking-[0.12em] uppercase">
                  Stack
                </dt>
                <dd className="mt-2 font-bold">{project.stack.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-muted font-black tracking-[0.12em] uppercase">
                  Primary output
                </dt>
                <dd className="mt-2 font-bold">{project.deliverables[0]}</dd>
              </div>
            </dl>
          </aside>
          <div className="space-y-16">
            <section>
              <p className="text-accent font-mono text-xs font-bold">01 / Challenge</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Make the important thing obvious.
              </h2>
              <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
                {project.challenge}
              </p>
            </section>
            <section>
              <p className="text-accent font-mono text-xs font-bold">02 / Approach</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Decisions that keep the work moving.
              </h2>
              <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
                {project.approach}
              </p>
            </section>
            <section>
              <p className="text-accent font-mono text-xs font-bold">03 / Deliverables</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="border-line bg-surface flex items-start gap-3 rounded-xl border p-4 text-sm font-bold"
                  >
                    <Check
                      className="text-accent mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="border-line bg-surface border-t px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              Keep exploring
            </p>
            <p className="mt-3 text-2xl font-black">More work, same standard.</p>
          </div>
          <Link
            href="/#work"
            className="border-line hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition"
          >
            View all selected work <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

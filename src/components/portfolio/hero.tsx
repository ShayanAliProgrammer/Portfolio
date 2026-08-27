import Link from "next/link";
import { ArrowDown, ArrowUpRight, GitBranch, MapPin } from "lucide-react";

import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="border-line border-b">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
        <div>
          <div className="text-muted mb-8 flex flex-wrap items-center gap-4 text-xs font-extrabold tracking-[0.2em] uppercase">
            <span className="inline-flex items-center gap-2">
              <span className="bg-accent size-2 rounded-full" aria-hidden="true" />
              Full-stack developer
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {siteConfig.location}
            </span>
          </div>
          <h1 className="text-foreground max-w-4xl text-5xl font-black tracking-[-0.06em] text-balance sm:text-6xl lg:text-8xl">
            Fast, thoughtful web products that move ideas forward.
          </h1>
          <p className="text-muted mt-8 max-w-2xl text-lg leading-8 md:text-xl">
            I help startups and small businesses turn ideas into reliable, SEO-friendly
            web experiences with Next.js, TypeScript, and modern backend systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition"
            >
              Let&apos;s work together
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link
              href="#work"
              className="border-line bg-surface text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-extrabold transition"
            >
              View selected work
              <ArrowDown size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="border-line bg-surface rounded-[2rem] border p-6 md:p-8">
          <p className="text-muted text-xs font-extrabold tracking-[0.2em] uppercase">
            What I bring
          </p>
          <ul className="divide-line mt-6 divide-y">
            <li className="py-4 first:pt-0">
              <p className="font-extrabold">Product-minded engineering</p>
              <p className="text-muted mt-1 text-sm leading-6">
                Clear interfaces, sensible architecture, and work that serves a real user.
              </p>
            </li>
            <li className="py-4">
              <p className="font-extrabold">Performance by default</p>
              <p className="text-muted mt-1 text-sm leading-6">
                Server-rendered pages, focused dependencies, and fast paths to the value.
              </p>
            </li>
            <li className="py-4 last:pb-0">
              <p className="font-extrabold">Transparent delivery</p>
              <p className="text-muted mt-1 text-sm leading-6">
                Readable code, typed contracts, and communication that keeps projects
                moving.
              </p>
            </li>
          </ul>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent-strong mt-8 inline-flex items-center gap-2 text-sm font-extrabold hover:underline"
          >
            <GitBranch size={16} aria-hidden="true" />
            Browse the source
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}

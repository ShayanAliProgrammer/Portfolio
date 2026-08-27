import Link from "next/link";
import { ArrowDown, ArrowUpRight, GitBranch, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/data/site";

const focusAreas = ["Product UI", "Full-stack systems", "Performance"];

export function Hero() {
  return (
    <section
      id="home"
      className="spotlight border-line relative overflow-hidden border-b"
    >
      <div className="grid-surface absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <div className="text-muted mb-8 flex flex-wrap items-center gap-3 text-xs font-black tracking-[0.18em] uppercase">
            <span className="border-line bg-surface/70 inline-flex items-center gap-2 rounded-full border px-3 py-2">
              <span
                className="bg-accent size-2 rounded-full shadow-[0_0_12px_var(--accent)]"
                aria-hidden="true"
              />
              Full-stack developer
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {siteConfig.location}
            </span>
          </div>
          <h1 className="text-foreground max-w-4xl text-5xl leading-[0.98] font-black tracking-[-0.06em] text-balance sm:text-6xl lg:text-8xl">
            I build digital products that feel{" "}
            <span className="text-accent">obvious.</span>
          </h1>
          <p className="text-muted mt-8 max-w-2xl text-lg leading-8 md:text-xl">
            Thoughtful interfaces, dependable backends, and fast browser experiences for
            teams turning a strong idea into something people can use.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={16} aria-hidden="true" />
              Start a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link
              href="#work"
              className="border-line bg-surface/70 text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              See selected work
              <ArrowDown size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="bg-surface-strong text-muted rounded-full px-3 py-1.5 text-xs font-bold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <aside className="border-line bg-surface/85 relative overflow-hidden rounded-2xl border shadow-2xl shadow-black/20">
          <div className="border-line flex items-center justify-between border-b px-5 py-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="size-2.5 rounded-full bg-[#ffd166]" />
              <span className="bg-accent size-2.5 rounded-full" />
            </div>
            <span className="text-muted font-mono text-xs">shayan.tsx</span>
          </div>
          <div className="space-y-5 p-6 font-mono text-sm leading-7 md:p-8">
            <p className="text-muted">
              <span className="text-secondary">const</span> developer = &#123;
            </p>
            <p className="text-foreground pl-5">
              name: <span className="text-accent">&quot;Shayan Ali&quot;</span>,
            </p>
            <p className="text-foreground pl-5">
              focus: <span className="text-accent">&quot;useful products&quot;</span>,
            </p>
            <p className="text-foreground pl-5">
              stack: [<span className="text-accent">&quot;Next.js&quot;</span>,{" "}
              <span className="text-accent">&quot;TypeScript&quot;</span>],
            </p>
            <p className="text-foreground pl-5">
              principle: <span className="text-accent">&quot;make it clear&quot;</span>,
            </p>
            <p className="text-muted">&#125;;</p>
            <div className="border-accent/30 bg-accent/5 mt-8 rounded-xl border p-4 font-sans">
              <p className="text-accent text-xs font-black tracking-[0.16em] uppercase">
                Current status
              </p>
              <p className="text-foreground mt-2 text-sm leading-6">
                Open to selected freelance projects and full-stack opportunities.
              </p>
            </div>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent-strong inline-flex items-center gap-2 font-sans text-sm font-black hover:underline"
            >
              <GitBranch size={15} aria-hidden="true" />
              Browse the source
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowDown, ArrowUpRight, GitBranch, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/data/site";

const focusAreas = ["Product UI", "Full-stack systems", "Performance"];

export function Hero() {
  return (
    <section
      id="home"
      className="hero-scene border-line relative overflow-hidden border-b"
    >
      <div className="grid-surface absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="hero-cloud hero-cloud-one" aria-hidden="true" />
      <div className="hero-cloud hero-cloud-two" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="text-muted mb-16 flex items-center justify-between gap-6 text-xs font-black tracking-[0.18em] uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="bg-accent size-2 rounded-full" aria-hidden="true" />
            Available for work
          </span>
          <span className="hidden items-center gap-1 sm:inline-flex">
            <MapPin size={14} aria-hidden="true" />
            {siteConfig.location}
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-accent mb-6 text-xs font-black tracking-[0.2em] uppercase">
              Hello, I&apos;m Shayan Ali. A —
            </p>
            <h1 className="text-foreground max-w-5xl text-6xl leading-[0.9] font-black tracking-[-0.075em] text-balance sm:text-7xl lg:text-[9rem]">
              Developer who <span className="text-accent">builds.</span>
            </h1>
            <div className="text-muted mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] font-bold tracking-[0.16em] uppercase">
              <span>Design</span>
              <span aria-hidden="true">/</span>
              <span>Details</span>
              <span aria-hidden="true">/</span>
              <span>Code</span>
            </div>
            <p className="text-muted mt-10 max-w-2xl text-lg leading-8 md:text-xl">
              I turn strong ideas into useful web products—clear on the surface,
              dependable underneath, and built to keep moving after launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-accent text-accent-foreground hover:bg-accent-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={16} aria-hidden="true" />
                Work with me
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <Link
                href="#work"
                className="border-line bg-surface/60 text-foreground hover:border-accent hover:text-accent-strong inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore selected work
                <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Focus areas">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="border-line bg-surface/45 text-muted rounded-full border px-3 py-1.5 text-xs font-bold"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:pb-4">
            <div className="text-muted absolute top-1/2 -left-8 hidden -translate-y-1/2 rotate-180 font-mono text-[10px] font-black tracking-[0.22em] uppercase [writing-mode:vertical-rl] sm:block">
              Design / Details / Code
            </div>
            <div className="border-line bg-surface/90 overflow-hidden rounded-[2rem] border shadow-2xl shadow-black/15">
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
                  principle:{" "}
                  <span className="text-accent">&quot;make it clear&quot;</span>,
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

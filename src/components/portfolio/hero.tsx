import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Phone } from "lucide-react";

import { MotionReveal } from "@/components/motion/motion-reveal";
import { PortraitCard } from "@/components/portfolio/portrait-card";
import { siteConfig } from "@/data/site";

const focusAreas = ["Product UI", "Full-stack systems", "Performance"];

export function Hero() {
  return (
    <section id="home" className="hero-scene border-line relative border-b">
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:py-36">
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

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-end lg:gap-20">
          <MotionReveal>
            <div>
              <p className="text-accent mb-6 text-xs font-black tracking-[0.2em] uppercase">
                Hello, I&apos;m Shayan Ali. A —
              </p>
              <h1 className="text-foreground max-w-5xl text-6xl leading-[0.86] font-black tracking-[-0.08em] text-balance sm:text-8xl lg:text-[10.5rem]">
                <span className="block">Developer</span>
                <span className="serif-italic text-foreground/80 block text-[1.06em] font-normal">
                  who
                </span>
                <span className="text-accent block">builds.</span>
              </h1>
              <div className="text-muted mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] font-bold tracking-[0.16em] uppercase">
                <span>Design</span>
                <span aria-hidden="true">/</span>
                <span>Details</span>
                <span aria-hidden="true">/</span>
                <span>Code</span>
              </div>
              <p className="text-muted mt-10 max-w-2xl text-lg leading-8 md:text-xl lg:max-w-xl">
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
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <aside className="mx-auto w-full max-w-md">
              <div className="text-muted mb-4 flex items-center justify-between font-mono text-[10px] font-black tracking-[0.18em] uppercase">
                <span>01 / Personal mark</span>
                <span>{siteConfig.location}</span>
              </div>
              <PortraitCard />
            </aside>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

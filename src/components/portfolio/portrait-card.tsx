import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/data/site";

export function PortraitCard() {
  return (
    <div className="portrait-card border-line bg-surface relative overflow-hidden rounded-[2rem] border shadow-2xl shadow-black/15">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,transparent_42%,color-mix(in_srgb,var(--accent)_18%,transparent)_42%,color-mix(in_srgb,var(--accent)_18%,transparent)_58%,transparent_58%)]"
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-[0.9fr_1.1fr] items-end gap-3 p-3">
        <span className="border-accent/40 bg-background/70 text-accent absolute top-5 right-5 z-10 rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.16em] uppercase backdrop-blur">
          3D identity study
        </span>
        <div className="border-line bg-background group relative aspect-[0.82] overflow-hidden rounded-[1.5rem] border">
          <Image
            src="/brand/shayan-3d-portrait.webp"
            alt="3D-inspired portrait of Shayan Ali in a tailored jacket"
            fill
            sizes="(max-width: 1024px) 42vw, 280px"
            className="object-cover object-[50%_24%] grayscale transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-3 pb-5">
          <div className="text-accent flex items-center gap-2">
            <Sparkles size={14} aria-hidden="true" />
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase">
              Personal mark
            </span>
          </div>
          <p className="font-display mt-5 text-3xl leading-[0.92] font-black tracking-[-0.06em]">
            Build with intention.
          </p>
          <p className="text-muted mt-4 text-sm leading-6">
            Design, details, and code—kept close to the problem.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-accent-strong mt-6 inline-flex items-center gap-2 text-sm font-black hover:underline"
          >
            Work with Shayan
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

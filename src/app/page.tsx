import { ArrowUpRight, Check, Phone } from "lucide-react";

import { Capabilities } from "@/components/portfolio/capabilities";
import { Hero } from "@/components/portfolio/hero";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { siteConfig } from "@/data/site";

const reasonsToHire = [
  "Clear communication from brief to launch",
  "Readable, typed, production-ready code",
  "Performance and accessibility treated as product features",
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="spotlight border-accent/40 bg-surface relative overflow-hidden rounded-3xl border p-7 shadow-[0_24px_80px_-35px_var(--accent)] md:p-12">
          <div className="grid-surface absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
                03 / Contact
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Have a good problem? Let&apos;s make it useful.
              </h2>
              <p className="text-muted mt-6 max-w-xl text-base leading-7 md:text-lg">
                Tell me what you are building, what is stuck, or what needs a clearer
                point of view. I will reply with the next sensible step.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-accent text-accent-foreground hover:bg-accent-strong mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition"
              >
                <Phone size={16} aria-hidden="true" />
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <ul className="border-line text-foreground space-y-3 border-t pt-6 text-sm lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              {reasonsToHire.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <Check
                    className="text-accent mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

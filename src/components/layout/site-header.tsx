import Link from "next/link";
import { ArrowUpRight, Menu, Phone } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigation, siteConfig } from "@/data/site";
import type { Theme } from "@/lib/theme";

type SiteHeaderProps = {
  initialTheme: Theme;
};

export function SiteHeader({ initialTheme }: SiteHeaderProps) {
  return (
    <header className="border-line/80 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label="Shayan Ali home"
        >
          <span className="border-accent bg-accent text-accent-foreground grid size-10 place-items-center rounded-xl border text-sm font-black transition-transform duration-200 group-hover:-rotate-6">
            SA
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black tracking-tight">
              {siteConfig.shortName}
            </span>
            <span className="text-muted block text-[10px] font-bold tracking-[0.16em] uppercase">
              Web engineer
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted hover:bg-surface-strong hover:text-foreground rounded-lg px-3 py-2 text-sm transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="border-line text-muted hidden items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold xl:inline-flex">
            <span className="bg-accent size-2 rounded-full" aria-hidden="true" />
            Available for work
          </span>
          <ThemeToggle initialTheme={initialTheme} />
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-accent text-accent-foreground hover:bg-accent-strong hidden items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-black transition sm:inline-flex"
          >
            <Phone size={15} aria-hidden="true" />
            Let&apos;s talk
          </a>
          <details className="relative lg:hidden">
            <summary className="border-line bg-surface text-foreground grid size-10 cursor-pointer list-none place-items-center rounded-lg border [&::-webkit-details-marker]:hidden">
              <Menu size={18} aria-hidden="true" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <nav
              className="border-line bg-surface absolute top-12 right-0 min-w-56 rounded-2xl border p-2 shadow-2xl"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted hover:bg-surface-strong hover:text-foreground block rounded-xl px-4 py-3 text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-accent text-accent-foreground mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black"
              >
                Let&apos;s talk
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

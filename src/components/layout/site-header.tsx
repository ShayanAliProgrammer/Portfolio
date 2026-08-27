import Link from "next/link";
import { ArrowUpRight, Menu, Phone } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-line/80 bg-background/90 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label="Shayan Ali home"
        >
          <span className="border-foreground bg-foreground text-background grid size-10 place-items-center rounded-full border text-sm font-extrabold transition-transform group-hover:rotate-6">
            SA
          </span>
          <span className="hidden text-sm font-extrabold tracking-tight sm:inline">
            {siteConfig.shortName}
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
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="text-muted hover:bg-surface-strong hover:text-foreground rounded-full px-4 py-2 text-sm transition"
            >
              {item.label}
              {item.external && (
                <ArrowUpRight className="ml-1 inline size-3.5" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-accent text-accent-foreground hover:bg-accent-strong hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition sm:inline-flex"
          >
            <Phone size={15} aria-hidden="true" />
            Start a project
          </a>
          <details className="relative lg:hidden">
            <summary className="border-line bg-surface text-foreground grid size-10 cursor-pointer list-none place-items-center rounded-full border [&::-webkit-details-marker]:hidden">
              <Menu size={18} aria-hidden="true" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <nav
              className="border-line bg-surface absolute top-12 right-0 min-w-52 rounded-2xl border p-2 shadow-xl"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="text-muted hover:bg-surface-strong hover:text-foreground block rounded-xl px-4 py-3 text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-accent text-accent-foreground mt-1 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold"
              >
                <Phone size={15} aria-hidden="true" />
                Start a project
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

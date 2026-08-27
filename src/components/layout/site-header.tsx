import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Menu, Phone } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigation, siteConfig } from "@/data/site";
import type { Theme } from "@/lib/theme";

type SiteHeaderProps = {
  initialTheme: Theme;
};

export function SiteHeader({ initialTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-transparent px-5 py-3 md:px-8 md:py-4">
      <div className="border-line/80 bg-surface/80 mx-auto flex min-h-14 max-w-[1440px] items-center justify-between gap-4 border-b px-0 pb-3 backdrop-blur-xl md:px-0">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label="Shayan Ali home"
        >
          <span
            className="border-accent bg-surface relative block size-10 overflow-hidden rounded-full border shadow-sm transition-transform duration-200 group-hover:-rotate-6 md:size-11"
            title="Shayan Ali pencil-art portrait"
          >
            <Image
              src="/brand/shayan-pencil-art.webp"
              alt="Pencil-art portrait of Shayan Ali"
              fill
              priority
              sizes="40px"
              className="object-cover object-[50%_24%] grayscale"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black tracking-tight">
              {siteConfig.shortName}
            </span>
            <span className="text-muted block text-[10px] font-bold tracking-[0.16em] uppercase">
              {siteConfig.location}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted hover:bg-surface-strong hover:text-foreground rounded-full px-3 py-2 text-sm transition"
            >
              <span className="text-accent mr-1 font-mono text-[9px]">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-muted hidden items-center gap-1.5 text-xs font-bold xl:inline-flex">
            <MapPin size={13} aria-hidden="true" />
            {siteConfig.location}
          </span>
          <ThemeToggle initialTheme={initialTheme} />
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-accent text-accent-foreground hover:bg-accent-strong hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black transition sm:inline-flex"
          >
            <Phone size={14} aria-hidden="true" />
            Work with me
          </a>
          <details className="relative lg:hidden">
            <summary className="border-line bg-surface text-foreground grid size-10 cursor-pointer list-none place-items-center rounded-full border [&::-webkit-details-marker]:hidden">
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
                Work with me
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

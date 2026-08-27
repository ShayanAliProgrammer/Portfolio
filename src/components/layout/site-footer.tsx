import { ArrowUpRight, GitBranch, PenLine } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-line bg-surface/40 border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-extrabold">Let&apos;s build something useful.</p>
          <p className="text-muted mt-2 max-w-md text-sm leading-6">
            Available for thoughtful freelance work, product collaborations, and
            full-stack roles.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {navigation.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground inline-flex items-center gap-1"
          >
            <GitBranch size={15} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={siteConfig.social.medium}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground inline-flex items-center gap-1"
          >
            <PenLine size={15} aria-hidden="true" />
            Writing
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-line text-muted border-t px-5 py-5 text-center text-xs md:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and TypeScript.
      </div>
    </footer>
  );
}

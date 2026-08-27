import { ArrowUpRight, GitBranch, MessageCircle } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-line bg-surface/60 border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-extrabold">Let&apos;s build something useful.</p>
          <p className="text-muted mt-2 max-w-md text-sm leading-6">
            Available for thoughtful freelance work, product collaborations, and
            full-stack roles.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted hover:text-foreground transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground inline-flex items-center gap-1 transition"
          >
            <GitBranch size={15} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-accent-strong hover:text-accent inline-flex items-center gap-1 transition"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Call Shayan
          </a>
        </div>
      </div>
      <div className="border-line text-muted border-t px-5 py-5 text-center text-xs md:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and TypeScript.
      </div>
    </footer>
  );
}

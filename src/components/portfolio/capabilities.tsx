import { Braces, Database, Rocket } from "lucide-react";

import { skillGroups } from "@/data/skills";

const icons = [Braces, Database, Rocket];

export function Capabilities() {
  return (
    <section id="about" className="border-line bg-surface/35 border-b">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-16">
          <div>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              01 / About
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Small surface area. Serious craft.
            </h2>
          </div>
          <p className="text-muted max-w-2xl text-base leading-7 md:text-lg">
            I care about the parts people feel: a useful first screen, a fast response, a
            clear next step, and a codebase the next person can confidently extend.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className="group border-line bg-background hover:border-accent rounded-2xl border p-6 transition duration-200 hover:-translate-y-1 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-muted font-mono text-xs font-bold">
                    0{index + 1}
                  </span>
                  <Icon
                    className="text-accent size-6 transition-transform duration-200 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-14 text-xl font-black tracking-tight">{group.title}</h3>
                <p className="text-muted mt-3 min-h-14 text-sm leading-6">
                  {group.description}
                </p>
                <ul
                  className="mt-7 flex flex-wrap gap-2"
                  aria-label={`${group.title} technologies`}
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-line bg-surface text-foreground rounded-md border px-2.5 py-1.5 font-mono text-xs font-bold"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

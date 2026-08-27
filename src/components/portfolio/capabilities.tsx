import { Code2, Database, Rocket } from "lucide-react";

import { skillGroups } from "@/data/skills";

const icons = [Code2, Database, Rocket];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-line border-b">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-muted text-xs font-extrabold tracking-[0.2em] uppercase">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              A focused stack, used with intent.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={group.title}
                  className="border-line bg-surface/70 rounded-2xl border p-5"
                >
                  <Icon className="text-accent-strong size-6" aria-hidden="true" />
                  <h3 className="mt-8 font-extrabold">{group.title}</h3>
                  <p className="text-muted mt-2 text-sm leading-6">{group.description}</p>
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label={`${group.title} technologies`}
                  >
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-surface-strong text-foreground rounded-full px-3 py-1 text-xs font-extrabold"
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
      </div>
    </section>
  );
}

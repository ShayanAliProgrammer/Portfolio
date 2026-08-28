import { skillGroups } from "@/data/skills";

export function Stack() {
  return (
    <section id="stack" className="border-line border-b">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              03 / Stack
            </p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
              Tools that{" "}
              <span className="serif-italic text-foreground/75 font-normal">ship.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            No percentages, no bars—just the tools I reach for when something has to go to
            production.
          </p>
        </div>

        <div className="border-line border-t">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="border-line grid gap-5 border-b py-7 md:grid-cols-[3rem_minmax(13rem,0.7fr)_minmax(0,1.4fr)] md:items-start md:gap-8"
            >
              <span className="text-accent font-mono text-xs font-bold">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{group.title}</h3>
                <p className="text-muted mt-2 max-w-sm text-sm leading-6">
                  {group.description}
                </p>
              </div>
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${group.title} technologies`}
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-line text-muted rounded-full border px-3 py-1.5 font-mono text-xs font-bold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-muted mt-6 text-sm">
          Grouped by{" "}
          <span className="serif-italic text-foreground">what the tool is for</span>, not
          by how long I&apos;ve used it.
        </p>
      </div>
    </section>
  );
}

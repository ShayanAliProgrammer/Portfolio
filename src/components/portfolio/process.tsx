import { ArrowRight, Compass, FlaskConical, PencilRuler, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Clarify",
    description:
      "Turn the brief into a focused problem, a clear audience, and a useful definition of done.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Choose the smallest interface and architecture that can create real momentum.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Ship typed, accessible software with fast feedback loops and no mystery layers.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Polish the important edges, measure what matters, and leave the next step obvious.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="border-line bg-surface/35 border-b">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
              03 / Process
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              A calm way to ship.
            </h2>
          </div>
          <p className="text-muted max-w-md text-base leading-7">
            Good work is not only the final screen. It is the clarity, pace, and care that
            get the team there.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="group border-line bg-background hover:border-accent relative rounded-2xl border p-6 transition duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-accent font-mono text-xs font-bold">
                    {step.number}
                  </span>
                  <Icon
                    className="text-muted group-hover:text-accent size-5 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-14 text-xl font-black tracking-tight">{step.title}</h3>
                <p className="text-muted mt-3 text-sm leading-6">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="text-line bg-background absolute top-1/2 -right-3 z-10 hidden size-5 lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

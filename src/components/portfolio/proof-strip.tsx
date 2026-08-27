const proofPoints = [
  {
    value: "03",
    label: "selected builds",
    detail: "Real projects, not placeholder cards.",
  },
  {
    value: "01",
    label: "clear owner",
    detail: "One person accountable from brief to launch.",
  },
  {
    value: "∞",
    label: "room to scale",
    detail: "Foundations designed for the next feature.",
  },
];

export function ProofStrip() {
  return (
    <section
      aria-label="Portfolio proof points"
      className="border-line bg-surface border-b"
    >
      <div className="divide-line mx-auto grid max-w-7xl divide-y px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
        {proofPoints.map((point) => (
          <div
            key={point.label}
            className="flex items-center gap-5 py-6 first:pt-7 last:pb-7 md:px-8 md:py-8 md:first:pl-0 md:last:pr-0"
          >
            <span className="text-accent font-mono text-3xl font-black tracking-[-0.08em]">
              {point.value}
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.12em] uppercase">
                {point.label}
              </span>
              <span className="text-muted mt-1 block text-sm leading-5">
                {point.detail}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Activity, ArrowUpRight, Code2, Globe2 } from "lucide-react";

const previewBySlug = {
  "realtime-counter-app": {
    icon: Activity,
    label: "Live activity",
    accent: "bg-[#ff2d20]",
    lines: ["connected clients", "updates / second", "response time"],
    values: ["128", "24", "42ms"],
  },
  portfolio: {
    icon: Code2,
    label: "Portfolio system",
    accent: "bg-[#ff2d20]",
    lines: ["render mode", "content source", "build status"],
    values: ["static", "typed data", "passing"],
  },
  "endurance-tec": {
    icon: Globe2,
    label: "Web experience",
    accent: "bg-[#ff2d20]",
    lines: ["layout", "responsive", "accessibility"],
    values: ["fluid", "mobile-first", "semantic"],
  },
} as const;

type ProjectPreviewProps = {
  slug: string;
};

export function ProjectPreview({ slug }: ProjectPreviewProps) {
  const preview =
    previewBySlug[slug as keyof typeof previewBySlug] ?? previewBySlug.portfolio;
  const Icon = preview.icon;

  return (
    <div className="border-line bg-surface-strong relative min-h-52 overflow-hidden border-b p-5">
      <div className="grid-surface absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative flex items-center justify-between">
        <span className="text-muted flex items-center gap-2 font-mono text-xs font-bold">
          <Icon className="text-accent size-4" aria-hidden="true" />
          {preview.label}
        </span>
        <ArrowUpRight className="text-muted size-4" aria-hidden="true" />
      </div>
      <div className="border-line bg-background/80 relative mt-8 rounded-xl border p-4 shadow-2xl">
        <div className="border-line mb-4 flex items-center gap-2 border-b pb-3">
          <span className={`size-2 rounded-full ${preview.accent}`} aria-hidden="true" />
          <span className="size-2 rounded-full bg-[#f59e0b]" aria-hidden="true" />
          <span className="size-2 rounded-full bg-[#22c55e]" aria-hidden="true" />
          <span className="text-muted ml-auto font-mono text-[10px]">preview</span>
        </div>
        <div className="space-y-2">
          {preview.lines.map((line, index) => (
            <div
              key={line}
              className="flex items-center justify-between gap-4 font-mono text-xs"
            >
              <span className="text-muted">{line}</span>
              <span className="text-foreground font-bold">{preview.values[index]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-2 items-end gap-1" aria-hidden="true">
          {[35, 60, 44, 82, 56, 92, 68, 76, 48, 86, 64, 72].map((height, index) => (
            <span
              key={index}
              className="bg-accent/80 min-w-0 flex-1 rounded-sm"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div
        className="bg-accent/10 absolute -right-8 -bottom-10 size-32 rounded-full blur-2xl"
        aria-hidden="true"
      />
    </div>
  );
}

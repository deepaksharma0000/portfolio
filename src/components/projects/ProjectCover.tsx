import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accents: Record<string, string> = {
  trustifyee: "#3ECF8E",
  garageos: "#5B8CFF",
  cliprant: "#FF7A59",
  hire: "#F0C24B",
  poojapath: "#A78BFA",
  "hotel-ribolla": "#22D3EE",
  barber: "#FB7185",
  "prime-alpha": "#34D399",
  "b2b-baarat": "#93C5FD",
  lunalinks: "#F9A8D4",
};

type ProjectCoverProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

export function ProjectCover({ project, className, compact = false }: ProjectCoverProps) {
  const accent = accents[project.id] ?? "#3ECF8E";
  const tags = project.features.slice(0, 4).map((feature) =>
    feature.split(/[—–-]/)[0]?.trim() ?? feature,
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--bg-soft)]",
        compact ? "min-h-[180px]" : "min-h-[220px] sm:min-h-[260px]",
        className,
      )}
      style={{
        backgroundImage: `
          radial-gradient(circle at 88% 12%, ${accent}33, transparent 42%),
          linear-gradient(160deg, color-mix(in srgb, ${accent} 10%, #0b1017), #07090c 70%)
        `,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between gap-6 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{
              color: accent,
              borderColor: `${accent}55`,
              backgroundColor: `${accent}18`,
            }}
          >
            {project.category.split("/")[0]?.trim()}
          </span>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: accent, boxShadow: `0 0 18px ${accent}` }}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="display-title text-2xl leading-tight text-white sm:text-3xl">
            {project.title.split("—")[0]?.trim()}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
            {project.title.includes("—")
              ? project.title.split("—").slice(1).join("—").trim()
              : project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-black/25 px-2.5 py-1.5 text-xs text-white/80 backdrop-blur-sm"
            >
              {tag.length > 28 ? `${tag.slice(0, 28)}…` : tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

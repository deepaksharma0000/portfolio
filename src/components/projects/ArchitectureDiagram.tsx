import type { ArchitectureLayer } from "@/data/projects";

type ArchitectureDiagramProps = {
  layers: ArchitectureLayer[];
};

export function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
        Architecture
      </p>
      <ol className="space-y-0">
        {layers.map((layer, index) => (
          <li key={layer.label} className="relative">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-4">
              <p className="text-xs font-semibold text-[var(--accent)]">
                Layer {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-medium">{layer.label}</p>
              {layer.detail ? <p className="muted mt-1 text-sm">{layer.detail}</p> : null}
            </div>
            {index < layers.length - 1 ? (
              <div className="flex justify-center py-2" aria-hidden="true">
                <span className="text-[var(--accent)]">↓</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

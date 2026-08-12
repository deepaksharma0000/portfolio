import Link from "next/link";
import { getFeaturedProject } from "@/data/projects";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProject() {
  const project = getFeaturedProject();

  return (
    <section className="section-pad border-y border-[var(--border)]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Project"
            title="The system that proves serious software experience."
            description="A multi-broker algo trading platform with queued execution, session management, and realtime order feedback."
          />
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow)]">
            <ProjectCover project={project} className="min-h-[240px] border-b border-[var(--border)] sm:min-h-[300px]" />

            <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <span className="chip">{project.category}</span>
                <h3 className="display-title mt-4 text-3xl sm:text-4xl">{project.title}</h3>
                <p className="muted mt-4 leading-relaxed">{project.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                    <p className="text-sm font-semibold text-[var(--accent)]">Problem</p>
                    <p className="muted mt-2 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                    <p className="text-sm font-semibold text-[var(--accent)]">Solution</p>
                    <p className="muted mt-2 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[var(--fg-muted)]">
                  <span className="font-semibold text-[var(--fg)]">My role: </span>
                  {project.role}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="button-primary mt-6 inline-flex"
                >
                  Read Full Case Study
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                    Architecture
                  </p>
                  <ol className="space-y-3">
                    {project.architecture.map((layer, index) => (
                      <li
                        key={layer.label}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3"
                      >
                        <p className="text-xs text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 font-medium">{layer.label}</p>
                        {layer.detail ? (
                          <p className="muted mt-1 text-sm">{layer.detail}</p>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

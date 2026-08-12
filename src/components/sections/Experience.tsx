import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where the work gets serious."
            description="Verified from project history. Employer details from official letters are marked for you to update."
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[var(--border)] md:before:left-[15px]">
          {experiences.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 50}>
              <article className="relative grid gap-4 pl-10 md:grid-cols-[220px_1fr] md:pl-12">
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--accent)] bg-[var(--bg)] md:top-3">
                  <span className="absolute inset-1.5 rounded-full bg-[var(--accent)]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">{item.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                  <p className="muted mt-1 text-sm">
                    {item.company}
                    {item.placeholder ? " (placeholder)" : ""}
                  </p>
                  {item.companyNote ? (
                    <p className="muted mt-2 text-xs leading-relaxed">{item.companyNote}</p>
                  ) : null}
                </div>

                <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:p-6">
                  {item.placeholder ? (
                    <p className="mb-4 rounded-xl border border-dashed border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-2 text-sm text-[var(--accent)]">
                      Manual TODO: replace company, dates, and responsibilities from your
                      Experience Letter.
                    </p>
                  ) : null}
                  <p className="text-[var(--fg-muted)]">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--fg-muted)]">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-[var(--border)]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Skills"
            title="A stack shaped by shipped products."
            description="Technologies below are grounded in actual project repositories — trading systems, SaaS platforms, marketplaces, booking apps, and mobile clients."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delayMs={index * 40}>
              <article className="h-full rounded-[1.35rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="display-title text-2xl">{category.title}</h3>
                    <p className="muted mt-2 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    {category.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services, strengths } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad border-y border-[var(--border)]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What clients hire me to build."
            description="Engagements aligned with verified experience — full-stack products, APIs, realtime systems, integrations, and React Native apps."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 30}>
              <article className="h-full rounded-[1.3rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--fg-muted)]">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithMe() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why Work With Me"
            title="Hire for judgment, not just syntax."
            description="The useful part of experience is knowing where systems fail — and designing for those failure points early."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 40}>
              <article className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Professional stats" className="pb-8 md:pb-12">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
              >
                <p className="display-title text-3xl text-[var(--accent)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-semibold">{stat.label}</p>
                <p className="muted mt-1 text-sm">{stat.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

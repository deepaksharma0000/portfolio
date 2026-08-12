import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="container-shell grid items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div className="hero-enter">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Full-Stack Developer
          </p>
          <h1 className="display-title text-[clamp(2.8rem,8vw,5.6rem)]">
            Hi, I&apos;m{" "}
            <span className="text-[var(--accent)]">{siteConfig.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] sm:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)]">
            {siteConfig.yearsExperience} years building production full-stack systems —
            modern web apps, backend architecture, APIs, cloud services, and realtime
            platforms used in FinTech, SaaS, and commerce.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Work Together
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--fg-muted)]">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--accent)]">
              Email
            </a>
            <span aria-hidden="true">·</span>
            <a href={siteConfig.phoneHref} className="hover:text-[var(--accent)]">
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="surface relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(62,207,142,0.18),transparent_45%)]" />
            <div className="relative space-y-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                Currently focused on
              </p>
              <ul className="space-y-4">
                {[
                  "Scalable Node.js APIs & event-driven workers",
                  "React / Next.js product interfaces",
                  "Broker & payment integrations",
                  "Realtime systems with Socket.IO / WebSockets",
                  "Cloud auth, storage, and VPS deployments",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {["TypeScript", "MongoDB", "AWS", "React Native"].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

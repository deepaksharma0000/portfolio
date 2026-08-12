import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display-title text-2xl">
            {siteConfig.name}
            <span className="text-[var(--accent)]">.</span>
          </p>
          <p className="muted mt-2 text-sm">{siteConfig.title}</p>
          <p className="muted mt-4 max-w-sm text-sm leading-relaxed">
            Building scalable web applications, APIs, and production digital products.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
            Navigate
          </p>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[var(--accent)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
            Connect
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--accent)]">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-[var(--accent)]">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-shell mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--fg-muted)]">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

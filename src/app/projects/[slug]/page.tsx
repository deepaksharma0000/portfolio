import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { isPlaceholderUrl } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const showGithub = project.github && !isPlaceholderUrl(project.github);
  const showLive = project.liveUrl && !isPlaceholderUrl(project.liveUrl);

  return (
    <article className="pt-28 pb-20">
      <div className="container-shell">
        <Link
          href="/#projects"
          className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--accent)]"
        >
          ← Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="chip">{project.category}</span>
          {project.featured ? <span className="chip">Featured</span> : null}
        </div>

        <h1 className="display-title mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
          {project.title}
        </h1>
        <p className="muted mt-5 max-w-3xl text-lg leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {showLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Live Demo
            </a>
          ) : null}
          {showGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>
          ) : null}
          <Link href="/#contact" className="button-secondary">
            Discuss a similar project
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
          <ProjectCover project={project} className="min-h-[260px] sm:min-h-[320px]" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            <section>
              <h2 className="display-title text-3xl">Overview</h2>
              <p className="muted mt-4 leading-relaxed">{project.description}</p>
            </section>

            <section>
              <h2 className="display-title text-3xl">Problem</h2>
              <p className="muted mt-4 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="display-title text-3xl">Solution</h2>
              <p className="muted mt-4 leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="display-title text-3xl">My Role</h2>
              <p className="muted mt-4 leading-relaxed">{project.role}</p>
            </section>

            <section>
              <h2 className="display-title text-3xl">Key Features</h2>
              <ul className="mt-4 space-y-3 text-[var(--fg-muted)]">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="display-title text-3xl">Technical Challenges</h2>
              <ul className="mt-4 space-y-3 text-[var(--fg-muted)]">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.results?.length ? (
              <section>
                <h2 className="display-title text-3xl">Results</h2>
                <ul className="mt-4 space-y-3 text-[var(--fg-muted)]">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ArchitectureDiagram layers={project.architecture} />

            <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-sm">
                {project.frontend ? (
                  <div>
                    <p className="font-semibold text-[var(--accent)]">Frontend</p>
                    <p className="muted mt-1">{project.frontend.join(" · ")}</p>
                  </div>
                ) : null}
                {project.backend ? (
                  <div>
                    <p className="font-semibold text-[var(--accent)]">Backend</p>
                    <p className="muted mt-1">{project.backend.join(" · ")}</p>
                  </div>
                ) : null}
                {project.database ? (
                  <div>
                    <p className="font-semibold text-[var(--accent)]">Database</p>
                    <p className="muted mt-1">{project.database.join(" · ")}</p>
                  </div>
                ) : null}
                {project.cloud ? (
                  <div>
                    <p className="font-semibold text-[var(--accent)]">Cloud / DevOps</p>
                    <p className="muted mt-1">{project.cloud.join(" · ")}</p>
                  </div>
                ) : null}
                {project.integrations ? (
                  <div>
                    <p className="font-semibold text-[var(--accent)]">Integrations</p>
                    <p className="muted mt-1">{project.integrations.join(" · ")}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

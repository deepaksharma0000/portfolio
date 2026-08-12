import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { isPlaceholderUrl } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const showGithub = project.github && !isPlaceholderUrl(project.github);
  const showLive = project.liveUrl && !isPlaceholderUrl(project.liveUrl);

  return (
    <article className="project-card surface flex h-full flex-col overflow-hidden">
      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="chip w-fit">{project.category}</span>

        <h3 className="display-title mt-4 text-xl leading-snug sm:text-2xl">
          {project.title}
        </h3>

        <p className="muted mt-3 text-sm leading-relaxed">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-[var(--fg-muted)]">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link href={`/projects/${project.slug}`} className="button-primary px-4 py-2 text-sm">
            View Case Study
          </Link>
          {showLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-4 py-2 text-sm"
            >
              Live Demo
            </a>
          ) : null}
          {showGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-4 py-2 text-sm"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

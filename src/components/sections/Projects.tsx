import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const list = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Real products. Real architecture. Real constraints."
            description="Each case study explains the product, contribution, stack, architecture, and challenges solved — not just a tech badge list."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {list.map((project, index) => (
            <Reveal key={project.id} delayMs={(index % 2) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

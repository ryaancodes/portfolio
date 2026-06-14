import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

export function Projects() {
  return (
    <section id="work" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="3"
          tag="Selected Work"
          title={<>Projects I&apos;ve shipped</>}
          description="Two full-stack products built and deployed from scratch."
        />
        <div>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { projects } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="Case studies — problem, solution, and tech stack"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

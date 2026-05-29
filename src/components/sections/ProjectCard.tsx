import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLiveDemo = project.liveUrl !== '#';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass-card overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-900"
          >
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
          {hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/50">
          <p>
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Problem:{' '}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {project.problem}
            </span>
          </p>
          <p className="mt-2">
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Solution:{' '}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {project.solution}
            </span>
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent dark:text-accent-light"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 sm:hidden">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            GitHub
          </a>
          {hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

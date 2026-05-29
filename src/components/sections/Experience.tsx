import { motion } from 'framer-motion';
import { achievements, education, experiences } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="bg-slate-100/50 py-24 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          title="Experience & Achievements"
          subtitle="Work, leadership, education, and certifications from my journey"
        />

        <div className="mb-12">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Education
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((edu, i) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {edu.period}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {edu.school} · {edu.location}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {edu.details}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card relative border-l-4 border-l-accent p-6 pl-8"
                >
                  <span className="absolute -left-2 top-6 h-4 w-4 rounded-full border-4 border-white bg-accent dark:border-slate-900" />
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {exp.period}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.company}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {exp.highlights.map((point) => (
                      <li key={point.slice(0, 40)} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Achievements & Certifications
            </h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs text-slate-500">{item.period}</span>
                  </div>
                  <p className="text-sm text-accent">{item.organization}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

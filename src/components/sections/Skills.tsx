import { motion } from 'framer-motion';
import { skillCategories } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {name}
        </span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-slate-100/50 py-24 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

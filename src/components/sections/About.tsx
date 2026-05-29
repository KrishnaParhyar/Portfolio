import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';
import { ProfileImage } from '../ui/ProfileImage';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="A quick introduction to who I am and what I do"
        />

        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="mx-auto flex justify-center pb-8 lg:mx-0 lg:pb-0">
            <ProfileImage size="md" variant="circle" className="lg:sticky lg:top-28" />
          </div>

          <div className="grid gap-12 lg:col-span-1 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                Current focus
              </h3>
              <ul className="space-y-3">
                {siteConfig.about.highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

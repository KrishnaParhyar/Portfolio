import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Resume"
          subtitle="Download my CV or preview it below"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-2xl p-8 text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
            <FileText className="h-10 w-10 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {siteConfig.name} — Resume
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            PDF format · Updated 2026
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.resumeUrl} size="lg">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

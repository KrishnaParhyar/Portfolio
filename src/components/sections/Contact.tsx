import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig, socialLinks } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';

// Helper to get specific social link URLs
const getLink = (iconName: keyof typeof iconMap) =>
  socialLinks.find((link) => link.icon === iconName)?.href || '#';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function Contact() {
  const email = siteConfig.email;
  const linkedinUrl = getLink('linkedin');
  const githubUrl = getLink('github');

  return (
    <section id="contact" className="bg-slate-100/50 py-24 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          title="Contact"
          subtitle="Let’s connect – I’m open to opportunities, collaborations, and chats."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
          {/* Left side – brief intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-600 dark:text-slate-400"
          >
            <p>
              I’m always excited to hear about new ideas, projects, or just say hello. Drop a line
              below, or reach out via the platforms on the right.
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" />
              <a href={`mailto:${email}`} className="text-accent hover:underline">
                {email}
              </a>
            </p>
          </motion.div>

          {/* Right side – contact buttons */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-md hover:bg-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-md hover:bg-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-md hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig, socialLinks } from '../../data/site';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {siteConfig.name}. Built with React & TypeScript.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-accent-light"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

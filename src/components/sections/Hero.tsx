import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Button } from '../ui/Button';
import { ProfileImage } from '../ui/ProfileImage';

export function Hero() {
  const { displayed, isComplete } = useTypingEffect(siteConfig.role);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-slate-300/20 dark:bg-slate-700/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-slate-400/10 blur-3xl" />
      </div>

      <div className="section-container relative py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 min-h-[2rem] text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl"
            >
              {displayed}
              {!isComplete && (
                <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-accent align-middle" />
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-2 text-sm text-slate-500 dark:text-slate-400"
            >
              {siteConfig.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#projects" size="lg">
                View Projects
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="secondary"
                size="lg"
                className="inline-flex"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </div>

          <div className="flex justify-center pb-10 lg:justify-end lg:pb-0">
            <ProfileImage size="lg" variant="portrait" />
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-400 hover:text-accent md:flex"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

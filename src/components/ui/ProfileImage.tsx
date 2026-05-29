import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';

interface ProfileImageProps {
  className?: string;
  size?: 'md' | 'lg';
  variant?: 'portrait' | 'circle';
}

const frameSizes = {
  md: {
    outer: 'h-[17rem] w-[13rem] sm:h-[19rem] sm:w-[14.5rem]',
    inner: 'inset-[6px]',
  },
  lg: {
    outer: 'h-[22rem] w-[17rem] sm:h-[26rem] sm:w-[20rem]',
    inner: 'inset-[7px]',
  },
};

/** Home (portrait): light zoom, full head visible */
const cropPortrait = 'scale-[1.08] object-cover object-[50%_3%]';
/** About (circle): unchanged — was already good */
const cropCircle = 'scale-[1.02] object-cover object-[50%_18%]';

const circleSizes = {
  md: 'h-52 w-52 sm:h-60 sm:w-60',
  lg: 'h-64 w-64 sm:h-72 sm:w-72',
};

export function ProfileImage({
  className = '',
  size = 'lg',
  variant = 'portrait',
}: ProfileImageProps) {
  const initials = siteConfig.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 3);

  const isCircle = variant === 'circle';
  const frame = frameSizes[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`relative ${className}`}
    >
      {/* Ambient glow */}
      <div
        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/30 via-violet-500/20 to-transparent blur-2xl ${
          isCircle ? 'rounded-full' : ''
        }`}
        aria-hidden
      />

      {isCircle ? (
        <div
          className={`relative ${circleSizes[size]} rounded-full bg-gradient-to-br from-accent via-violet-500 to-indigo-600 p-[3px] shadow-2xl shadow-accent/25`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
            <img
              src={siteConfig.profileImage}
              alt={`${siteConfig.name} — professional portrait`}
              className={`h-full w-full min-h-full min-w-full ${cropCircle}`}
            />
          </div>
        </div>
      ) : (
        <div
          className={`relative ${frame.outer} rounded-[1.75rem] bg-gradient-to-br from-accent via-violet-500 to-indigo-700 p-[3px] shadow-2xl shadow-slate-900/15 dark:shadow-black/40`}
        >
          <div
            className={`absolute ${frame.inner} overflow-hidden rounded-[1.4rem] bg-slate-200 dark:bg-slate-800`}
          >
            <img
              src={siteConfig.profileImage}
              alt={`${siteConfig.name} — professional portrait`}
              className={`h-full w-full min-h-full min-w-full ${cropPortrait}`}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-white/5"
              aria-hidden
            />
          </div>
        </div>
      )}

      {/* Status badge */}
      <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-4 py-2 text-xs font-medium text-slate-700 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to opportunities
      </div>
    </motion.div>
  );
}

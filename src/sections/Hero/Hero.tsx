import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { profile } from '@/data/profile';
import { fadeInUp, fadeIn } from '@/animations/variants';

/**
 * Hero section — minimalist light layout.
 *
 * Quiet background: faint grid lines that fade out, plus a small
 * line-graph motif (data-science nod). No glows, no heavy gradients.
 * Typing effect cycles through roles.
 */
export function Hero() {
  const typedRole = useTypingEffect({ words: profile.roles });

  return (
    <header
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
    >
      <HeroBackground />

      <div className="section-container relative z-10 pb-24 pt-10">
        {/* Status pill */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-[12.5px] text-muted shadow-sm"
        >
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-teal" />
          Open to internships &middot; {profile.location}
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-[clamp(54px,8.5vw,100px)] font-bold leading-[1.03] tracking-tight text-ink"
        >
          Ryaan
          <br />
          <span className="text-accent">Devnani.</span>
        </motion.h1>

        {/* Animated role */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
          className="mb-6 flex h-9 items-center font-mono text-[clamp(15px,2vw,20px)] text-muted"
        >
          {typedRole}
          <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-blink bg-accent" />
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.14 }}
          className="mb-10 max-w-[52ch] text-[clamp(17px,1.9vw,21px)] leading-[1.65] text-muted"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="btn-primary">
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={profile.resumeUrl} download className="btn-secondary">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-2.5 text-[11px] tracking-wide text-muted/60 sm:flex lg:left-9">
        <span className="relative block h-8 w-px overflow-hidden bg-line">
          <span className="animate-scrollDown absolute inset-x-0 top-[-40%] block h-[40%] bg-accent" />
        </span>
        scroll
      </div>
    </header>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Very faint grid */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,10,12,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,12,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Subtle decorative line-graph, right side only on large screens */}
      <svg
        viewBox="0 0 440 440"
        className="absolute -right-16 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 opacity-[0.45] lg:block"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1" className="text-ink/[0.12]">
          <line x1="80" y1="100" x2="200" y2="80" />
          <line x1="200" y1="80" x2="310" y2="170" />
          <line x1="80" y1="100" x2="140" y2="240" />
          <line x1="140" y1="240" x2="310" y2="170" />
          <line x1="140" y1="240" x2="270" y2="340" />
          <line x1="310" y1="170" x2="270" y2="340" />
          <line x1="80" y1="100" x2="310" y2="170" />
        </g>
        {/* muted nodes */}
        <circle cx="80" cy="100" r="3.5" className="fill-ink/20" />
        <circle cx="200" cy="80" r="3.5" className="fill-ink/20" />
        <circle cx="140" cy="240" r="3.5" className="fill-ink/20" />
        <circle cx="270" cy="340" r="3.5" className="fill-ink/20" />
        {/* single accent node */}
        <circle cx="310" cy="170" r="5" className="fill-accent" />
      </svg>
    </div>
  );
}

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';

interface SectionHeadingProps {
  index: string;
  tag: string;
  title: ReactNode;
  description?: string;
}

/**
 * Consistent section header used across all sections.
 * Number + tag in mono above, large display title, optional
 * right-aligned descriptor on large screens.
 */
export function SectionHeading({ index, tag, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-14 flex flex-wrap items-end justify-between gap-6"
    >
      <div>
        <span className="mb-3 block font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-accent">
          {index.padStart(2, '0')} · {tag}
        </span>
        <h2 className="text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.12] tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[38ch] text-[15px] leading-[1.6] text-muted sm:text-right">
          {description}
        </p>
      )}
    </motion.div>
  );
}

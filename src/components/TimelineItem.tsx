import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';
import type { EducationItem } from '@/types/education';

export function TimelineItem({ item }: { item: EducationItem }) {
  return (
    <motion.div variants={fadeInUp} className="relative pb-10 last:pb-0">
      <span className="absolute -left-[46px] top-[5px] h-[10px] w-[10px] rounded-full border-2 border-accent bg-bg" />
      <p className="mb-1.5 font-mono text-[12px] text-accent/80">{item.period}</p>
      <h4 className="mb-1 text-[17px] font-semibold text-ink">{item.title}</h4>
      <p className="text-[14px] leading-[1.6] text-muted">
        {item.institution} &middot; {item.detail}
      </p>
    </motion.div>
  );
}

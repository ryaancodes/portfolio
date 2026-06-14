import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface StatCardProps {
  value: string;
  label: string;
  wide?: boolean;
}

export function StatCard({ value, label, wide }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'rounded-xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-ink/5',
        wide && 'col-span-2',
      )}
    >
      <p className="mb-1 font-display text-[22px] font-bold text-ink sm:text-[26px]">{value}</p>
      <p className="text-[12.5px] leading-snug text-muted">{label}</p>
    </motion.div>
  );
}

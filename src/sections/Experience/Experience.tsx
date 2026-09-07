import { motion } from 'framer-motion';
import {
  Briefcase,
  Phone,
  MessageSquare,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeInUp, staggerContainer } from '@/animations/variants';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  accent?: boolean;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: Briefcase,
    title: 'AIESEC — Incoming Global Talent',
    description:
      'Junior Manager · 2026 – Present. Contributing to the Incoming Global Talent function across candidate engagement, interviews, outreach, and coordination.',
    accent: true,
  },
  {
    icon: Phone,
    title: 'Candidate Engagement',
    description:
      'Connect with prospective talent through calls and direct communication, helping candidates understand relevant opportunities and stay engaged throughout the process.',
    accent: true,
  },
  {
    icon: Users,
    title: 'Candidate Interviews',
    description:
      'Conduct candidate interviews and interact with applicants to understand their profiles, interests, and alignment with available opportunities.',
    accent: true,
  },
  {
    icon: MessageSquare,
    title: 'Outreach & Coordination',
    description:
      'Support outreach, follow-ups, and candidate communication while coordinating with the IGT team throughout the talent process.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="4"
          tag="Experience"
          title={<>Real-world experience</>}
          description="Currently a Junior Manager in AIESEC's Incoming Global Talent function, working across candidate engagement, interviews, outreach, and coordination."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {HIGHLIGHTS.map(
            ({ icon: Icon, title, description, href, linkLabel, accent }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="group flex flex-col gap-5 rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lg hover:shadow-ink/5"
              >
                <span
                  className={
                    accent
                      ? 'flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white'
                      : 'flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent'
                  }
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>

                <div className="flex-1">
                  <h3 className="mb-2 text-[16px] font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.7] text-muted">
                    {description}
                  </p>
                </div>

                {href && (
                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:underline"
                  >
                    {linkLabel}
                    <span aria-hidden="true"> →</span>
                  </a>
                )}
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
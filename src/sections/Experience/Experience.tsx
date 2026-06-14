import { motion } from 'framer-motion';
import { Briefcase, Layers, MessageSquare, Zap, type LucideIcon } from 'lucide-react';
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
    icon: Zap,
    title: 'TurfItUp',
    description:
      'Full-stack turf booking platform — users can browse available slots, select timings, pay, and get instant booking confirmation. Built end-to-end with HTML, CSS, JS, and Netlify Forms.',
    href: '#work',
    linkLabel: 'View project',
    accent: true,
  },
  {
    icon: MessageSquare,
    title: 'Feedback Collector',
    description:
      'Feedback management platform with a public submission form, login-protected admin dashboard, and a MySQL database for storing and reviewing responses. Node.js + Express backend.',
    href: '#work',
    linkLabel: 'View project',
    accent: true,
  },
  {
    icon: Briefcase,
    title: 'Actively seeking internships',
    description:
      "Open to software development internship roles — remote or Mumbai-based. I'm looking to apply full-stack skills and AI/DS coursework to real product challenges.",
    href: '#contact',
    linkLabel: 'Reach out',
  },
  {
    icon: Layers,
    title: 'Full-stack experience through projects',
    description:
      'Hands-on depth across the full stack: frontend interfaces, REST APIs with Node/Express, relational databases in MySQL, and deployment via Netlify — learned entirely by shipping.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="4"
          tag="Projects & Experience"
          title={<>Built for the real world</>}
          description="No formal internships yet — here's what I've shipped, and what I'm looking for next."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {HIGHLIGHTS.map(({ icon: Icon, title, description, href, linkLabel, accent }) => (
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
                <h3 className="mb-2 text-[16px] font-semibold text-ink">{title}</h3>
                <p className="text-[14.5px] leading-[1.7] text-muted">{description}</p>
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}

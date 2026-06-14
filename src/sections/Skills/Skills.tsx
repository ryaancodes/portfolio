import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { Tag } from '@/components/Tag';
import { SKILL_CATEGORIES } from '@/data/skills';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="2"
          tag="Skills"
          title={<>Tools &amp; skills</>}
          description="Languages, frameworks, fundamentals, and tooling."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div key={category.id} variants={fadeInUp} className="bg-surface p-7">
              <p className="mb-4 flex items-center gap-2.5 text-[14px] font-semibold text-ink">
                <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[10.5px] font-medium text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {category.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Tag key={skill.name} label={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

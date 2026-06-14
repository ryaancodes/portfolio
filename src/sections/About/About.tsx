import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { StatCard } from '@/components/StatCard';
import { profile } from '@/data/profile';
import { ACHIEVEMENTS } from '@/data/education';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="1"
          tag="About"
          title={<>About me</>}
          description="Third-year AI & DS student shipping real full-stack products."
        />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {profile.bio.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeInUp}
                className="max-w-[58ch] text-[17px] leading-[1.8] text-ink/80"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.p
              variants={fadeInUp}
              className="max-w-[58ch] text-[16px] leading-[1.8] text-muted"
            >
              {profile.bioMuted}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {ACHIEVEMENTS.map((item) => (
              <StatCard
                key={item.id}
                value={item.value}
                label={item.label}
                wide={item.id === 'projects' || item.id === 'college'}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

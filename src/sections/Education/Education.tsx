import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { TimelineItem } from '@/components/TimelineItem';
import { EDUCATION } from '@/data/education';
import { staggerContainer } from '@/animations/variants';

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-[100px]">
      <div className="section-container">
        <SectionHeading
          index="5"
          tag="Education"
          title={<>Academic background</>}
          description="Old syllabus, new stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative ml-3 border-l border-line pl-10"
        >
          {EDUCATION.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

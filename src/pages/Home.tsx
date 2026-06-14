import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

/**
 * Single-page layout. Each section owns its own id (used by the
 * navbar + scroll spy) and animation triggers.
 */
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

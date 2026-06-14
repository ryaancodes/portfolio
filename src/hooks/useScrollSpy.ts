import { useEffect, useState } from 'react';

/**
 * Tracks which of the given section ids is currently most visible
 * in the viewport, for highlighting active navigation links.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      let current = activeId;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          current = id;
          break;
        }
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), offset]);

  return activeId;
}

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/utils/cn';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'border-b border-line/80 bg-bg/80 shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="section-container flex items-center justify-between py-[18px]">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-display text-[17px] font-bold text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          Ryaan Devnani
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-[13.5px] font-medium text-muted md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative py-0.5 transition-colors hover:text-ink',
                  isActive && 'text-ink',
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-[13px] font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-bg px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5 text-[14px] font-medium text-muted">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'hover:text-ink',
                  activeId === link.href.replace('#', '') && 'text-ink',
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

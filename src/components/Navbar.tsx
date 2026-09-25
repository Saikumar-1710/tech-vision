import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { scrollToSection, cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Developers', id: 'developers' },
  { label: 'Projects', id: 'projects' },
  { label: 'Technologies', id: 'technologies' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

/**
 * Sticky navbar:
 *  - transparent over the hero, becomes compact + glassy after scrolling
 *  - hamburger drawer on mobile
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  /* Shrink + glass style after scrolling past the hero top */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // Small delay lets the drawer close before scrolling on mobile
    setTimeout(() => scrollToSection(id), open ? 150 : 0);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <div className="container-site">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 transition-all duration-300 ease-out-expo sm:px-5',
            scrolled
              ? 'glass-strong py-2.5 shadow-card'
              : 'border border-transparent bg-transparent py-3'
          )}
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                    active === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient transition-all duration-300 ease-out-expo',
                      active === link.id ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop: theme toggle + CTA */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <button onClick={() => go('contact')} className="btn-primary !px-5 !py-2.5">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.08]"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* Panel */}
        <div
          className={cn(
            'absolute right-4 top-20 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-ink-800/95 p-4 shadow-card backdrop-blur-2xl transition-all duration-300 ease-out-expo',
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          )}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={cn(
                    'w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                    active === link.id
                      ? 'bg-brand-500/10 text-white'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => go('contact')} className="btn-primary mt-3 w-full">
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
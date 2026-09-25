import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { X, ChevronLeft, ChevronRight, Github, Linkedin, Briefcase, Code2 } from 'lucide-react';
import { developers, type Developer } from '@/data/developers';
import { DeveloperCard } from '@/components/DeveloperCard';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GradientAvatar } from '@/components/ui/Avatar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn, scrollToSection } from '@/lib/utils';

/** Gap between carousel cards — keep in sync with the track's `gap-5` (20px). */
const CARD_GAP = 20;

/** Staircase offsets that give the track its cascading look (large screens). */
const cascadeClasses = [
  'lg:translate-y-0',
  'lg:translate-y-3',
  'lg:translate-y-6',
  'lg:translate-y-9',
];

/**
 * Developers section — "Meet the People Behind the Code".
 * Four members in a swipeable, cascading carousel:
 * scroll-snap + touch swipe + mouse drag, arrows and dot indicators.
 * "View Profile" opens a static, accessible modal (no routing, no backend).
 */
export function Developers() {
  const ref = useScrollReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);
  const moved = useRef(false);

  const [selected, setSelected] = useState<Developer | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* Close modal on Escape + lock body scroll while open */
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const stepSize = (): number => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    return first.offsetWidth + CARD_GAP;
  };

  /** Sync arrows + dots with the track's scroll position. */
  const update = () => {
    const track = trackRef.current;
    if (!track) return;
    const step = stepSize();
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pages = step > 0 ? Math.max(1, Math.round(maxScroll / step) + 1) : 1;
    setPageCount(pages);
    setActiveIndex(Math.min(pages - 1, Math.max(0, Math.round(track.scrollLeft / step))));
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  };

  const goToPage = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(index * stepSize(), track.scrollWidth - track.clientWidth);
    track.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  };

  const go = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * stepSize(), behavior: 'smooth' });
  };

  const onTrackKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  /* Mouse drag-to-swipe (touch devices use native scrolling). */
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = { startX: e.clientX, startScroll: track.scrollLeft };
    moved.current = false;
  };

  /* Swallow the click that follows a drag so card buttons don't fire. */
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  /* Global drag listeners + mount/resize sync for arrows and dots. */
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!drag.current) return;
      const dx = e.clientX - drag.current.startX;
      if (Math.abs(dx) > 4) moved.current = true;
      const track = trackRef.current;
      if (track) track.scrollLeft = drag.current.startScroll - dx;
    };
    const onUp = () => {
      drag.current = null;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <Section id="developers" className="bg-ink-900/40">
      <SectionHeading
        label="Our Team"
        title="Meet the People Behind the Code"
        subtitle="A multidisciplinary team of developers with different skills, experiences and technology expertise."
      />

      <div ref={ref} className="reveal">
        {/* Swipe track — snap points + drag; staircase offsets give the cascade */}
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Our team members"
          tabIndex={0}
          onScroll={update}
          onKeyDown={onTrackKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={() => {
            drag.current = null;
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
          onClickCapture={onClickCapture}
          className="scrollbar-none flex snap-center select-none gap-5 overflow-x-auto rounded-2xl px-1 py-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 active:cursor-grabbing sm:py-8 lg:py-12"
        >
          {developers.map((developer, index) => (
            <div
              key={developer.id}
              className={cn('w-[85%] shrink-0 cursor-grab sm:w-[46%] lg:w-[31.2%]', cascadeClasses[index] ?? '')}
            >
              <DeveloperCard developer={developer} onViewProfile={setSelected} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls: arrows + position dots */}
      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          aria-label="Previous team members"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-200 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel position">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1} of ${pageCount}`}
              onClick={() => goToPage(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300 ease-out-expo',
                index === activeIndex ? 'w-6 bg-brand-400' : 'w-2 bg-white/20 hover:bg-white/40'
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          aria-label="Next team members"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-200 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* ---------- Static profile modal ---------- */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} profile`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-ink-800/80 shadow-card-hover backdrop-blur-2xl">
            {/* Header band */}
            <div className="relative h-24 bg-brand-gradient opacity-80">
              <button
                onClick={() => setSelected(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 text-on-accent transition-colors hover:bg-black/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <div className="-mt-10 flex items-end gap-4">
                <GradientAvatar
                  name={selected.name}
                  accent={selected.accent}
                  size="xl"
                  photo={selected.photo}
                  className="ring-4 ring-ink-800"
                />
                <div className="pb-1">
                  <h3 className="font-display text-xl font-bold text-white">{selected.name}</h3>
                  <p className="text-sm font-medium text-brand-300">{selected.role}</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3">
                  <Briefcase className="h-4 w-4 text-brand-300" aria-hidden="true" />
                  <span className="text-xs text-slate-300">{selected.experience}</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3">
                  <Code2 className="h-4 w-4 text-brand-300" aria-hidden="true" />
                  <span className="text-xs text-slate-300">{selected.skills.length} core skills</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-400">{selected.bio}</p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Technologies
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {selected.skills.map((skill) => (
                  <span key={skill} className="chip chip-hover">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setSelected(null);
                    setTimeout(() => scrollToSection('contact'), 100);
                  }}
                  className="btn-primary flex-1"
                >
                  Work With {selected.name.split(' ')[0]}
                </button>
                <div className="flex gap-3">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${selected.name} on GitHub`}
                    className="btn-secondary !px-4"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${selected.name} on LinkedIn`}
                    className="btn-secondary !px-4"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
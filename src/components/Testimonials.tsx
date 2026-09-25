import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GradientAvatar } from '@/components/ui/Avatar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

/** Testimonials — client quotes. Edit entries in src/data/testimonials.ts. */
export function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="testimonials" className="bg-ink-900/40">
      <SectionHeading
        label="Testimonials"
        title="What Our Clients Say"
        subtitle="Feedback from the kind of projects we love to work on."
      />

      <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <figure key={t.id} className="card card-hover flex h-full flex-col p-6">
            {/* Rating */}
            <div className="flex items-center gap-1" aria-label={`Rated ${t.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < t.rating ? 'fill-amber-300 text-amber-300' : 'text-slate-600'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>

            <Quote className="mt-4 h-5 w-5 text-brand-400/50" aria-hidden="true" />

            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
              “{t.quote}”
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
              <GradientAvatar name={t.name} accent={t.accent} size="md" photo={t.photo} />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-500">{t.company}</p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-300">{t.projectType}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

    </Section>
  );
}
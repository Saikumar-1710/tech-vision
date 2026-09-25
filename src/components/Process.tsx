import { processSteps } from '@/data/misc';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

/**
 * "From Idea to Launch" — 4-step process.
 * Horizontal timeline on desktop, vertical on mobile.
 */
export function Process() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="process">
      <SectionHeading
        label="How We Work"
        title="From Idea to Launch"
        subtitle="A simple, transparent process that keeps you involved from the first conversation to the production release."
      />

      <div ref={ref} className="reveal relative">
        {/* Horizontal connector line (desktop) */}
        <div
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block"
          aria-hidden="true"
        />
        {/* Vertical connector line (mobile/tablet) */}
        <div
          className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-transparent via-brand-400/40 to-transparent lg:hidden"
          aria-hidden="true"
        />

        <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <li key={step.number} className="relative flex gap-5 lg:flex-col lg:gap-0">
              {/* Node */}
              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <span
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border font-display text-sm font-bold',
                    'border-brand-400/30 bg-ink-800 text-brand-300 shadow-glow-sm',
                    i === processSteps.length - 1 && 'bg-brand-gradient text-on-accent'
                  )}
                >
                  {step.number}
                </span>
              </div>

              {/* Copy */}
              <div className="pb-2 lg:mt-6 lg:pr-6">
                <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
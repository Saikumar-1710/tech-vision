import { ArrowRight, MessagesSquare } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { scrollToSection } from '@/lib/utils';

/** Final call-to-action band before the contact section. */
export function CTA() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="cta" className="!py-16 sm:!py-20">
      <div
        ref={ref}
        className="reveal relative overflow-hidden rounded-3xl border border-brand-400/20 bg-ink-800/60 px-6 py-14 text-center shadow-card backdrop-blur-xl sm:px-12 sm:py-16"
      >
        {/* Decorative glows */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]" aria-hidden="true" />

        <div className="relative">
          <h2 className="font-display text-display-lg font-bold text-white">
            Have an Idea? <span className="text-gradient">Let's Build It.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Tell us what you're planning, and let's explore how we can turn it into a real digital product.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full sm:w-auto">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary w-full sm:w-auto">
              <MessagesSquare className="h-4 w-4" aria-hidden="true" />
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
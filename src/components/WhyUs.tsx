import {
  Code2,
  Users,
  Target,
  Sparkles,
  Shuffle,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';
import { whyUsPoints } from '@/data/misc';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = { Code2, Users, Target, Sparkles, Shuffle, LifeBuoy };

/** "Why Choose Sksoft?" — 6 differentiator cards. */
export function WhyUs() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="why-us" className="bg-ink-900/40">
      <SectionHeading
        label="Why Us"
        title="Why Choose Sksoft?"
        subtitle="More than an agency — a collective of developers invested in making your product succeed."
      />

      <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsPoints.map((point) => {
          const Icon = iconMap[point.icon] ?? Code2;
          return (
            <div key={point.title} className="card card-hover group p-6">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-500/10 text-brand-300 transition-all duration-300 ease-out-expo group-hover:scale-110 group-hover:bg-brand-500/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
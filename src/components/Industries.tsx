import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Truck,
  Car,
  Building2,
  Store,
  CloudCog,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { industries } from '@/data/misc';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Truck,
  Car,
  Building2,
  Store,
  CloudCog,
  Rocket,
};

/** Industries we build for — compact icon cards. */
export function Industries() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="industries">
      <SectionHeading
        label="Industries"
        title="Industries We Build For"
        subtitle="Domain-aware development — we adapt to how your industry actually works."
      />

      <div ref={ref} className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {industries.map((industry) => {
          const Icon = iconMap[industry.icon] ?? Rocket;
          return (
            <div
              key={industry.name}
              className="card card-hover group flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/20 bg-brand-500/10 text-brand-300 transition-all duration-300 ease-out-expo group-hover:scale-110 group-hover:bg-brand-500/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-300">{industry.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
import {
  MonitorSmartphone,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { techGroups } from '@/data/technologies';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
};

/** Technology stack — grouped, hoverable badges. */
export function Technologies() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="technologies">
      <SectionHeading
        label="Technologies"
        title="Our Technology Stack"
        subtitle="The tools and frameworks we use to design, build, ship and maintain modern digital products."
      />

      <div ref={ref} className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? Wrench;
          return (
            <div key={group.id} className="card card-hover p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-500/10 text-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip chip-hover !px-3 !py-1.5 !text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
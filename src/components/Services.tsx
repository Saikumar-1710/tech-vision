import {
  Globe,
  Smartphone,
  Layers,
  ShoppingCart,
  Server,
  BrainCircuit,
  LayoutDashboard,
  Puzzle,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/data/services';
import { Section, SectionHeading } from '@/components/ui/Section';
import { scrollToSection, cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Layers,
  ShoppingCart,
  Server,
  BrainCircuit,
  LayoutDashboard,
  Puzzle,
};

/** Services grid — 8 cards, each linking to the contact section. */
export function Services() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section id="services">
      <SectionHeading
        label="Services"
        title="What We Build"
        subtitle="From simple websites to complete software platforms, we bring the right development expertise to every project."
      />

      <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Globe;
          return (
            <article
              key={service.id}
              className="card card-hover group flex flex-col p-6"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-500/10 text-brand-300 transition-all duration-300 ease-out-expo group-hover:scale-110 group-hover:bg-brand-500/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className={cn(
                  'mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300',
                  'transition-colors duration-200 hover:text-brand-200'
                )}
              >
                Learn More
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
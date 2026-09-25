import { Smartphone, CloudCog, Sparkles, Code2, type LucideIcon } from 'lucide-react';
import { capabilities } from '@/data/misc';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = { Smartphone, CloudCog, Sparkles, Code2 };

/** Capability strip below the hero — icon + label, no numbers. Edit in data/misc.ts. */
export function Capabilities() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section aria-label="What we build" className="relative pb-4">
      <div className="container-site">
        <div
          ref={ref}
          className="reveal glass grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-4"
        >
          {capabilities.map((capability) => {
            const Icon = iconMap[capability.icon] ?? Code2;
            return (
              <div key={capability.label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/20 bg-brand-500/10 text-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-slate-300">{capability.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
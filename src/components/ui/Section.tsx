import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Standard page section wrapper with consistent vertical rhythm. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-20 sm:py-24 lg:py-28', className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/** Consistent section heading: optional pill label, big title, subtitle. */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        'reveal mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className
      )}
    >
      {label && <span className="section-label mb-4">{label}</span>}
      <h2 className="font-display text-display-lg font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
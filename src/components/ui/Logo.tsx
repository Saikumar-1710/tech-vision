import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/siteConfig';

interface LogoProps {
  className?: string;
  /** Show the tagline under the name (used in footer) */
  showTagline?: boolean;
}

/** Brand logo: gradient mark + wordmark. */
export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <a href="#home" className={cn('group flex items-center gap-2.5', className)} aria-label={`${siteConfig.name} — home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow-sm transition-transform duration-300 ease-out-expo group-hover:scale-105">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M9 6 4 12l5 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6l5 6-5 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 4.5 10.5 19.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-white">
          {siteConfig.name}
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            {siteConfig.tagline}
          </span>
        )}
      </span>
    </a>
  );
}
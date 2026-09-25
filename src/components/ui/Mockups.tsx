import { cn, accentGradients } from '@/lib/utils';

/**
 * Generated project mockups (no stock photos).
 * A stylized browser window / phone frame whose "screen" is a
 * gradient canvas with abstract UI blocks — unique per accent color.
 * Replace with real screenshots anytime via the `image` prop on ProjectCard.
 */

interface BrowserMockupProps {
  accent?: string;
  label?: string;
  className?: string;
}

export function BrowserMockup({ accent = 'indigo', label, className }: BrowserMockupProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-card',
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <div className="ml-2 h-4 flex-1 rounded-md bg-white/[0.05]" />
      </div>
      {/* Screen */}
      <div className={cn('relative aspect-[16/10] bg-gradient-to-br', accentGradients[accent] ?? accentGradients.indigo)}>
        <div className="absolute inset-0 bg-ink-950/55" />
        {/* Abstract UI blocks */}
        <div className="absolute inset-0 p-4 sm:p-5">
          <div className="flex h-full flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-16 rounded-full bg-white/25" />
              <div className="flex gap-1.5">
                <div className="h-2 w-8 rounded-full bg-white/15" />
                <div className="h-2 w-8 rounded-full bg-white/15" />
                <div className="h-2 w-8 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="h-3.5 w-3/5 rounded-full bg-white/30" />
            <div className="h-2 w-2/5 rounded-full bg-white/15" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="h-10 rounded-lg bg-white/[0.12] ring-1 ring-white/10" />
              <div className="h-10 rounded-lg bg-white/[0.12] ring-1 ring-white/10" />
              <div className="h-10 rounded-lg bg-white/[0.12] ring-1 ring-white/10" />
            </div>
          </div>
        </div>
        {label && (
          <span className="absolute bottom-2 right-2 rounded-md bg-ink-950/70 px-2 py-0.5 font-mono text-[10px] text-white/70 backdrop-blur">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  accent?: string;
  className?: string;
}

export function PhoneMockup({ accent = 'violet', className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[1.4rem] border border-white/15 bg-ink-900 p-1.5 shadow-card',
        className
      )}
    >
      <div className={cn('relative aspect-[9/17] rounded-[1.05rem] bg-gradient-to-b', accentGradients[accent] ?? accentGradients.violet)}>
        <div className="absolute inset-0 rounded-[1.05rem] bg-ink-950/60" />
        {/* Notch */}
        <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-white/20" />
        {/* Abstract app UI */}
        <div className="absolute inset-0 flex flex-col gap-2 p-3 pt-6">
          <div className="h-2.5 w-1/2 rounded-full bg-white/30" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
          <div className="mt-1 h-14 rounded-xl bg-white/[0.12] ring-1 ring-white/10" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded-xl bg-white/[0.12] ring-1 ring-white/10" />
            <div className="h-12 rounded-xl bg-white/[0.12] ring-1 ring-white/10" />
          </div>
          <div className="mt-auto h-8 rounded-xl bg-white/25" />
        </div>
      </div>
    </div>
  );
}
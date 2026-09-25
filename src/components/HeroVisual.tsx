import { GitBranch, CheckCircle2, Zap } from 'lucide-react';
import { BrowserMockup, PhoneMockup } from '@/components/ui/Mockups';
import { GradientAvatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';

/**
 * Hero visual — a composed "developer workspace" scene:
 * code editor window, browser preview, phone preview,
 * floating tech badges and mini developer cards.
 * Built entirely from CSS/SVG (no stock photos).
 */

const codeLines: Array<Array<{ text: string; className: string }>> = [
  [
    { text: 'const ', className: 'text-violet-400' },
    { text: 'product', className: 'text-slate-200' },
    { text: ' = ', className: 'text-slate-400' },
    { text: 'await ', className: 'text-violet-400' },
    { text: 'build', className: 'text-brand-300' },
    { text: '({', className: 'text-slate-400' },
  ],
  [
    { text: '  idea: ', className: 'text-slate-300' },
    { text: '"yours"', className: 'text-emerald-300' },
    { text: ',', className: 'text-slate-400' },
  ],
  [
    { text: '  team: ', className: 'text-slate-300' },
    { text: '"sksoft"', className: 'text-emerald-300' },
    { text: ',', className: 'text-slate-400' },
  ],
  [
    { text: '  stack: [', className: 'text-slate-300' },
    { text: '"web"', className: 'text-amber-300' },
    { text: ', ', className: 'text-slate-400' },
    { text: '"mobile"', className: 'text-amber-300' },
    { text: ', ', className: 'text-slate-400' },
    { text: '"ai"', className: 'text-amber-300' },
    { text: '],', className: 'text-slate-400' },
  ],
  [
    { text: '  quality: ', className: 'text-slate-300' },
    { text: '"production"', className: 'text-emerald-300' },
    { text: ',', className: 'text-slate-400' },
  ],
  [{ text: '});', className: 'text-slate-400' }],
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
      {/* Glow behind the scene */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-brand-500/10 blur-3xl" />

      {/* Main code editor window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-card backdrop-blur-xl">
        {/* Editor chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[11px] text-slate-500">sksoft — product.ts</span>
          <span className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
            <GitBranch className="h-3 w-3" /> main
          </span>
        </div>
        {/* Code body */}
        <div className="p-4 font-mono text-[12px] leading-6 sm:p-5 sm:text-[13px]">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-4 select-none text-right text-slate-600">{i + 1}</span>
              <span>
                {line.map((token, j) => (
                  <span key={j} className={token.className}>
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
            <span className="text-[11px] text-emerald-200">Build passing — deployed to production</span>
          </div>
        </div>
      </div>

      {/* Browser preview card (bottom-left, overlapping) */}
      <div className="absolute -bottom-10 -left-4 w-44 animate-float-slow sm:-left-10 sm:w-56">
        <BrowserMockup accent="cyan" label="web app" />
      </div>

      {/* Phone preview (right, overlapping) */}
      <div className="absolute -right-3 -top-8 w-24 animate-float-slower sm:-right-8 sm:w-28">
        <PhoneMockup accent="violet" />
      </div>

      {/* Floating tech badges */}
      <div className="absolute -left-3 top-16 animate-float-slower sm:-left-8">
        <span className="chip !border-brand-400/30 !bg-brand-500/15 !text-brand-200 shadow-glow-sm">React</span>
      </div>
      <div className="absolute right-10 top-24 animate-float-slow">
        <span className="chip !border-amber-400/30 !bg-amber-500/10 !text-amber-200">Java</span>
      </div>
      <div className="absolute -bottom-6 right-16 animate-float-slow">
        <span className="chip !border-cyan-400/30 !bg-cyan-500/10 !text-cyan-200">Flutter</span>
      </div>

      {/* Mini developer card (top-left, floating) */}
      <div
        className={cn(
          'absolute -top-12 left-6 flex animate-float-slow items-center gap-2.5 rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 shadow-card backdrop-blur-xl sm:left-2'
        )}
      >
        <GradientAvatar name="Sai Kumar" accent="indigo" size="sm" />
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-white">Sai Kumar</p>
          <p className="text-[10px] text-slate-400">Full Stack Developer</p>
        </div>
      </div>

      {/* Mini status card (bottom-right, floating) */}
      <div className="absolute -bottom-4 right-0 flex animate-float-slower items-center gap-2 rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 shadow-card backdrop-blur-xl sm:-right-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient">
          <Zap className="h-3.5 w-3.5 text-on-accent" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-white">Idea → Launch</p>
          <p className="text-[10px] text-slate-400">End-to-end delivery</p>
        </div>
      </div>
    </div>
  );
}
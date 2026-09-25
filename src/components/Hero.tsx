import { ArrowRight, Play } from 'lucide-react';
import { HeroVisual } from '@/components/HeroVisual';
import { scrollToSection } from '@/lib/utils';

const trustLine = ['Web', 'Mobile', 'SaaS', 'AI', 'Custom Software'];

/** Hero — headline, supporting line, CTAs, trust line and the workspace visual. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-44">
      {/* Background: radial glows + faint grid */}
      <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className="section-label mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-soft" />
              Software Development Collective
            </span>

            <h1 className="font-display text-display-xl font-bold text-white">
              We Build Digital Products That{' '}
              <span className="text-gradient">Move Businesses Forward.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
              A team of skilled developers helping startups, businesses and entrepreneurs
              turn ideas into powerful websites, applications and software.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn-secondary w-full sm:w-auto">
                <Play className="h-4 w-4" aria-hidden="true" />
                Explore Our Work
              </button>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-500 lg:justify-start">
              {trustLine.map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  <span className="font-medium text-slate-400">{item}</span>
                  {i < trustLine.length - 1 && <span className="h-1 w-1 rounded-full bg-brand-400/60" aria-hidden="true" />}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-up [animation-delay:150ms] lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
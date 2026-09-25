import { Code2, Users, Lightbulb, BadgeCheck, Cpu } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GradientAvatar } from '@/components/ui/Avatar';
import { BrowserMockup } from '@/components/ui/Mockups';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  { icon: Code2, title: 'Engineering', text: 'Clean, maintainable code written to last — not just to launch.' },
  { icon: Users, title: 'Collaboration', text: 'Developers, designers and founders working as one team.' },
  { icon: Lightbulb, title: 'Problem Solving', text: 'We start from the business problem, then pick the technology.' },
  { icon: BadgeCheck, title: 'Quality', text: 'Testing, reviews and honest communication at every step.' },
  { icon: Cpu, title: 'Modern Technology', text: 'Current frameworks and practices, chosen for the right reasons.' },
];

/** About — "We Are Developers Who Build." with a composed workspace visual. */
export function About() {
  const ref = useScrollReveal<HTMLUListElement>();
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            label="About Us"
            title="We Are Developers Who Build."
            subtitle="Sksoft is a collective of software developers who collaborate to design, build and ship digital products — websites, mobile apps, SaaS platforms and custom software."
            className="mb-8"
          />

          <ul ref={ref} className="reveal space-y-4">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-500/10 text-brand-300">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual — composed workspace scene */}
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-accent-500/[0.07] blur-3xl" />
          <div className="relative space-y-4">
            <BrowserMockup accent="indigo" label="sksoft.dev" />
            <div className="grid grid-cols-2 gap-4">
              <div className="card flex items-center gap-3 p-4">
                <GradientAvatar name="Rahul Sharma" accent="violet" size="sm" />
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">Rahul Sharma</p>
                  <p className="text-[10px] text-slate-500">Java Backend</p>
                </div>
              </div>
              <div className="card flex items-center gap-3 p-4">
                <GradientAvatar name="Sneha Reddy" accent="cyan" size="sm" />
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">Sneha Reddy</p>
                  <p className="text-[10px] text-slate-500">Mobile Developer</p>
                </div>
              </div>
            </div>
            <div className="card flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-xs text-slate-300">Team online — building your product</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">CI ✓ CD ✓</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
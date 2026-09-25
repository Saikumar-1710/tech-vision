import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import type { Developer } from '@/data/developers';
import { GradientAvatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';

interface DeveloperCardProps {
  developer: Developer;
  onViewProfile: (developer: Developer) => void;
}

/** Single developer profile card. */
export function DeveloperCard({ developer, onViewProfile }: DeveloperCardProps) {
  return (
    <article className="card card-hover group flex h-full flex-col p-6">
      {/* Avatar + identity */}
      <div className="flex items-start justify-between">
        <GradientAvatar name={developer.name} accent={developer.accent} size="lg" photo={developer.photo} />
        <div className="flex gap-1.5">
          <a
            draggable={false}
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${developer.name} on GitHub`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-200"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            draggable={false}
            href={developer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${developer.name} on LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-200"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-white">{developer.name}</h3>
      <p className="text-sm font-medium text-brand-300">{developer.role}</p>
      <p className="mt-0.5 text-xs text-slate-500">{developer.experience}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{developer.bio}</p>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {developer.skills.map((skill) => (
          <span key={skill} className="chip chip-hover">
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() => onViewProfile(developer)}
        className={cn(
          'mt-5 inline-flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5',
          'text-sm font-semibold text-slate-200 transition-all duration-300 ease-out-expo',
          'hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white'
        )}
      >
        View Profile
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
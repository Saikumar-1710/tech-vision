import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { BrowserMockup, PhoneMockup } from '@/components/ui/Mockups';
import { scrollToSection, cn, accentSoft } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

/** Single portfolio card with generated mockup (or real image when provided). */
export function ProjectCard({ project }: ProjectCardProps) {
  const isMobile = project.category === 'Mobile';

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      {/* Mockup / image */}
      <div className="relative overflow-hidden p-5 pb-0">
        <div className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-white/10"
            />
          ) : isMobile ? (
            <div className="flex justify-center py-2">
              <PhoneMockup accent={project.accent} className="w-28" />
            </div>
          ) : (
            <BrowserMockup accent={project.accent} label={project.category} />
          )}
        </div>
        {/* Category badge */}
        <span
          className={cn(
            'absolute left-7 top-7 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur',
            accentSoft[project.accent]
          )}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors duration-200 hover:text-brand-200"
        >
          View Project
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
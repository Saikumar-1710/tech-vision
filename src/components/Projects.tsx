import { useMemo, useState } from 'react';
import { projects, projectFilters } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

/**
 * Portfolio — 9 projects with frontend-only category filtering.
 * No backend: filtering happens entirely in memory.
 */
export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section id="projects" className="bg-ink-900/40">
      <SectionHeading
        label="Portfolio"
        title="Our Recent Work"
        subtitle="A selection of products we have designed, built and shipped for teams across industries."
      />

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out-expo',
              filter === category
                ? 'border-brand-400/50 bg-brand-500/15 text-white shadow-glow-sm'
                : 'border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-center text-sm text-slate-500">
          No projects in this category yet — check back soon.
        </p>
      )}
    </Section>
  );
}
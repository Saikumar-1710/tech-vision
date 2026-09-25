/** Testimonials data — edit names, companies, quotes and ratings freely. */
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  projectType: string;
  rating: number; // 1–5
  quote: string;
  photo?: string;
  accent: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Client — Retail',
    company: 'Retail Brand',
    projectType: 'E-Commerce Platform',
    rating: 5,
    quote:
      'The team understood our store requirements quickly and delivered a clean, fast platform. Communication was clear throughout the project.',
    accent: 'indigo',
  },
  {
    id: 't2',
    name: 'Client — Services',
    company: 'Service Startup',
    projectType: 'Mobile App',
    rating: 5,
    quote:
      'Our booking app went from idea to launch smoothly. The developers suggested better approaches whenever it helped the product.',
    accent: 'cyan',
  },
  {
    id: 't3',
    name: 'Client — SaaS',
    company: 'SaaS Company',
    projectType: 'SaaS Product',
    rating: 4,
    quote:
      'Solid engineering work on our dashboard and billing flows. They treated the product like their own and stayed available after launch.',
    accent: 'violet',
  },
  {
    id: 't4',
    name: 'Client — Enterprise',
    company: 'Enterprise Team',
    projectType: 'Backend & APIs',
    rating: 5,
    quote:
      'Well-structured APIs and clear documentation. Integration with our existing systems was handled without disruption.',
    accent: 'emerald',
  },
];
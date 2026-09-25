/**
 * Projects / portfolio data.
 * `image` is optional — leave '' to use the generated CSS mockup,
 * or set a path like '/images/projects/goldworks.jpg' for a real screenshot.
 * `category` must match one of the filter keys below.
 */
export type ProjectCategory = 'Web' | 'Mobile' | 'SaaS' | 'E-Commerce' | 'AI' | 'Business';

export const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  'Web',
  'Mobile',
  'SaaS',
  'E-Commerce',
  'AI',
  'Business',
];

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  image?: string;
  /** Optional external link for the "View Project" button */
  link?: string;
  /** Mockup accent used by the generated preview */
  accent: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';
}

export const projects: Project[] = [
  {
    id: 'gold-works',
    name: 'Gold Works',
    category: 'E-Commerce',
    description: 'A modern online shopping platform with catalog, cart and order management.',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL'],
    accent: 'amber',
  },
  {
    id: 'service-management-platform',
    name: 'Service Management Platform',
    category: 'Business',
    description: 'A complete service-center management application for bookings, staff and billing.',
    tech: ['Flutter', 'Firebase', 'Java', 'Spring Boot'],
    accent: 'indigo',
  },
  {
    id: 'ai-support-assistant',
    name: 'AI Support Assistant',
    category: 'AI',
    description: 'An AI-powered customer support platform that resolves queries instantly.',
    tech: ['React', 'Python', 'AI API'],
    accent: 'violet',
  },
  {
    id: 'finsight-dashboard',
    name: 'FinSight Dashboard',
    category: 'SaaS',
    description: 'A finance analytics SaaS with reports, roles and subscription billing.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    accent: 'cyan',
  },
  {
    id: 'medicare-portal',
    name: 'MediCare Portal',
    category: 'Web',
    description: 'A clinic website with appointment booking and patient information pages.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    accent: 'emerald',
  },
  {
    id: 'fleettrack-app',
    name: 'FleetTrack App',
    category: 'Mobile',
    description: 'A logistics mobile app for live fleet tracking and delivery updates.',
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    accent: 'rose',
  },
  {
    id: 'learnloop-lms',
    name: 'LearnLoop LMS',
    category: 'SaaS',
    description: 'A learning platform with courses, quizzes and progress tracking.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    accent: 'indigo',
  },
  {
    id: 'buildnest-realestate',
    name: 'BuildNest',
    category: 'Web',
    description: 'A real-estate listing platform with search, filters and inquiry forms.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    accent: 'amber',
  },
  {
    id: 'opsflow-automation',
    name: 'OpsFlow Automation',
    category: 'Business',
    description: 'A business automation suite connecting invoices, inventory and alerts.',
    tech: ['Python', 'Node.js', 'Redis'],
    accent: 'violet',
  },
];
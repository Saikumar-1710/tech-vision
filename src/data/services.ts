/**
 * Services data — edit freely.
 * `icon` values map to lucide-react icons inside Services.tsx.
 */
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Globe',
    title: 'Web Development',
    description: 'Modern responsive websites and web applications.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 'mobile-development',
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile applications.',
    tags: ['Flutter', 'React Native', 'Firebase'],
  },
  {
    id: 'saas-development',
    icon: 'Layers',
    title: 'SaaS Development',
    description: 'Scalable SaaS platforms designed for growing businesses.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-Commerce',
    description: 'Custom online stores and commerce platforms.',
    tags: ['React', 'Spring Boot', 'Stripe'],
  },
  {
    id: 'backend-apis',
    icon: 'Server',
    title: 'Backend & APIs',
    description: 'Secure APIs, backend systems and integrations.',
    tags: ['Java', 'Spring Boot', 'REST'],
  },
  {
    id: 'ai-automation',
    icon: 'BrainCircuit',
    title: 'AI & Automation',
    description: 'AI-powered tools, automation and intelligent applications.',
    tags: ['Python', 'AI APIs', 'Automation'],
  },
  {
    id: 'admin-dashboards',
    icon: 'LayoutDashboard',
    title: 'Admin Dashboards',
    description: 'Business dashboards, analytics and management systems.',
    tags: ['React', 'Charts', 'Role-based'],
  },
  {
    id: 'custom-software',
    icon: 'Puzzle',
    title: 'Custom Software',
    description: 'Software solutions built around specific business requirements.',
    tags: ['Java', '.NET', 'Cloud'],
  },
];
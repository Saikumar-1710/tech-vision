/**
 * Misc content data: capabilities, process steps, why-us points, industries.
 * Edit freely — content lives apart from the UI.
 */

/* ---------------- Capabilities (icon strip — no numbers) ---------------- */
export interface Capability {
  icon: string;
  label: string;
}

export const capabilities: Capability[] = [
  { icon: 'Smartphone', label: 'Web & Mobile Apps' },
  { icon: 'CloudCog', label: 'SaaS Platforms' },
  { icon: 'Sparkles', label: 'AI & Automation' },
  { icon: 'Code2', label: 'Custom Software' },
];

/* ---------------- Process ---------------- */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Share Your Idea',
    description: 'Tell us what you want to build and what problem you want to solve.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We understand your requirements and define the right technology and development approach.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our developers design, develop and test your product.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We help you take your product from development to production.',
  },
];

/* ---------------- Why Us ---------------- */
export interface WhyUsPoint {
  icon: string;
  title: string;
  description: string;
}

export const whyUsPoints: WhyUsPoint[] = [
  {
    icon: 'Code2',
    title: 'Skilled Developers',
    description: 'Work with developers experienced across multiple technologies.',
  },
  {
    icon: 'Users',
    title: 'One Team, Multiple Skills',
    description: 'Frontend, backend, mobile, cloud and AI expertise under one roof.',
  },
  {
    icon: 'Target',
    title: 'Business-Focused Development',
    description: 'We focus on solving the actual business problem, not just writing code.',
  },
  {
    icon: 'Sparkles',
    title: 'Modern Technology',
    description: 'We use current frameworks and development practices.',
  },
  {
    icon: 'Shuffle',
    title: 'Flexible Engagement',
    description: 'Suitable for startups, businesses and individual projects.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Long-Term Support',
    description: 'Continue working with the team after the initial launch.',
  },
];

/* ---------------- Industries ---------------- */
export interface Industry {
  icon: string;
  name: string;
}

export const industries: Industry[] = [
  { icon: 'ShoppingBag', name: 'E-Commerce' },
  { icon: 'HeartPulse', name: 'Healthcare' },
  { icon: 'GraduationCap', name: 'Education' },
  { icon: 'Landmark', name: 'Finance' },
  { icon: 'Truck', name: 'Logistics' },
  { icon: 'Car', name: 'Automotive' },
  { icon: 'Building2', name: 'Real Estate' },
  { icon: 'Store', name: 'Retail' },
  { icon: 'CloudCog', name: 'SaaS' },
  { icon: 'Rocket', name: 'Startups' },
];
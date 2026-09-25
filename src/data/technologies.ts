/**
 * Technology stack data — grouped by category.
 * Each group renders as a row of hoverable badges.
 */
export interface TechGroup {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'MonitorSmartphone',
    items: ['React', 'Next.js', 'Angular', 'Vue', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    items: ['Java', 'Spring Boot', 'Node.js', 'Python', '.NET'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'Smartphone',
    items: ['Flutter', 'React Native', 'Android', 'iOS'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    items: ['AWS', 'Azure', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Jira', 'Figma', 'Postman'],
  },
];
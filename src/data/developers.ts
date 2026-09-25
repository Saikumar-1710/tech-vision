/**
 * Developers data — replace names, roles, bios, skills and links easily.
 * `photo` is optional: leave empty ('') to use the generated gradient avatar,
 * or set a path like '/images/team/saikumar.jpg' to use a real photo.
 */
export interface Developer {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
  github: string;
  linkedin: string;
  photo?: string;
  /** Used to generate a deterministic gradient avatar */
  accent: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';
}

export const developers: Developer[] = [
  {
    id: 'sai-kumar',
    name: 'Sai Kumar',
    role: 'Full Stack Developer',
    experience: '4+ Years Experience',
    bio: 'Specializes in scalable web applications and SaaS products.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/saikumar',
    linkedin: 'https://linkedin.com/in/saikumar',
    accent: 'indigo',
  },
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'Java Backend Developer',
    experience: '5+ Years Experience',
    bio: 'Specializes in enterprise backend systems and REST APIs.',
    skills: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
    github: 'https://github.com/rahulsharma',
    linkedin: 'https://linkedin.com/in/rahulsharma',
    accent: 'violet',
  },
  {
    id: 'sneha-reddy',
    name: 'Sneha Reddy',
    role: 'Mobile Developer',
    experience: '3+ Years Experience',
    bio: 'Specializes in cross-platform mobile applications.',
    skills: ['Flutter', 'Firebase', 'REST APIs'],
    github: 'https://github.com/snehareddy',
    linkedin: 'https://linkedin.com/in/snehareddy',
    accent: 'cyan',
  },
  {
    id: 'priya-menon',
    name: 'Priya Menon',
    role: 'Python & AI Developer',
    experience: '4+ Years Experience',
    bio: 'Builds AI-powered tools, chat assistants and automation pipelines.',
    skills: ['Python', 'FastAPI', 'AI APIs', 'Docker'],
    github: 'https://github.com/priyamenon',
    linkedin: 'https://linkedin.com/in/priyamenon',
    accent: 'amber',
  },
];
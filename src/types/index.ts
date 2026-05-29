export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  /** Place your photo at public/profile.jpg (or update this path) */
  profileImage: string;
  about: {
    paragraphs: string[];
    highlights: string[];
  };
}

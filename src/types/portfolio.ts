export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  project: string;
  description: string;
  metric: string;
  highlight: string;
}

export interface CommunityWork {
  role: string;
  organization: string;
  period: string;
  drives: string[];
  impactMetric: string;
  impactDescription: string;
}

export interface Training {
  title: string;
  period: string;
  hours: number;
  topics: string[];
  certificateUrl?: string;
}

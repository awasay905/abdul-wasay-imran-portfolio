export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Stat {
  label: string;
  description?: string;
  items?: string[];
  quote?: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectDetails {
  challenge: string;
  solution: string;
  role: string;
  duration: string;
  visualizations: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  details?: ProjectDetails;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
}

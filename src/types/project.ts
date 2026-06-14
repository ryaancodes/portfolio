export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: { name: string; icon?: string }[];
  architecture: string;
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

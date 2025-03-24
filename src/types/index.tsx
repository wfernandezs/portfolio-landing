export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  preview?: string;
  icon: React.ReactNode;
}

export interface Skill {
  id: string;
  name: string;
  level?: number;
  category: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
}

export interface BioContent {
  paragraphs: string[];
}

export type Tab = "projects" | "bio" | "contact";

// API response types
export interface ApiResponse<T> {
  data: T;
  error?: {
    message: string;
    status: number;
  };
}
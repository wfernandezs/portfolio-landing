export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  preview?: string;
  icon: React.ReactNode;
}

export type Tab = "projects" | "bio" | "contact";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types";
import { Server, Database, Code } from "lucide-react";

interface ProjectsProps {
  // For future use if needed
  projects?: Project[];
}

export const Projects: React.FC<ProjectsProps> = () => {
  // For future use if props are needed
  // const displayProjects = props.projects?.slice(0, 3);

  // Currently using hardcoded featured projects
  const featuredProjects: Project[] = [
    {
      title: "API Gateway Service",
      description:
        "High-performance API gateway built with Node.js, featuring rate limiting and request validation",
      tech: ["Node.js", "Express", "Redis"],
      github: "https://github.com/wfernandezs/api-gateway",
      demo: "https://api-gateway-demo.yourdomain.com",
      preview:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Database Migration Tool",
      description:
        "A CLI tool for managing database migrations across different environments with rollback support",
      tech: ["TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/wfernandezs/db-migration-tool",
      preview:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
      icon: <Database className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "React Component Library",
      description:
        "A reusable UI component library built with React and TypeScript, with Storybook documentation",
      tech: ["React", "TypeScript", "Storybook"],
      github: "https://github.com/wfernandezs/react-components",
      demo: "https://wfernandezs.github.io/react-components",
      preview:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=80",
      icon: <Code className="w-8 h-8 text-pink-400" />,
    },
  ];

  // Choose which projects to display (props or hardcoded featured)
  const displayProjects = featuredProjects;

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 mb-4">
          These are just a few highlights from my portfolio. Check out my GitHub
          for more projects.
        </p>
        <a
          href="https://github.com/wfernandezs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-cyan-900/30 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-900/50 transition-colors"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

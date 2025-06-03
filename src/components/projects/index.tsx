import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types";
import { Server, Globe, Code, Database } from "lucide-react";

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
      title: "TTT Grupo Morikawa Website",
      description: "Digital platform showcasing environmental technologies for habitat restoration and water treatment",
      tech: ["JavaScript", "HTML", "CSS", "Environmental Tech"],
      github: "#",
      demo: "https://www.tttgrupomorikawa.com/",
      preview: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
      icon: <Globe className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/wfernandezs/portfolio-landing",
      preview: "/assets/personal-portfolio.jpg",
      icon: <Code className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Products Launcher",
      description: "Microservices-based e-commerce application with client gateway, auth and payment services",
      tech: ["NestJS", "MongoDB", "Prisma", "Stripe"],
      github: "https://github.com/nest-microservices-koa/products-launcher",
      preview: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=80",
      icon: <Server className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Event Management API",
      description: "A RESTful API for event management built with Go, Gin, and GORM",
      tech: ["Go", "Gin", "GORM", "RESTful API"],
      github: "https://github.com/wfernandezs/event-api",
      preview: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=80",
      icon: <Database className="w-8 h-8 text-cyan-400" />,
    },
  ];

  // Choose which projects to display (props or hardcoded featured)
  const displayProjects = featuredProjects;

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

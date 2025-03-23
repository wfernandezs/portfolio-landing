import { Github, ExternalLink } from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-colors group animated-gradient">
      {project.preview && (
        <div className="project-thumbnail">
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay"
            >
              <span className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/50 rounded-lg text-cyan-400 backdrop-blur-sm">
                View Demo
              </span>
            </a>
          )}
        </div>
      )}
      <div className="flex items-center gap-4 mb-2">
        <div className="logo-container">{project.icon}</div>
        <h3 className="text-lg font-semibold text-cyan-400">{project.title}</h3>
      </div>
      <p className="text-gray-400 mb-2 text-sm">{project.description}</p>
      <div className="mb-2 flex flex-wrap gap-1">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-cyan-400 hover:text-cyan-300"
        >
          <Github className="w-4 h-4 mr-2" />
          Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-purple-400 hover:text-purple-300"
          >
            Live Demo
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

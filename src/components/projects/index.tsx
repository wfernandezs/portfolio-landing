import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types";
import { useProjects } from "../../hooks/useSWRData";
import { Loading, ErrorMessage } from "../Loading";

interface ProjectsProps {
  // Optional: allow passing projects directly for flexibility
  projects?: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects: propProjects }) => {
  // Use the hook to fetch projects data from API
  const { projects: fetchedProjects, isLoading, isError } = useProjects();
  
  // Use projects from props if provided, otherwise use fetched projects
  const displayProjects = propProjects || fetchedProjects;

  if (isLoading) {
    return <Loading message="Loading projects..." />;
  }

  if (isError && !propProjects) {
    return <ErrorMessage message="Failed to load projects. Please try again later." />;
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <ProjectCard key={project.id || index} project={project} />
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
import axios from 'axios';
import { 
  Project, 
  Skill, 
  Certification, 
  BioContent, 
  ApiResponse 
} from '../types';
import { Server, Database, Code } from 'lucide-react';
import React from 'react';

// Create an axios instance with base URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'https://your-strapi-cms-url.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Generic fetch function
const fetchData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<ApiResponse<T>>(endpoint);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: {} as T,
        error: {
          message: error.message,
          status: error.response?.status || 500,
        },
      };
    }
    return {
      data: {} as T,
      error: {
        message: 'An unknown error occurred',
        status: 500,
      },
    };
  }
};

// Specific fetch functions
export const fetchProjects = async (): Promise<ApiResponse<Project[]>> => {
  return fetchData<Project[]>('/projects');
};

export const fetchSkills = async (): Promise<ApiResponse<Skill[]>> => {
  return fetchData<Skill[]>('/skills');
};

export const fetchCertifications = async (): Promise<ApiResponse<Certification[]>> => {
  return fetchData<Certification[]>('/certifications');
};

export const fetchBio = async (): Promise<ApiResponse<BioContent>> => {
  return fetchData<BioContent>('/bio');
};

// Create icon element functions
const createServerIcon = () => React.createElement(Server, { className: "w-8 h-8 text-cyan-400" });
const createDatabaseIcon = () => React.createElement(Database, { className: "w-8 h-8 text-purple-400" });
const createCodeIcon = () => React.createElement(Code, { className: "w-8 h-8 text-pink-400" });
const createDefaultIcon = () => React.createElement(Code, { className: "w-8 h-8 text-gray-400" });

// Fallback data in case API is unavailable
export const getFallbackProjects = (): Project[] => {
  return [
    {
      id: "1",
      title: "API Gateway Service",
      description:
        "High-performance API gateway built with Node.js, featuring rate limiting and request validation",
      tech: ["Node.js", "Express", "Redis"],
      github: "https://github.com/wfernandezs/api-gateway",
      demo: "https://api-gateway-demo.yourdomain.com",
      preview:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      icon: createServerIcon(),
    },
    {
      id: "2",
      title: "Database Migration Tool",
      description:
        "A CLI tool for managing database migrations across different environments with rollback support",
      tech: ["TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/wfernandezs/db-migration-tool",
      preview:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
      icon: createDatabaseIcon(),
    },
    {
      id: "3",
      title: "React Component Library",
      description:
        "A reusable UI component library built with React and TypeScript, with Storybook documentation",
      tech: ["React", "TypeScript", "Storybook"],
      github: "https://github.com/wfernandezs/react-components",
      demo: "https://wfernandezs.github.io/react-components",
      preview:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=80",
      icon: createCodeIcon(),
    },
  ];
};

// Convert Strapi icon name to Lucide icon
export const getIconComponent = (iconName: string) => {
  // This function would map Strapi icon names to actual React components
  const iconMap: Record<string, () => React.ReactNode> = {
    'server': createServerIcon,
    'database': createDatabaseIcon,
    'code': createCodeIcon,
  };
  
  return (iconMap[iconName] || createDefaultIcon)();
};
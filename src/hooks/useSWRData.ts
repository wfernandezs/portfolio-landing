import useSWR from 'swr';
import { 
  fetchProjects, 
  fetchSkills, 
  fetchCertifications, 
  fetchBio,
  getFallbackProjects,
  getIconComponent
} from '../services/api';
import { 
  Project, 
  Skill, 
  Certification, 
  BioContent,
  ApiResponse
} from '../types';

// Custom fetcher that handles errors
const fetcher = async <T>(fetchFunction: () => Promise<ApiResponse<T>>, fallbackData?: T): Promise<T> => {
  try {
    const response = await fetchFunction();
    
    if (response.error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching data: ${response.error.message}`);
      if (fallbackData) {
        return fallbackData;
      }
      throw new Error(response.error.message);
    }
    
    return response.data;
  } catch (error) {
    if (fallbackData) {
      return fallbackData;
    }
    throw error;
  }
};

// Hook for projects data
export const useProjects = () => {
  const { data, error, isLoading } = useSWR<Project[]>(
    'projects',
    () => fetcher(fetchProjects, getFallbackProjects()),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  // Process data to make sure icons are React components
  const processedData = data?.map(project => ({
    ...project,
    // If icon is a string from CMS, convert it to a React component
    icon: typeof project.icon === 'string' ? getIconComponent(project.icon) : project.icon
  }));

  return {
    projects: processedData || [],
    isLoading,
    isError: error
  };
};

// Hook for skills data
export const useSkills = () => {
  const { data, error, isLoading } = useSWR<Skill[]>(
    'skills',
    () => fetcher(fetchSkills),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    skills: data || [],
    isLoading,
    isError: error
  };
};

// Hook for certifications data
export const useCertifications = () => {
  const { data, error, isLoading } = useSWR<Certification[]>(
    'certifications',
    () => fetcher(fetchCertifications),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    certifications: data || [],
    isLoading,
    isError: error
  };
};

// Hook for bio content
export const useBio = () => {
  const { data, error, isLoading } = useSWR<BioContent>(
    'bio',
    () => fetcher(fetchBio),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    bioContent: data || { paragraphs: [] },
    isLoading,
    isError: error
  };
};
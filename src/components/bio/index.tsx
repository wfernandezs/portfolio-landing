import React from "react";
import {
  Server,
  Database,
  Code,
  GitBranch,
  Cloud,
  Terminal,
  Monitor,
  Figma,
  Award,
} from "lucide-react";
import { SkillSection } from "./SkillSection";
import { useSkills, useCertifications, useBio } from "../../hooks/useSWRData";
import { Loading, ErrorMessage } from "../Loading";
import { Skill } from "../../types";

export const Bio: React.FC = () => {
  // Use hooks to fetch data from API
  const { skills, isLoading: skillsLoading, isError: skillsError } = useSkills();
  const { certifications, isLoading: certLoading, isError: certError } = useCertifications();
  const { bioContent, isLoading: bioLoading, isError: bioError } = useBio();

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = skills.reduce(
    (acc, skill) => {
      const category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  // Map category names to icon colors
  const categoryColors: Record<string, string> = {
    'Backend Development': 'text-purple-400',
    'Frontend Development': 'text-pink-400',
    'DevOps & Cloud': 'text-cyan-400',
    'Tools & Utilities': 'text-amber-400',
  };

  // Map category names to icons (for future use with Strapi)
  const categoryIcons: Record<string, React.ElementType> = {
    'Backend Development': Server,
    'Frontend Development': Code,
    'DevOps & Cloud': Cloud,
    'Tools & Utilities': Terminal,
  };

  // Loading states
  if (skillsLoading || certLoading || bioLoading) {
    return <Loading message="Loading profile..." />;
  }

  // Error states
  if (skillsError || certError || bioError) {
    return <ErrorMessage message="Failed to load profile data. Please try again later." />;
  }

  // Fallback data when API fails but doesn't trigger error
  const backendSkills: Skill[] = [
    { id: "b1", name: "Node.js", level: 5, category: "Backend Development" },
    { id: "b2", name: "Express", level: 5, category: "Backend Development" },
    { id: "b3", name: "NestJS", level: 4, category: "Backend Development" },
    { id: "b4", name: "MongoDB", level: 4, category: "Backend Development" },
    { id: "b5", name: "PostgreSQL", level: 4, category: "Backend Development" },
    { id: "b6", name: "Redis", level: 3, category: "Backend Development" },
    { id: "b7", name: "GraphQL", level: 3, category: "Backend Development" },
    { id: "b8", name: "REST APIs", level: 5, category: "Backend Development" },
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">About Me</h3>

      <div className="mb-8">
        {bioContent.paragraphs && bioContent.paragraphs.length > 0 ? (
          bioContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <>
            <p className="text-gray-300 mb-4">
              Fullstack Developer with more than 7 years of experience in
              multi-platform web technologies, using JavaScript, Python, and Java.
              Focused on delivering quality code and performance, and migrating
              solution to serverless architecture with AWS and Azure. Implement
              serverless functions and propose transition to cloud solution oriented
              resources. Enjoy performing onboarding and refinement tasks, both in
              remote and on-site environments.
            </p>
            <p className="text-gray-300 mb-4">
              My background includes working with startups and established
              companies, handling everything from architecture design to
              implementation and deployment. I take pride in writing clean, tested,
              and documented code.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me reading about new technologies,
              practicing piano and guitar, or playing video games.
            </p>
          </>
        )}
      </div>

      {/* Certifications Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(certifications.length > 0 ? certifications : [
            {
              id: "c1",
              name: "AWS Certified Developer - Associate",
              issuer: "Amazon Web Services",
              year: "2024",
              image:
                "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
              link: "https://www.credly.com/badges/1e2a528f-31b8-4760-858f-46d513ee815f",
            },
          ]).map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800/70 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/30 transition-colors flex flex-col items-center"
            >
              <div className="mb-3 w-28 h-28 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute -top-2 -right-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <h4 className="text-cyan-400 font-medium text-center text-sm mb-1">
                {cert.name}
              </h4>
              <div className="text-gray-400 text-xs text-center">
                {cert.issuer}
              </div>
              <div className="text-gray-500 text-xs text-center mt-1">
                {cert.year}
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
                >
                  Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Skills</h3>

        {Object.keys(skillsByCategory).length > 0 ? (
          // Render skills from API
          Object.entries(skillsByCategory).map(([category, skills]) => (
            <SkillSection
              key={category}
              title={category}
              skills={skills.map(skill => ({
                ...skill,
                icon: categoryIcons[category] || Code
              }))}
              iconColor={categoryColors[category] || "text-gray-400"}
            />
          ))
        ) : (
          // Render fallback skills
          <>
            <SkillSection
              title="Backend Development"
              skills={backendSkills.map(skill => ({
                ...skill,
                icon: Server
              }))}
              iconColor="text-purple-400"
            />

            <SkillSection
              title="DevOps & Cloud"
              skills={[
                { id: "d1", name: "Docker", level: 4, category: "DevOps & Cloud", icon: Cloud },
                { id: "d2", name: "Kubernetes", level: 3, category: "DevOps & Cloud", icon: Cloud },
                { id: "d3", name: "AWS", level: 4, category: "DevOps & Cloud", icon: Cloud },
                { id: "d4", name: "CI/CD", level: 4, category: "DevOps & Cloud", icon: GitBranch },
                { id: "d5", name: "GitHub Actions", level: 4, category: "DevOps & Cloud", icon: GitBranch },
                { id: "d6", name: "Terraform", level: 3, category: "DevOps & Cloud", icon: Cloud },
              ]}
              iconColor="text-cyan-400"
            />

            <SkillSection
              title="Frontend Development"
              skills={[
                { id: "f1", name: "React", level: 4, category: "Frontend Development", icon: Code },
                { id: "f2", name: "TypeScript", level: 5, category: "Frontend Development", icon: Code },
                { id: "f3", name: "TailwindCSS", level: 4, category: "Frontend Development", icon: Code },
                { id: "f4", name: "HTML/CSS", level: 4, category: "Frontend Development", icon: Code },
                { id: "f5", name: "Responsive Design", level: 4, category: "Frontend Development", icon: Monitor },
                { id: "f6", name: "UI/UX Basics", level: 3, category: "Frontend Development", icon: Figma },
              ]}
              iconColor="text-pink-400"
            />

            <SkillSection
              title="Tools & Utilities"
              skills={[
                { id: "t1", name: "Git", level: 5, category: "Tools & Utilities", icon: GitBranch },
                { id: "t2", name: "VS Code", level: 5, category: "Tools & Utilities", icon: Terminal },
                { id: "t3", name: "Jest", level: 4, category: "Tools & Utilities", icon: Terminal },
                { id: "t4", name: "Postman", level: 4, category: "Tools & Utilities", icon: Terminal },
              ]}
              iconColor="text-amber-400"
            />
          </>
        )}
      </div>
    </div>
  );
};
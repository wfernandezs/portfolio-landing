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
import { SkillSection, Skill } from "./SkillSection";
import { useTranslation } from "react-i18next";

// Add a new interface for certifications
interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
}

export const Bio: React.FC = () => {
  const { t } = useTranslation();
  const backendSkills: Skill[] = [
    { name: "Node.js", icon: Server, level: 5 },
    { name: "Express", icon: Server, level: 5 },
    { name: "NestJS", icon: Server, level: 4 },
    { name: "MongoDB", icon: Database, level: 4 },
    { name: "PostgreSQL", icon: Database, level: 4 },
    { name: "Redis", icon: Database, level: 3 },
    { name: "GraphQL", icon: Code, level: 3 },
    { name: "REST APIs", icon: Server, level: 5 },
  ];

  const devOpsSkills: Skill[] = [
    { name: "Docker", icon: Cloud, level: 4 },
    { name: "Kubernetes", icon: Cloud, level: 3 },
    { name: "AWS", icon: Cloud, level: 4 },
    { name: "CI/CD", icon: GitBranch, level: 4 },
    { name: "GitHub Actions", icon: GitBranch, level: 4 },
    { name: "Terraform", icon: Cloud, level: 3 },
  ];

  const frontendSkills: Skill[] = [
    { name: "React", icon: Code, level: 4 },
    { name: "TypeScript", icon: Code, level: 5 },
    { name: "TailwindCSS", icon: Code, level: 4 },
    { name: "HTML/CSS", icon: Code, level: 4 },
    { name: "Responsive Design", icon: Monitor, level: 4 },
    { name: "UI/UX Basics", icon: Figma, level: 3 },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", icon: GitBranch, level: 5 },
    { name: "VS Code", icon: Terminal, level: 5 },
    { name: "Jest", icon: Terminal, level: 4 },
    { name: "Postman", icon: Terminal, level: 4 },
  ];

  // Add certifications data
  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      year: "2024",
      image:
        "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      link: "https://www.credly.com/badges/1e2a528f-31b8-4760-858f-46d513ee815f",
    },
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">{t('aboutMe')}</h3>

      <div className="mb-8">
        <p className="text-gray-300 mb-4">
          I'm a full-stack developer with over 5 years of experience,
          specializing in Node.js backend development. I'm passionate about
          building scalable and maintainable applications that solve real-world
          problems.
        </p>
        <p className="text-gray-300 mb-4">
          My background includes working with startups and established
          companies, handling everything from architecture design to
          implementation and deployment. I take pride in writing clean, tested,
          and documented code.
        </p>
        <p className="text-gray-300">
          When I'm not coding, you can find me reading about new technologies,
          contributing to open-source projects, or exploring the outdoors.
        </p>
      </div>

      {/* Add Certifications Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
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
                  {t('verify')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">{t('skills')}</h3>

        <SkillSection
          title={t('backendDev')}
          skills={backendSkills}
          iconColor="text-purple-400"
        />

        <SkillSection
          title={t('devopsCloud')}
          skills={devOpsSkills}
          iconColor="text-cyan-400"
        />

        <SkillSection
          title={t('frontend')}
          skills={frontendSkills}
          iconColor="text-pink-400"
        />

        <SkillSection
          title={t('tools')}
          skills={toolsSkills}
          iconColor="text-amber-400"
        />
      </div>
    </div>
  );
};

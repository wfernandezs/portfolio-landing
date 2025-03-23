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
} from "lucide-react";
import { SkillSection, Skill } from "./SkillSection";

export const Bio: React.FC = () => {
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

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">About Me</h3>

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

      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Skills</h3>

        <SkillSection
          title="Backend Development"
          skills={backendSkills}
          iconColor="text-purple-400"
        />

        <SkillSection
          title="DevOps & Cloud"
          skills={devOpsSkills}
          iconColor="text-cyan-400"
        />

        <SkillSection
          title="Frontend Development"
          skills={frontendSkills}
          iconColor="text-pink-400"
        />

        <SkillSection
          title="Tools & Utilities"
          skills={toolsSkills}
          iconColor="text-amber-400"
        />
      </div>
    </div>
  );
};

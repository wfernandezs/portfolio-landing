import React from "react";
import { LucideIcon } from "lucide-react";

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
  level?: number; // Optional skill level from 1-5
  category: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
  iconColor: string;
}

export const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  skills,
  iconColor,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.id}
              className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-colors"
            >
              <Icon className={`w-5 h-5 mr-2 ${iconColor}`} />
              <span className="text-gray-300">{skill.name}</span>
              {skill.level && (
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-3 rounded-full mx-px ${
                        i < skill.level! ? "bg-cyan-400" : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
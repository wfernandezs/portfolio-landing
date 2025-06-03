import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">{t('getInTouch')}</h3>
      <div className="space-y-4">
        <a
          href="mailto:walter.fernandez@proton.me"
          className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <Mail className="w-5 h-5 text-purple-400 mr-3" />
          <span className="text-gray-300">walter.fernandez@proton.me</span>
        </a>

        <a
          href="https://www.linkedin.com/in/walter-fernandez-sanchez-a3924354/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-purple-400 mr-3" />
          <span className="text-gray-300">LinkedIn Profile</span>
        </a>

        <a
          href="https://github.com/wfernandezs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <Github className="w-5 h-5 text-purple-400 mr-3" />
          <span className="text-gray-300">GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

import React from "react";
import { Terminal } from "lucide-react";
import { ParticlesBackground } from "../ParticlesBackground";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[30vh] min-h-[250px] flex items-center">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/20" />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Terminal className="w-16 h-16 text-cyan-400 mb-4 animate-pulse" />
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text name-glow">
              WALTER FERNÁNDEZ
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-400">
              NODE.JS DEVELOPER
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Specialized in building scalable backend solutions, microservices,
              and cloud architecture. Experienced in AWS and Azure cloud
              platforms.
            </p>
          </div>
        </div>
      </div>
      {/* Gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

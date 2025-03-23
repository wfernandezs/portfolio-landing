import React, { useState } from "react";
import {
  Github,
  Terminal,
  Database,
  Code2,
  Server,
  Cpu,
  ExternalLink,
  User,
  Mail,
  Linkedin,
  MapPin,
  BookOpen,
} from "lucide-react";
import { ParticlesBackground } from "./components/ParticlesBackground";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  preview?: string;
  icon: React.ReactNode;
}

type Tab = "projects" | "bio" | "contact";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  const projects: Project[] = [
    {
      title: "API Gateway Service",
      description:
        "High-performance API gateway built with Node.js, featuring rate limiting and request validation",
      tech: ["Node.js", "Express", "Redis"],
      github: "https://github.com/yourusername/api-gateway",
      demo: "https://api-gateway-demo.yourdomain.com",
      preview:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Microservices Framework",
      description:
        "Lightweight microservices framework with service discovery and load balancing",
      tech: ["Node.js", "TypeScript", "Docker"],
      github: "https://github.com/yourusername/go-micro",
      demo: "https://micro-demo.yourdomain.com",
      preview:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Database Migration Tool",
      description:
        "CLI tool for managing database migrations across multiple environments",
      tech: ["Node.js", "PostgreSQL", "CLI"],
      github: "https://github.com/yourusername/db-migrator",
      demo: "https://migrator-demo.yourdomain.com",
      preview:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      icon: <Database className="w-8 h-8 text-pink-400" />,
    },
  ];

  const TabButton = ({
    tab,
    current,
    icon: Icon,
    children,
  }: {
    tab: Tab;
    current: Tab;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 sm:px-6 py-2 rounded-lg transition-colors ${
        tab === current
          ? "bg-cyan-900/30 border border-cyan-400/30 text-cyan-400"
          : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20"
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </button>
  );

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center">
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
                Specialized in building scalable backend solutions,
                microservices, and cloud architecture. Experienced in AWS and
                Azure cloud platforms.
              </p>
            </div>
          </div>
        </div>
        {/* Gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden bg-gray-900">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <TabButton tab="projects" current={activeTab} icon={Code2}>
              Projects
            </TabButton>
            <TabButton tab="bio" current={activeTab} icon={User}>
              Bio
            </TabButton>
            <TabButton tab="contact" current={activeTab} icon={Mail}>
              Contact
            </TabButton>
          </div>

          <div className="h-[calc(60vh-8rem)] overflow-auto">
            {activeTab === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-colors group animated-gradient"
                  >
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
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-2 text-sm">
                      {project.description}
                    </p>
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
                ))}
              </div>
            )}

            {activeTab === "bio" && (
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-cyan-400">
                      About Me
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    Backend Developer with more than 7 years of experience in
                    multi-platform web technologies, using JavaScript, Python,
                    and Java. Focused on delivering quality code and
                    performance, and migrating solution to serverless
                    architecture with AWS and Azure. Implement serverless
                    functions and propose transition to cloud solution oriented
                    resources. Enjoy performing onboarding and refinement tasks,
                    both in remote and on-site environments.
                  </p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                    <span className="text-sm">
                      Available for remote opportunities worldwide
                    </span>
                  </div>
                  <div className="mb-4">
                    <img
                      src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                      alt="AWS Certified Developer - Associate"
                      className="h-16 w-auto"
                    />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-cyan-400">
                      Skills & Expertise
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-purple-400 mb-2">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {["JavaScript/TypeScript", "Python", "Java"].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-purple-400 mb-2">
                        Technologies/Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {["Node.js", "Django"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-purple-400 mb-2">
                        Databases
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "PostgreSQL",
                          "SQL Server",
                          "MySQL server",
                          "Oracle",
                          "Couchbase",
                        ].map((db) => (
                          <span
                            key={db}
                            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {db}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-purple-400 mb-2">
                        Cloud & DevOps
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "AWS",
                          "Azure",
                          "Jenkins",
                          "CI/CD",
                          "Docker",
                          "AWS CodeDeploy",
                          "Lambda",
                          "Step functions",
                        ].map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-purple-400 mb-2">
                        Version Control & CI/CD
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {["Git", "GitHub Actions", "Gitlab"].map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:walter.fernandez@proton.me"
                    className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300 text-sm">
                      walter.fernandez@proton.me
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/walter-fernandez-sanchez-a3924354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300 text-sm">
                      LinkedIn Profile
                    </span>
                  </a>

                  <a
                    href="https://github.com/wfernandezs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300 text-sm">
                      GitHub Profile
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-gray-400 text-sm">
          Made with <span className="text-pink-400">♥</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Github, Terminal, Database, Code2, Server, Cpu, ExternalLink, User, Mail, Linkedin, MapPin, BookOpen } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  icon: React.ReactNode;
}

type Tab = 'projects' | 'bio' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  const projects: Project[] = [
    {
      title: "API Gateway Service",
      description: "High-performance API gateway built with Node.js, featuring rate limiting and request validation",
      tech: ["Node.js", "Express", "Redis"],
      github: "https://github.com/yourusername/api-gateway",
      icon: <Server className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Microservices Framework",
      description: "Lightweight microservices framework with service discovery and load balancing",
      tech: ["Node.js", "TypeScript", "Docker"],
      github: "https://github.com/yourusername/go-micro",
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Database Migration Tool",
      description: "CLI tool for managing database migrations across multiple environments",
      tech: ["Node.js", "PostgreSQL", "CLI"],
      github: "https://github.com/yourusername/db-migrator",
      icon: <Database className="w-8 h-8 text-pink-400" />
    }
  ];

  const TabButton = ({ tab, current, icon: Icon, children }: { tab: Tab; current: Tab; icon: React.ElementType; children: React.ReactNode }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 sm:px-6 py-3 rounded-lg transition-colors ${
        tab === current
          ? 'bg-cyan-900/30 border border-cyan-400/30 text-cyan-400'
          : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'bio':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-cyan-400">About Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Backend Developer with more than 7 years of experience in multi-platform web technologies, using JavaScript, Python, and Java. 
                Focused on delivering quality code and performance, and migrating solution to serverless architecture with AWS and Azure. 
                Implement serverless functions and propose transition to cloud solution oriented resources. 
                Enjoy performing onboarding and refinement tasks, both in remote and on-site environments.
              </p>
              <div className="flex items-center text-gray-400 mb-6">
                <MapPin className="w-5 h-5 mr-2 text-pink-400" />
                <span>Available for remote opportunities worldwide</span>
              </div>
              {/* AWS Badge */}
              <div className="mb-6">
                <img 
                  src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" 
                  alt="AWS Certified Developer - Associate"
                  className="h-24 w-auto"
                />
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-cyan-400">Skills & Expertise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript/TypeScript", "Python", "Java"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies/Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Django"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "SQL Server", "MySQL server", "Oracle", "Couchbase"].map((db) => (
                      <span key={db} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Cloud & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Azure", "Jenkins", "CI/CD", "Docker", "AWS CodeDeploy", "Lambda", "Step functions"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Version Control & CI/CD</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub Actions", "Gitlab"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Mail className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">your.email@example.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">LinkedIn Profile</span>
              </a>
              
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Github className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">GitHub Profile</span>
              </a>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-colors group"
              >
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="relative">
            <Terminal className="w-12 sm:w-16 h-12 sm:h-16 text-cyan-400 mb-6 sm:mb-8" />
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              WALTER FERNÁNDEZ
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">
              NODE.JS DEVELOPER
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              Specialized in building scalable backend solutions, microservices, and cloud architecture.
              Experienced in AWS and Azure cloud platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 mb-8 sm:mb-12">
          <TabButton tab="projects" current={activeTab} icon={Code2}>Projects</TabButton>
          <TabButton tab="bio" current={activeTab} icon={User}>Bio</TabButton>
          <TabButton tab="contact" current={activeTab} icon={Mail}>Contact</TabButton>
        </div>

        {/* Content Section */}
        <div className="py-8">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-gray-400">
          <p>Built with React & Tailwind CSS • Cyberpunk-inspired design</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
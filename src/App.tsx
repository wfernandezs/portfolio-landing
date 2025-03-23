import { useState } from "react";
import { Server } from "lucide-react";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Bio } from "./components/bio";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Project, Tab } from "./types";

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
    // Other projects...
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Hero />

      <div className="flex-1 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="space-y-6">
            {activeTab === "projects" && <Projects projects={projects} />}
            {activeTab === "bio" && <Bio />}
            {activeTab === "contact" && <Contact />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

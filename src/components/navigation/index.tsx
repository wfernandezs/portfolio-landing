import { Code2, User, Mail } from "lucide-react";
import { TabButton } from "./TabButton";
import { Tab } from "../../types";

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <TabButton
        tab="projects"
        current={activeTab}
        icon={Code2}
        onClick={setActiveTab}
      >
        Projects
      </TabButton>
      <TabButton
        tab="bio"
        current={activeTab}
        icon={User}
        onClick={setActiveTab}
      >
        Bio
      </TabButton>
      <TabButton
        tab="contact"
        current={activeTab}
        icon={Mail}
        onClick={setActiveTab}
      >
        Contact
      </TabButton>
    </div>
  );
};

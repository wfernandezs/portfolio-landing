import { Code2, User, Mail } from "lucide-react";
import { TabButton } from "./TabButton";
import { Tab } from "../../types";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex flex-wrap gap-2">
        <TabButton
          tab="projects"
          current={activeTab}
          icon={Code2}
          onClick={setActiveTab}
        >
          {t('projects')}
        </TabButton>
        <TabButton
          tab="bio"
          current={activeTab}
          icon={User}
          onClick={setActiveTab}
        >
          {t('bio')}
        </TabButton>
        <TabButton
          tab="contact"
          current={activeTab}
          icon={Mail}
          onClick={setActiveTab}
        >
          {t('contact')}
        </TabButton>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

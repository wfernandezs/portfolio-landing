import React from "react";
import { Tab } from "../../types";

interface TabButtonProps {
  tab: Tab;
  current: Tab;
  icon: React.ElementType;
  children: React.ReactNode;
  onClick: (tab: Tab) => void;
}

export const TabButton = ({
  tab,
  current,
  icon: Icon,
  children,
  onClick,
}: TabButtonProps) => (
  <button
    onClick={() => onClick(tab)}
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

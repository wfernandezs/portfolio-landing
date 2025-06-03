import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs rounded-md ${i18n.language === 'en' ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50' : 'text-gray-400 hover:text-gray-200'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 text-xs rounded-md ${i18n.language === 'es' ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50' : 'text-gray-400 hover:text-gray-200'}`}
      >
        ES
      </button>
    </div>
  );
};

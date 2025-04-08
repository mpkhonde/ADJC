import React from 'react';

interface Props {
  currentLanguage: string;
  onChange: (lang: string) => void;
}

const LanguageSelector: React.FC<Props> = ({ currentLanguage, onChange }) => {
  const languages = [
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-button ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => onChange(lang.code)}
        >
          <span>{lang.flag}</span> {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

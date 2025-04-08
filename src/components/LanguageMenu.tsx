import React, { useState } from 'react';

interface LanguageMenuProps {
  language: 'sv' | 'en' | 'fr';
  setLanguage: (lang: 'sv' | 'en' | 'fr') => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ language, setLanguage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const selectLanguage = (lang: 'sv' | 'en' | 'fr') => {
    setLanguage(lang);
    setShowMenu(false);
  };

  return (
    <div className="language-menu">
      <button onClick={toggleMenu} className="language-toggle">
        🌐 {language.toUpperCase()}
      </button>

      <div className={`language-options ${showMenu ? 'show' : ''}`}>
        <button
          onClick={() => selectLanguage('sv')}
          className={language === 'sv' ? 'active' : ''}
        >
          🇸🇪 Svenska
        </button>
        <button
          onClick={() => selectLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => selectLanguage('fr')}
          className={language === 'fr' ? 'active' : ''}
        >
          🇫🇷 Français
        </button>
      </div>
    </div>
  );
};

export default LanguageMenu;

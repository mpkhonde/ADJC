import { useEffect, useRef, useState } from 'react';
import './adjc.css';
import type { LanguageContent } from './types/translations';
import translations from './translations';

import LanguageMenu from './components/LanguageMenu';
import Welcome from './components/Welcome';
import Contact from './components/Contact.tsx'; // Viktigt: rätt path

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'sv' | 'en' | 'fr'>('sv');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const t: LanguageContent = translations[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* === HEADER === */}
      <header>
        <LanguageMenu language={language} setLanguage={setLanguage} />

        {/* Hamburger-knapp */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* === NAVIGATION === */}
        <nav className={`navbar ${menuOpen ? 'open' : ''}`} ref={navRef}>
          <button className="close-menu" onClick={() => setMenuOpen(false)}>✕</button>
          <ul className="nav-links">
            <li>
              <button onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>
                {t.home}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>
                {t.about}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className={activeSection === 'services' ? 'active' : ''}>
                {t.services}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('events')} className={activeSection === 'events' ? 'active' : ''}>
                {t.events}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>
                {t.contact}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* === MAIN === */}
      <main>
        {activeSection === 'home' && <Welcome text={t.welcomeText} />}

        {activeSection === 'about' && (
          <section>
            <h2>{t.about}</h2>
            <p>{t.aboutText}</p>
          </section>
        )}

        {activeSection === 'services' && (
          <section>
            <h2>{t.services}</h2>
            <ul>
              {t.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {activeSection === 'events' && (
          <section>
            <h2>{t.events}</h2>
            <p>{t.eventsText}</p>
          </section>
        )}

        {/* ✅ NU skickar vi med översättning till Contact */}
        {activeSection === 'contact' && <Contact t={t} />}
      </main>

      {/* === FOOTER === */}
      <footer>
        © 2025 ADJC Kyrkan – Alla rättigheter förbehållna.
      </footer>
    </>
  );
}

export default App;

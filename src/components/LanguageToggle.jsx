import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage} 
      className="language-toggle"
      aria-label="Mudar idioma"
    >
      <span className={language === 'pt-BR' ? 'active' : ''}>PT</span>
      <span className="separator">|</span>
      <span className={language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
}

export default LanguageToggle;

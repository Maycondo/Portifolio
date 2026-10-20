/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import ThemeToggle from '../Buttons/useThemeToggle';
import './style.css';

export default function NavAnimation({
  language,
  navtexts = [],
  CorStyle = () => ({ color: 'black' }),
  handleLanguageChange = () => {},
  handleThemeChange = () => {},
  onClose,
}) {
  // Padroniza o idioma recebido
  const langFormatted = String(language || 'PT')
    .trim()
    .toUpperCase();

  // IDs correspondentes às seções do portfólio
  const sectionIds = {
    PT: ['inicio', 'sobre', 'projetos', 'contatos'],
    EN: ['home', 'about', 'projects', 'contacts'],
  };

  // Usa PT como padrão caso o idioma seja inválido
  const currentSectionIds =
    sectionIds[langFormatted] || sectionIds.PT;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '-100%' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="Nav_animation-wrapper"
    >
      <div className="Nav_animetion">
        <nav aria-label="Navegação principal">
          <ul>
            {navtexts.map((item, index) => {
              const sectionId = currentSectionIds[index];

              if (!sectionId) return null;

              return (
                <li key={sectionId}>
                  <a
                    href={`#${sectionId}`}
                    onClick={() => {
                      onClose?.();
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ThemeToggle
          theme={undefined}
          onThemeChange={handleThemeChange}
        />

        <div className="lingua">
          <button
            type="button"
            className="lingua__button"
            style={CorStyle('PT')}
            aria-pressed={langFormatted === 'PT'}
            onClick={() => handleLanguageChange('PT')}
          >
            PT
          </button>

          <button
            type="button"
            className="lingua__button"
            style={CorStyle('EN')}
            aria-pressed={langFormatted === 'EN'}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </button>
        </div>
      </div>
    </motion.div>
  );
}

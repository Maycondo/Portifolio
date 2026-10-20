
import { useState, useEffect } from 'react';

// Componentes principais
import Main from './components/Main/index.jsx';
import Footer from './components/Footer/index.jsx';
import Loader from './components/Loader/index.jsx';
import PainelAdmin from './components/PainelAmind/PainelAmind.jsx';

// Animações e botões
import BlurText from './hooks/AnimationText/BlurText.jsx';
import ButtonLow from './hooks/Low/index.jsx';

// Hooks personalizados
import ThemeToggle from './hooks/Buttons/useThemeToggle.jsx';
import ButtonToggle from './hooks/Buttons/useNavButtonToggle.jsx';
import LanguageSwitch from './hooks/useLanguageSwitch.jsx';

// Identidade do portfólio
const PORTFOLIO_NAME = 'Maycon {}';
const PORTFOLIO_TITLE = 'Portfólio';

// IDs das seções conforme o idioma
const SECTION_IDS = {
  PT: ['inicio', 'sobre', 'projetos', 'contatos'],
  EN: ['home', 'about', 'projects', 'contacts'],
};

// Controla o tempo de carregamento
const useLoader = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

export default function Home() {
  const { texts, navtexts, setLinguagem } = LanguageSwitch();

  const [selectedLanguage, setSelectedLanguage] = useState('PT');

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'ModeDark';
    }

    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : 'ModeDark';
    } catch {
      return 'ModeDark';
    }
  });

  const loading = useLoader(2000);

  // Padroniza o idioma selecionado
  const langFormatted = String(selectedLanguage)
    .trim()
    .toUpperCase() === 'EN'
      ? 'EN'
      : 'PT';

  // Seleciona os IDs conforme o idioma
  const sectionIds = SECTION_IDS[langFormatted];

  // Troca o idioma
  const handleLanguageChange = (language) => {
    const normalizedLanguage =
      String(language).trim().toUpperCase() === 'EN'
        ? 'EN'
        : 'PT';

    setLinguagem(normalizedLanguage);
    setSelectedLanguage(normalizedLanguage);
  };

  // Troca o tema
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // Estilo dos botões de idioma
  const CorStyle = (language) => {
    const isSelected =
      String(language).trim().toUpperCase() === langFormatted;

    if (!isSelected) {
      return { color: '#a3a3a3' };
    }

    return {
      color: theme === 'ModeLight' ? 'black' : 'white',
    };
  };

  // Aplica o tema
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // Exibe o carregamento inicial
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <header
        className="App-header"
        id={sectionIds[0]}
      >
        <section className="Barra_top">
          <h1 id="Name">{PORTFOLIO_NAME}</h1>

          <div className="Container-Buttons">
            <ThemeToggle
              theme={theme}
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

            <ButtonToggle
              language={langFormatted}
              navtexts={navtexts}
              CorStyle={CorStyle}
              handleLanguageChange={handleLanguageChange}
              handleThemeChange={handleThemeChange}
            />
          </div>
        </section>

        <nav aria-label="Navegação principal">
          <ul className="Narve">
            {navtexts.map((item, index) => {
              const sectionId = sectionIds[index];

              if (!sectionId) return null;

              return (
                <li key={sectionId}>
                  <a href={`#${sectionId}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="Painel-1">
          <div className="Container-Title">
            <BlurText
              className="Portfólio"
              text={PORTFOLIO_TITLE}
              delay={200}
              animateBy="words"
              direction="top"
            />

            <div className="Container-Text">
              <ButtonLow />
            </div>
          </div>
        </section>

        <PainelAdmin
          texts={texts}
          handleLanguageChange={handleLanguageChange}
        />
      </header>

      <Main
        texts={texts}
        navtexts={navtexts}
        language={langFormatted}
      />

      <Footer
        texts={texts}
        language={langFormatted}
      />
    </>
  );
}

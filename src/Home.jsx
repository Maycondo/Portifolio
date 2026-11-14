
import { useState, useEffect } from 'react';

// Componentes principais
import Main from './components/Main/Main.jsx';
import WhathouldIdo from './components/Cards/WhathouldIdo.jsx'
import EducationCourses from './components/Cards/EducationCourses.jsx';
import ProjectWorked from './components/Projetcs/ProjectWorked.jsx';
import DidyouLike from './components/Cards/Didyoulike.jsx';
import ContactFomr from './components/Contact/ContactForm.jsx';



// Animações e botões
import TechMarquee from './hooks/AnimationText/TechMarquee.jsx'
import BlurText from './hooks/AnimationText/BlurText.jsx';
import ButtonLow from './hooks/Low/index.jsx';

// Hooks personalizados
import ThemeToggle from './hooks/Buttons/useThemeToggle.jsx';
import ButtonToggle from './hooks/Buttons/useNavButtonToggle.jsx';
import LanguageSwitch from './hooks/useLanguageSwitch.jsx';
import ImageProfessional from './imagens/ImageProfessional.jpg'

import { AiFillFilePdf } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

// IDs das seções conforme o idioma
const SECTION_IDS = {
  PT: ['inicio', 'sobre', 'projetos', 'contatos'],
  EN: ['home', 'about', 'projects', 'contacts'],
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

          return savedTheme
              ? JSON.parse(savedTheme)
              : 'ModeDark';

      } catch {
          return 'ModeDark';
      }
  });



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
    document.body.classList.remove('ModeLight', 'ModeDark');

    document.body.classList.add(theme);

    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);


  return (
    <>
      <header className="App-header" id={sectionIds[0]} >
        <section className="Top-bar-icons">
          <h1 id="Portfólio-name">Portfólio</h1>  
          <div className="Container-Buttons">
            <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
            <div className="lingua">
              <button type="button" className="lingua__button" style={CorStyle('PT')} aria-pressed={langFormatted === 'PT'} 
              onClick={() => handleLanguageChange('PT')} >
                PT
              </button>
              <button type="button" className="lingua__button" style={CorStyle('EN')} aria-pressed={langFormatted === 'EN'} 
              onClick={() => handleLanguageChange('EN')} >
                EN
              </button>
            </div>
            <ButtonToggle language={langFormatted} navtexts={navtexts} CorStyle={CorStyle} handleLanguageChange={handleLanguageChange} handleThemeChange={handleThemeChange} />
          </div>
        </section>

        <nav aria-label="Project-main-navigation">
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

          <section className="Contains-mai-photo">
            <div className="Container-Title">
              <div className="Hero-Content">
                <span className="Hero-Available">
                  <span></span>
                  {langFormatted === 'PT' ? 'DISPONÍVEL PARA NOVOS PROJETOS' : 'AVAILABLE FOR NEW PROJECTS'}
                </span>
                <BlurText className="Portfólio" text="Maycon Douglas" delay={200} animateBy="words" direction="top" />
                <span className="Hero-Profession">
                  {langFormatted === 'PT' ? 'DESENVOLVEDOR FULL STACK · REACT · NODE.JS · PYTHON · JAVA' : 'FULL STACK DEVELOPER · REACT · NODE.JS · PYTHON · JAVA'}
                </span>
                <p className="Hero-Description">
                  {langFormatted === 'PT' ? 'Olá, sou Maycon. Desenvolvedor Full Stack, apaixonado por tecnologia e pela criação de aplicações web modernas,responsivas e eficientes. Transformo ideias em soluções digitais.' 
                  : 'Hello, I’m Maycon. A Full Stack developer with a passion for technology and for creating modern, responsive, and efficient web applications. I turn ideas into digital solutions.'}
                </p>  
                  <div className='Buttons-resume-projects'>
                      <a href={`#${sectionIds[2]}`} id="View-projects">{langFormatted === "PT" ? 'Ver projetos' : 'View projects'} <AiOutlineArrowRight/></a>
                      <a href="https://drive.google.com/file/u/1/d/1mcFLNN-5YQ8NDK09nTY7xV8lXwlya2uy/view?usp=drive_open" target='_blank' id="download-resume"><AiFillFilePdf/>{langFormatted === "PT" ? 'Baixar curriculo' : 'Download resume'} </a>
                  </div>
                {/* MANTENDO SEU COMPONENTE ORIGINAL */}
                    <div className="Hero-Stats">
                      <div>
                        <strong>4+</strong>
                        <span>{langFormatted === "PT" ? 'anos de experiência' : 'years of experience'}</span>
                      </div>
                      <div>
                        <strong>Full Stack</strong>
                        <span>{langFormatted === "PT" ? 'desenvolvimento' : 'development'}</span>
                      </div>
                      <div>
                        <strong>React</strong>
                        <span>{langFormatted === "PT" ? 'tecnologia principal' : 'core technology'}</span>
                      </div>
                    </div>
                  </div>
            {/* IMAGEM */}    
            <div className="Hero-Image-Container">
              <div className="Hero-Image-Frame"></div>
              <img src={ImageProfessional} alt="Maycon Douglas" className="Hero-Image" />
              <div className="Hero-Image-Badge">
                <strong>Full Stack Developer</strong>
                <span>React · Node.js · Python · Java</span>
              </div>
            </div>
            
          </div>
        </section>  
            <div className="Container-Text">
               <ButtonLow />
            </div>
      </header>
        <TechMarquee/>
        <Main texts={texts} navtexts={navtexts} language={langFormatted} />
        <WhathouldIdo language={langFormatted} />
        <EducationCourses language={langFormatted} />
        <ProjectWorked language={langFormatted} />
        <DidyouLike language={langFormatted}/>
        <ContactFomr language={langFormatted}/>
    </>
  );
}

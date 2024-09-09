import { useState, useEffect } from 'react';
import Main from './components/Main/index.jsx';
import Footer from './components/Footer/index.jsx';
import Loader from './components/Loader/index.jsx';
import Imagem from "./imagens/Imagem.png";
import ButtonLow from './hooks/Low/index.jsx';
import TextAnimation from './hooks/ AnimationText/useTextAnimation.jsx';
import ThemeToggle from './hooks/Buttons/useThemeToggle.jsx';
import ButtonToggle from './hooks/Buttons/useNavButtonToggle.jsx';
import LanguageSwitch from './hooks/useLanguageSwitch.jsx';
import UseWindowSize from './hooks/Buttons/useWindowSize.jsx';


export default function Home() {

const { texts,  navtexts, setLinguagem } = LanguageSwitch();
const [selectedLanguage, setSelectedLanguage] = useState('PT');
const [theme, setTheme] = useState('ModeLight');
const [loading, setLoading] = useState(true);

useEffect(() => {   
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

const handleLanguageChange = (linguagem) => {
    setLinguagem(linguagem);
    setSelectedLanguage(linguagem);
};
const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
};          
const CorStyle = (linguagem) => {
    return linguagem === selectedLanguage
      ? theme === 'ModeLight'
        ? { color: 'black' }
        : { color: 'white' }
      : { color: '#a3a3a3' };
};

if (loading) {
    return <Loader />;
  } 

return (    
    <>
      <header className="App-header">
            <section className="Top-barra">
                    <h1 id="Portifolio">Portfólio</h1>
                <div className='div_buttons'>
                    <ThemeToggle onThemeChange={handleThemeChange}/>
                        <div className="lingua">
                            <button 
                            className="lingua__button" 
                            style={CorStyle('PT')} 
                            onClick={() => handleLanguageChange('PT')}>PT</button>
                            <button 
                            className="lingua__button"    
                            style={CorStyle('EN')} 
                            onClick={() => handleLanguageChange('EN')}>EN</button>
                        </div>
                    <ButtonToggle></ButtonToggle>
                </div>
             </section> 
                    <div className='semAnimetionNav' id='Animetion_off'>
                        <UseWindowSize
                            navtexts={navtexts} 
                            CorStyle={CorStyle} 
                            handleLanguageChange={handleLanguageChange} 
                            handleThemeChange={handleThemeChange}>
                        </UseWindowSize>
                    </div>
                    <nav> 
                        <ul className="Narve">{navtexts.map((item, index) => (<a href="" key={index}>{item}</a>))}</ul>
                    </nav>
             <section className="Painel-1">

                <div className="Discrição-Perso">
                        <TextAnimation></TextAnimation>
                        <h5 id="Email">maycondouglasniculau@gmail.com</h5>
                        <h1 id="Founder">Founder</h1>
                    <p id="Pequeno-Texto">{texts['text_peque']}</p> 
                    <div className="Social-Midias">
                        <a href="https://www.linkedin.com/in/maycon-douglas-b97786306/" target="_blank"><i className="bi bi-linkedin"></i>Linkedin</a>
                        <a href="https://github.com/Maycondo" target="_blank"><i className="bi bi-git"></i>Github</a>
                        <a href=""><i className="bi bi-file-text-fill"></i>Curriculo</a>
                    </div>
                        <ButtonLow></ButtonLow>
                </div>
                <div className="Imagem-Perso">
                        <img id="Imagem-User" src={Imagem}alt="Imagem-Perso"/>
                </div>

             </section>
     </header>
        <Main 
            texts={texts} 
            navtexts={navtexts}>
        </Main>
        <Footer texts={texts} ></Footer>
    </>
)}

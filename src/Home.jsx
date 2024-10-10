import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

// Função para controlar o delay do Loader
const useLoader = (delay) => {
    const [loading, setLoading] = useState(true); // Controla o estado de carregamento (loading)
    
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), delay); // Define um tempo de espera para o Loader
      return () => clearTimeout(timer); // Limpeza do timeout ao desmontar o componente
    }, [delay]);
  
    return loading; // Retorna o estado de loading
};


const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const divVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
};

const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


const linkVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
};
     

export default function Home() {

    const { texts, navtexts, setLinguagem } = LanguageSwitch(); // Hook para troca de linguagem
    const [selectedLanguage, setSelectedLanguage] = useState('PT'); // Estado da linguagem selecionada
    const sectionId = selectedLanguage === "PT" ? 'inicio' : 'home'; // Determina o ID da seção com base na linguagem
    const [theme, setTheme] = useState('ModeLight');  // Estado do tema (claro ou escuro)
    const loading = useLoader(4000); // Utiliza o hook de carregamento com delay de 4000ms


    // Função para trocar a linguagem
    const handleLanguageChange = (linguagem) => {
        setLinguagem(linguagem); // Atualiza a linguagem no hook personalizado
        setSelectedLanguage(linguagem); // Atualiza o estado local da linguagem
    };

    // Função para trocar o tema
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme); // Atualiza o tema
    };

    // Função para estilizar o botão de linguagem
    const CorStyle = (linguagem) => {
        return linguagem === selectedLanguage
        ? theme === 'ModeLight'
            ? { color: 'black' } // Cor preta para o tema claro
            : { color: 'white' } // Cor branca para o tema escuro
        : { color: '#a3a3a3' }; // Cor cinza para linguagens não selecionadas
    };

    // Exibe o loader enquanto o estado `loading` for `true`
    if (loading) {
        return <Loader />;
    } 
    
    return (    
        <>
        <header className="App-header" id={sectionId} >
                <section className="Top-barra" >
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5, ease: "easeOut" }}>
                        <h1 id="Portifolio">Portfólio</h1>
                </motion.div>
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
                            <ul className="Narve">
                                {navtexts.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                                </li>
                                ))}
                            </ul>
                        </nav>
                <section className="Painel-1">

                    <div className="Discrição-Perso">
                            <TextAnimation></TextAnimation>
                        <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ duration: 0.8, ease: "easeInOut" }}>
                            <h5 id="Email">maycondouglasniculau@gmail.com</h5>
                            <h1 id="Founder">Description</h1>
                        <p id="Pequeno-Texto">{texts['text_peque']}</p> 
                        </motion.div>
                        <div className="Social-Midias">
                            <motion.a 
                                href="https://www.linkedin.com/in/maycon-douglas-b97786306/" 
                                target="_blank"
                                initial="hidden"
                                animate="visible"
                                variants={linkVariants}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <i className="bi bi-linkedin"></i>Linkedin
                            </motion.a>
                            
                            <motion.a 
                                href="https://github.com/Maycondo" 
                                target="_blank"
                                initial="hidden"
                                animate="visible"
                                variants={linkVariants}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <i className="bi bi-git"></i>Github
                            </motion.a>
                        
                            <motion.a 
                                href="#"
                                initial="hidden"
                                animate="visible"
                                variants={linkVariants}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <i className="bi bi-file-text-fill"></i>Curriculo
                            </motion.a>
                        </div>
                            <ButtonLow></ButtonLow>
                    </div>
                    <div className="Imagem-Perso">
                        <motion.div initial="hidden" animate="visible" variants={divVariants} transition={{ duration: 0.8, ease: "easeInOut" }}className="rounded-full">
                            <img id="Imagem-User" src={Imagem} alt="Imagem_Perso"/>
                        </motion.div>
                    </div>

                </section>
        </header>
            <Main 
                texts={texts} 
                navtexts={navtexts}
                handleLanguageChange={selectedLanguage}
                >
            </Main>
            <Footer texts={texts} handleLanguageChange={selectedLanguage} ></Footer>
        </>
    )}

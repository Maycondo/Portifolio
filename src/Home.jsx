import { useState, useEffect, } from 'react';


// Importando os componentes necessários
import Main from './components/Main/index.jsx';
import Footer from './components/Footer/index.jsx';
import Loader from './components/Loader/index.jsx';
import PainelAdmin from './components/PainelAmind/PainelAmind.jsx';
import BlurText from './hooks/ AnimationText/BlurText.jsx';
import ButtonLow from './hooks/Low/index.jsx';

// Importando os hooks personalizados para troca de tema e linguagem
import ThemeToggle from './hooks/Buttons/useThemeToggle.jsx';
import ButtonToggle from './hooks/Buttons/useNavButtonToggle.jsx';
import LanguageSwitch from './hooks/useLanguageSwitch.jsx';


// Função para controlar o delay do Loader
const useLoader = (delay) => {
    const [loading, setLoading] = useState(true); // Controla o estado de carregamento (loading)
    
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), delay); // Define um tempo de espera para o Loader
      return () => clearTimeout(timer); // Limpeza do timeout ao desmontar o componente
    }, [delay]);
  
    return loading; // Retorna o estado de loading
};



const PORTFOLIO_NAME = "Michael {}"; // Nome do portfólio, pode ser alterado conforme necessário
const PORTFOLIO_TITLE = "Portfólio"; // Nome do portfólio, pode ser alterado


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Home() {

    const { texts, navtexts, setLinguagem } = LanguageSwitch(); // Hook para troca de linguagem
    const [selectedLanguage, setSelectedLanguage] = useState('PT'); // Estado da linguagem selecionada
    const sectionId = selectedLanguage === "PT" ? 'inicio' : 'home'; // Determina o ID da seção com base na linguagem
    const loading = useLoader(2000); // Utiliza o hook de carregamento com delay de 2000ms
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : 'ModeDark';
    });  // Estado do tema (claro ou escuro)

    
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
        return linguagem === 
        selectedLanguage ? theme === 'ModeLight' 
            ? { color: 'black' } 
            : { color: 'white' } 
        : { color: '#a3a3a3' };
     };

     useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    // Exibe o loader enquanto o estado `loading` for `true`
    if (loading) {
        return <Loader />;
    } 
    
    return (    
        <>
        <header className="App-header" id={sectionId} >
                <section className="Barra_top" >
                        <h1 id="Name">{PORTFOLIO_NAME}</h1>                      
                    <div className='Container-Buttons'>
                        <ThemeToggle theme={theme} onThemeChange={ handleThemeChange }/>
                            <div className="lingua">
                                <button  className="lingua__button"  style={CorStyle('PT')}  onClick={() => handleLanguageChange('PT')}>PT</button>
                                <button  className="lingua__button"  style={CorStyle('EN')}  onClick={() => handleLanguageChange('EN')}>EN</button>
                            </div>
                        <ButtonToggle navtexts={navtexts}  CorStyle={CorStyle}  handleLanguageChange={handleLanguageChange}  handleThemeChange={handleThemeChange}></ButtonToggle>
                    </div>
                </section> 
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
                    <div className="Container-Title">
                        <BlurText className="Portfólio" text={PORTFOLIO_TITLE} delay={200} animateBy="words" direction="top" onAnimationComplete={handleAnimationComplete}></BlurText> 
                        <div className="Container-Text">
                            <ButtonLow></ButtonLow>
                        </div>
                    </div>
                </section>
                <PainelAdmin texts={texts} handleLanguageChange={handleLanguageChange} ></PainelAdmin>
        </header>
            <Main  texts={texts}  navtexts={navtexts} language={selectedLanguage} ></Main>
            <Footer texts={texts} language={selectedLanguage} ></Footer>
        </>
    )}
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import UseWindowSize from "./useWindowSize";
import './style.css';

export default function ButtonToggle({ navtexts = [], CorStyle = () => ({ color: "black" }), handleLanguageChange, handleThemeChange }) {

    const [showNav, setShowNav] = useState(false); // Controla a visibilidade da barra de navegação
    const [showFirstDiv, setShowFirstDiv] = useState(false); // Controla o estado da animação do botão (os "traços")
    const [navAnimation, setNavAnimation] = useState(false)


    useEffect(() => {
        const traço1 = document.getElementById('Traço-1');
        const traço2 = document.getElementById('Traço-2');

        if (showFirstDiv) {
            traço1.style.transform = 'rotate(50deg) translate(5px, 5px)';
            traço2.style.transform = 'rotate(-47deg) translate(5px, -5px)';
        } else {
            traço1.style.transform = 'rotate(0) translate(0, 0)';
            traço2.style.transform = 'rotate(0) translate(0, 0)';
            
        }
    }, [showFirstDiv]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const reciarNav = () => {
        if (!showNav && showFirstDiv )  {
            setShowFirstDiv(false); // Fecha o botão de navegação se a navegação estiver oculta
        }
    };

    const handleClick = () => {
        setShowFirstDiv(prev => !prev); // Alterna o estado de animação do botão (abre/fecha)
    };

    const toggleNav = () => {
        setNavAnimation(!navAnimation);
    };
        
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNav(true); // Exibe a navegação ao rolar mais de 100px
                reciarNav(); // Restaura a animação do botão
            } else {
                setShowNav(false); // Oculta a navegação quando a rolagem é menor que 100px
                reciarNav();
                setNavAnimation(false)
            }
        };
        window.addEventListener('scroll', handleScroll); // Adiciona o listener de scroll
    
        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpa o listener de scroll ao desmontar
        };
    }, [reciarNav, showFirstDiv, showNav]);
    


    return (
        <>
            <div className={showNav ? 'nav-show' : 'nav-hide'}>
                <button onClick={() => { handleClick(); toggleNav(); } } style={{ border: 'none', background: 'none', padding: 0 }}>
                    <div id="Traço-1" style={{
                        width: '60px',
                        height: '13px',
                        margin: '2px 0',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease',
                    }}>
                    </div>
                    <div id="Traço-2" style={{
                        width: '60px',
                        height: '13px',
                        margin: '2px 0',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease',
                    }}>
                    </div>
                </button>
            </div>

            { navAnimation &&
            <UseWindowSize navtexts={navtexts}  CorStyle={CorStyle}  handleLanguageChange={handleLanguageChange}  handleThemeChange={handleThemeChange}>            </UseWindowSize> } 

        </>
    );
}

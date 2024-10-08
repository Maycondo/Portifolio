import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import useWindowSize from "./useWindowSize";
import './style.css';

export default function ButtonToggle() {

    const [showNav, setShowNav] = useState(false); // Controla a visibilidade da barra de navegação
    const [showFirstDiv, setShowFirstDiv] = useState(false); // Controla o estado da animação do botão (os "traços")
    const [animetion, setAnimetion] = useState('semAnimetionNav'); // Controla a classe de animação para a navegação

    
    
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
        if (!showNav && showFirstDiv) {
            setShowFirstDiv(false); // Fecha o botão de navegação se a navegação estiver oculta
        }
    };

    const handleClick = () => {
        setShowFirstDiv(prev => !prev); // Alterna o estado de animação do botão (abre/fecha)
        setAnimetion(prevAnimetion => {
            const NewAnimetion = prevAnimetion === 'semAnimetionNav' ? 'AnimetionNav' : 'semAnimetionNav';
            return NewAnimetion; // Alterna a classe de animação da navegação
        });
    };
    

    useEffect(() => {
        const animetindiv = document.getElementById('Animetion_off');
        if (animetindiv) {
            animetindiv.classList.remove('semAnimetionNav', 'AnimetionNav');
            animetindiv.classList.add(animetion); // Adiciona a classe de animação adequada
        }
    }, [animetion]);
    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNav(true); // Exibe a navegação ao rolar mais de 100px
                reciarNav(); // Restaura a animação do botão
            } else {
                setShowNav(false); // Oculta a navegação quando a rolagem é menor que 100px
                setAnimetion('semAnimetionNav'); // Reseta a animação
                reciarNav();
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
                <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
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
        </>
    );
}

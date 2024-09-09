import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import './style.css';

export default function ButtonToggle() {

    const [showNav, setShowNav] = useState(false);
    const [showFirstDiv, setShowFirstDiv] = useState(false);
    const [animetion, setAnimetion] = useState('semAnimetionNav');
    
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

    const reciarNav = () => {
        if (!showNav && showFirstDiv) {
            setShowFirstDiv(false);
        }
    };

    const handleClick = () => {
        setShowFirstDiv(prev => !prev);
        setAnimetion(prevAnimetion => {
            const NewAnimetion = prevAnimetion === 'semAnimetionNav' ? 'AnimetionNav' : 'semAnimetionNav';
            return NewAnimetion;
        });
    };

    useEffect(() => {
        const animetindiv = document.getElementById('Animetion_off');
        if (animetindiv) {
            animetindiv.classList.remove('semAnimetionNav', 'AnimetionNav');
            animetindiv.classList.add(animetion);
        }
    }, [animetion]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNav(true);
                reciarNav();
            } else {
                setShowNav(false);
                setAnimetion('semAnimetionNav')
                reciarNav();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showFirstDiv, showNav]);

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

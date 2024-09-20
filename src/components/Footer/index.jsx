/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ButtonTop from '../../hooks/Top/index.jsx'
import './style.css'


export default function Footer( {texts, handleLanguageChange} ){
    const sectionId = handleLanguageChange === "PT" ? 'contatos' : 'contacts';
    const [getyear, setGetyear] = useState(0);

    useEffect(() => {
        const currentyear = new Date().getFullYear();
        setGetyear(currentyear);
    }, []);


    return (
        <>
            <footer className="footer" id={sectionId}>
                <div className="footer_pai">
                    <section id="footer-1">
                        <p>© {getyear}</p>
                    <article id="But-div">
                        <p>{texts['text_footer_button']}</p>
                        <ButtonTop></ButtonTop>
                    </article>
                    </section>

                    <div className="footer-central">
                        <p>{texts['text_footer']}</p>
                        <div className="text-container">
                            <span className="lets">LET'S</span>
                            <span className="talk">TALK</span>
                        </div>
                    </div>

                    <section id="footer-2">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text"><a href="https://wa.me/5582988172684" target="_blank" aria-label="Enviar mensagem via WhatsApp">WHATSAPP</a></span>
                        </button>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text"><a href="https://www.instagram.com/maycon_d2003/" target="_blank" aria-label="Visitar Instagram">INSTAGRAM</a></span>
                        </button>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text"><a href="mailto:maycondouglasniculau@gmail.com" aria-label="Enviar email">EMAIL</a>
                            </span>
                        </button>
                        
                </section>

                </div>

            </footer>
        </>
    )
}
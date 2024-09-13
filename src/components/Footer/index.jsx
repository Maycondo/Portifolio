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
                        <h1>LET'S TALK</h1>
                    </div>

                    <section id="footer-2">
                        <a href="">WHATSAPP</a>
                        <a href="">INSTAGRAM</a>
                        <a href="">EMAIL</a>
                    </section>
                </div>

            </footer>
        </>
    )
}
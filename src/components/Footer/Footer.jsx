
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SchoolReveal from '../../hooks/ScrollReveal/ScrollReveal'
import ButtonTop from '../../hooks/Top/index'

import './style.css';

export default function Footer({ language = 'PT' }) {
    const sectionId = language === 'PT' ? 'contatos' : 'contacts';

    const [getyear, setGetyear] = useState(0);

    useEffect(() => {
        setGetyear(new Date().getFullYear());
    }, []);

    const questions = language === 'PT'
        ? [
            {
                question: 'Quanto tempo leva um projeto?',
                answer: 'Sites institucionais levam de 3 a 6 semanas, dependendo do escopo.'
            },
            {
                question: 'Você atende fora de Alagoas?',
                answer: 'Sim, trabalho de forma remota com clientes em todo o Brasil.'
            },
            {
                question: 'Como funciona o pagamento?',
                answer: '50% no início e 50% na entrega, com contrato assinado.'
            }
        ]
        : [
            {
                question: 'How long does a project take?',
                answer: 'Institutional websites take 3 to 6 weeks, depending on the scope.'
            },
            {
                question: 'Do you work outside Alagoas?',
                answer: 'Yes, I work remotely with clients throughout Brazil.'
            },
            {
                question: 'How does payment work?',
                answer: '50% upfront and 50% upon delivery, with a signed contract.'
            }
        ];

    return (
        <footer className="footer" id={sectionId}>
            <SchoolReveal>
            <div className="container-button-top">
               <ButtonTop></ButtonTop>
            </div>
            <section className="conteiner-man-footer">
                <div className='conteiner-main-text'>
                <div className="footer-faq">
                    <div className="footer-conteiner-text">
                        <h2>
                            {language === 'PT' ? <>Perguntas<br/>frequentes</> : <>Frequently<br />asked questions</>
                            }
                        </h2>
                    </div>
                    <div className="footer-faq-content">
                        {questions.map((item, index) => (
                            <article className="footer-faq-item" key={index}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <section className="footer-bottom" id="footer-1">
                    <p>© {getyear} {language === 'PT' ? 'Todo direito reservado para Maycon Douglas.' : 'All rights reserved to Maycon Douglas.'}</p>
                    <article id="But-div">
                    </article>
                </section>
                </div>
            </section>
            </SchoolReveal>
        </footer>
    );
}

Footer.propTypes = {
    language: PropTypes.string
};

/* eslint-disable react/prop-types */
import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';;

import ScrollReveal from '../../hooks/ScrollReveal/ScrollReveal.jsx';

import './Main.css';

import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaFileAlt
} from 'react-icons/fa';

import {
    FiBriefcase,
    FiGitBranch,
    FiCpu,
    FiAward
} from 'react-icons/fi';

// Componente para animar os números

function AnimatedCounter({ value, suffix = '' }) {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    // Começa quando o elemento se aproxima da tela
    const isInView = useInView(counterRef, {
        once: true,
        amount: 0.5,
        margin: '0px 0px 100px 0px'
    });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: 'easeOut',
            onUpdate: (latest) => {
                setCount(Math.round(latest));
            }
        });

        return () => controls.stop();

    }, [isInView, value]);

    return (
        <span ref={counterRef}>
            {count}{suffix}
        </span>
    );
}


export default function Main({ texts, language }) {

    const sectionId = language === 'PT' ? 'sobre' : 'about';

    const [textVariant, setTextVariant] = useState({
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    });

    useEffect(() => {
        const isSmallMobile = window.innerWidth <= 480;

        setTextVariant({
            hidden: {
                opacity: 0,
                y: isSmallMobile ? 10 : 30
            },
            visible: {
                opacity: 1,
                y: 0
            }
        });
    }, []);

    return (
        <main className="Main" id={sectionId}>
            {/* SOBRE MIM */}
            <ScrollReveal>
                <section className="About-Hero">
                    <div className="Hero-Content-about">
                        <span className="Hero-Label-about">
                            02 — {language === 'PT' ? 'SOBRE MIM' : 'ABOUT ME'}
                        </span>
                        <motion.h1 initial="hidden" animate="visible" variants={textVariant} transition={{ duration: 0.8, ease: 'easeOut' }}>
                            {language === 'PT' ? 'Desenvolvedor que transforma ideias em soluções digitais.' : 'Developer turning ideas into digital solutions.' }
                        </motion.h1>
                        <p className="Hero-Description-about">
                            {texts['about']}
                        </p>
                        {/* REDES SOCIAIS */}
                        <div className="icone-redes-midias">
                            <a href="https://github.com/Maycondo" target="_blank" rel="noreferrer" aria-label="GitHub" >
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/maycon-douglas-b97786306/" target="_blank" rel="noreferrer" aria-label="LinkedIn" >
                                <FaLinkedinIn />
                            </a>
                            <a href="mailto:SEU_EMAIL" aria-label="E-mail" >
                                <FaEnvelope />
                            </a>
                            <a href="/curriculo.pdf" target="_blank" rel="noreferrer" aria-label="Currículo" >
                                <FaFileAlt />
                            </a>
                        </div>

                        {/* ESTATÍSTICAS */}
                        <div className="Hero-Stats-about">
                            <div>
                                <FiBriefcase className="Stats-Icon-about" />
                                <strong>
                                    <AnimatedCounter value={4} suffix="+" />
                                </strong>
                                <span>
                                    {language === 'PT' ? 'anos de experiência' : 'years of experience'}
                                </span>
                            </div>
                            <div>
                                <FiGitBranch className="Stats-Icon-about" />
                                <strong><AnimatedCounter value={10} suffix="+" /></strong>
                                <span>{language === 'PT' ? 'projetos' : 'projects'}</span>
                            </div>
                            <div>
                                <FiCpu className="Stats-Icon-about" />
                                <strong><AnimatedCounter value={8} suffix="+" /></strong>
                                <span>{language === 'PT' ? 'tecnologias' : 'technologies'}</span>
                            </div>
                            <div>
                                <FiAward className="Stats-Icon-about" />
                                <strong><AnimatedCounter value={15} suffix="+" /></strong>
                                <span>
                                    {language === 'PT' ? 'cursos com certificado' : 'certified courses'}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* O QUE EU FAÇO */}
        </main>
    );
}
import {
    FaServer,
    FaCode,
    FaUniversalAccess,
    FaTachometerAlt
} from 'react-icons/fa';

import ScrollReveal from '../../hooks/ScrollReveal/ScrollReveal';
import PropTypes from 'prop-types';

// @ts-ignore CSS imports are resolved by the bundler.
import './WhathouldIdo.css';

const WhatshouldIdo = ({ language = 'PT' }) => {
    const services = [
        {
            icon: <FaServer />,
            title: language === 'PT' ? 'Back-end' : 'Back-end',
            description: language === 'PT'
                ? 'Desenvolvimento de APIs, integração com bancos de dados e aplicações utilizando Python, Java e Node.js.'
                : 'API development, database integration and applications using Python, Java and Node.js.'
        },
        {
            icon: <FaCode />,
            title: language === 'PT' ? 'Front-end' : 'Front-end',
            description: language === 'PT'
                ? 'Interfaces responsivas com HTML, CSS, JavaScript, React e Tailwind.'
                : 'Responsive interfaces using HTML, CSS, JavaScript, React and Tailwind.'
        },
        {
            icon: <FaUniversalAccess />,
            title: language === 'PT' ? 'Acessibilidade' : 'Accessibility',
            description: language === 'PT'
                ? 'Sites que funcionam para todas as pessoas, seguindo as boas práticas WCAG.'
                : 'Websites designed for everyone, following WCAG best practices.'
        },
        {
            icon: <FaTachometerAlt />,
            title: 'Performance',
            description: language === 'PT'
                ? 'Carregamento rápido, SEO técnico e métricas que importam.'
                : 'Fast loading, technical SEO and metrics that matter.'
        }
    ];

    return (
        <section className="conteine-whathoudo">
            <ScrollReveal>
                <div className="whatshouldido-container">
                    <div className="whatshouldido-title">
                        <h1>{language === 'PT' ? 'Transformando ideias em experiências digitais.'
                        : 'Turning ideas into digital experiences.'}</h1>
                    </div>
                    <div className="whatshouldido-grid">
                        {services.map((service, index) => (
                            <article className="whatshouldido-card" key={index}>
                                <div className="whatshouldido-icon">
                                    {service.icon}
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
           </ScrollReveal>
        </section>
    );
};

WhatshouldIdo.propTypes = {
    language: PropTypes.string
};

export default WhatshouldIdo;
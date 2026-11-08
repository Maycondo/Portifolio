
import { TbSchoolFilled, TbAwardFilled } from 'react-icons/tb';
import PropTypes from 'prop-types';

import ScrollReveal from '../../hooks/ScrollReveal/ScrollReveal';
import './EducationCourses.css'



const EducationCourses = ({ language = 'PT' }) => {

    const EducationAndCourses = [
        {
            id: 1,
            icon: <TbSchoolFilled />,
            title: language === 'PT'
                ? 'Tecnólogo em Análise e Desenvolvimento de Sistemas'
                : 'Associate Degree in Systems Analysis and Development',

            institution: language === 'PT'
                ? 'Universidade Leonardo da Vinci'
                : 'Leonardo da Vinci University',

            description: language === 'PT'
                ? 'Curso Superior de Tecnologia | Cursando Formação voltada ao desenvolvimento de sistemas, programação, análise de software efundamentos da computação.'
                : 'Associate Degree in Technology | Currently pursuing a program focused on systems development, programming, software analysis, and the fundamentals of computing.',

            period: '',
        },
        {
            id: 2,
            icon: <TbAwardFilled />,
            title: language === 'PT'
                ? 'Cursos e certificações'
                : 'Courses and Certifications',

            institution: language === 'PT'
                ? 'Html, Css, JavaScript, TypeScript, React, Node.js, Python, Java '
                : 'Typescript, React, Node.js, Python, Java',

            description: language === 'PT'
                ? 'Front-end e Full stack. Possuo conhecimentos em React, JavaScript, TypeScript, Node.js, Express, MongoDB e Python, além de estar atualmente estudando Java e Programação Orientada a Objetos.'
                : 'Front-end and Full-stack. I have knowledge of React, JavaScript, TypeScript, Node.js, Express, MongoDB, and Python, and I am currently studying Java and Object-Oriented Programming.',
            tags: ['Rocketseat','Udemy', 'Danki code', 'Python', 'Java'],
            period: language === 'PT' ? '+15 Certificações' : '+15 Certifications',
        }
    ];

    return (
        <section className="conteine-education-main">
            <ScrollReveal>
            <div className='container-education-course'>
                <div className="education-course">
                    <h1>{language === 'PT' ? 'Formação e Certificações' : 'Education and Certifications'}</h1>
                </div>
            <div className="education-content">
                {EducationAndCourses.map((item) => (
                    <article className="education-card" key={item.id}>
                        <div className="education-icon">
                            {item.icon}
                        </div>
                        <div className="education-info">
                            <h2>{item.title}</h2>
                            <p className="education-institution">
                                {item.institution}
                            </p>
                            <p className="education-description">
                                {item.description}
                            </p>
                            {item.tags && (
                                <div className="education-tags">
                                    {item.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        {item.period && (
                            <span className="education-period">
                                {item.period}
                            </span>
                        )}
                    </article>
                ))}
            </div>
         </div>
         </ScrollReveal>
        </section>
    );
};

EducationCourses.propTypes = {
    language: PropTypes.string
};

export default EducationCourses;

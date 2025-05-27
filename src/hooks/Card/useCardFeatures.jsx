/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import './style.css';

export default function CardFeatures({ navtexts, handleLanguageChange }) {
    const sectionId = handleLanguageChange === "PT" ? 'projetos' : 'projects';

    const [animationSettings, setAnimationSettings] = useState({
        distance: 150,
        direction: "horizontal"
    });

    useEffect(() => {
        const isMobile = window.innerWidth <= 480;
        setAnimationSettings({
            distance: isMobile ? 50 : 150,
            direction: isMobile ? "vertical" : "horizontal"
        });
    }, []);

    const Projects = [
        {
            title: "Bot Discord",
            description: 'Criação de um bot interativo para gerenciar servidores do Discord. Implementação da biblioteca discord.py para permitir a interação com API Discord. O bot oferece comandos personalizados para moderar e organizar servidores do Discord Responde os usuários com comandos pre-definidos, tornando a interações com usuários mais fluida...',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
            link: 'https://github.com/Maycondo/DiscordBot',

        },
        {
            title: "MyBooks Website",
            description: 'My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
            link: 'https://github.com/Maycondo/my-books',
            site: 'https://my-books-wheat.vercel.app/',
        },
        {
            title: "Web iBooks",
            description: 'O iBooks é um projeto pessoal desenvolvido para consolidar e demonstrar minhas habilidades em desenvolvimento web. Ele faz requisições à API do Google Books para obter informações detalhadas sobre livros, incluindo autores, descrições, avaliações e capas. Os usuários podem criar uma lista personalizada de favoritos para acessar seus livros preferidos.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
            link: 'https://github.com/Maycondo/WebIbooks',
            site: 'https://web-ibooks.vercel.app/',
        },
        // ...demais projetos omitidos por brevidade
    ];

    return (
        <section className="Container_Projetcs" id={sectionId}>
            <h1 id="Projecto_name">{navtexts[2]}</h1>
            <AnimatedContent
                distance={animationSettings.distance}
                direction={animationSettings.direction}
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.0}
                threshold={0.2}
            >
                <div className="grid grid-cols-1 sm:grid md:grid-cols-3 gap-6">
                    {Projects.map((project, index) => (
                        <div
                            style={{ backgroundColor: "var(--Backgtound-color-card-projetcs)", color: "var(--Color-texto)" }}
                            key={index}
                            className="mx-3 mt-6 flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
                        >
                            <a href="#!" className="zoom-container">
                                <img
                                    className="rounded-t-lg"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-2xl font-semibold leading-tight">{project.title}</h5>
                                <p className="mb-3 text-base">
                                    {project.description}
                                </p>
                            </div>
                            <div
                                style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}
                                className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-end text-surface/75 dark:border-white/10 dark:text-neutral-300"
                            >
                                <a href={project.link}target="_blank"><i className="bi bi-github text-2xl" style={{ cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                                <a href={project.site} target="_blank"><i className="bi bi-globe text-2xl" style={{ cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedContent>
        </section>
    );
}

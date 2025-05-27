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
            description: 'Em uma tarde ensolarada, Lucas caminhava pelo parque com um sorriso no rosto...',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
        },
        {
            title: "Portfolio Website",
            description: 'Sofia adorava explorar livrarias antigas...',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
        },
        {
            title: "E-commerce App",
            description: 'No meio da noite, Ana acordou com uma leve brisa...',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
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
                                <a href="" target="_blank"><i className="bi bi-github text-2xl" style={{ cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                                <a href="" target="_blank"><i className="bi bi-globe text-2xl" style={{ cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedContent>
        </section>
    );
}

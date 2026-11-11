/* eslint-disable react/prop-types */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ScrollReveal from "../../hooks/ScrollReveal/ScrollReveal";

import {
  FiTrendingUp,
  FiBook,
  FiExternalLink,       
  FiLink,
} from "react-icons/fi";

import { RiRobot2Line } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";


import "./ProjectWorked.css";

const ProjectWorked = ({ language = "PT" }) => {
  const [filter, setFilter] = useState("All");

  // DADOS E TRADUÇÕES
  const translations = {
    PT: {
      label: "PROJETOS SELECIONADOS",
      title: (
        <>
          Trabalhos
          <br /> recentes.
        </>
      ),
      filters: ["Todas", "Web", "Branding", "Bots", "API"],
      featured: "DESTAQUE",
      view: "Visualizar projeto",
      comingSoon: "Em breve",
      projects: [

        {
          id: 1,
          category: "Web",
          year: "2022",
          name: "Portfólio",
          description: "Meu portfólio é um projeto pessoal desenvolvido com o objetivo de exibir minhas habilidades em desenvolvimento de aplicações web. Para garantir um desenvolvimento ágil, com carregamento rápido e builds utilizei Vite. Integração com Bootstrap e tailwaind para criar layouts modernos e responsivos. Aplicação baseada em componentes reutilizáveis",
          icon: AiOutlineMedium,
          color: "black",
          link: "https://portifolio-maycon-desenvolvedor-software.vercel.app/",
          technologies: ["React", "HTML", "CSS", "JavaScript", "Framer Motion", "React icons"],
        },


        {
          id: 2,
          category: "Web",
          year: "2025",
          name: "Advocacia Ana Beatriz",
          description: "Site institucional editorial.",
          icon: FaBalanceScale,
          color: "dark-blue",
          link: "",
          technologies: ["Next.js", "TypeScript", "Framer Motion", "CSS"],
        },

        {
          id: 3,
          category: "Web",
          year: "2023",
          name: "My-Books",
          description: "My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos.",
          icon: FiBook,
          color: "blue",
          link: "https://my-books-maycon-douglas.vercel.app/",
          technologies: ["React", "Tailwind CSS", "Typescript", "Axios", "Framer-motion"],
        },

        {
          id: 4,
          category: "API",
          year: "2023",
          name: "Book API",
          description: "Uma API RESTful criada com Node.js, Express e TypeScript, utilizando Prisma ORM e MongoDB Atlas para armazenar e gerenciar dados de livros. Ideal para aplicações que precisam de um backend robusto e escalável para operações de CRUD.",
          icon: FiLink,
          color: "red",
          link: "https://github.com/Maycondo/Books_API",
          technologies: ["Node.js ", "TypeScript", "Prisma ORM", "MongoDB Atlas", "Dotenv"],
        },

        {
          id: 5,
          category: "Bots",
          name: "Discord-Bot",
          year: "2023",
          description: "Criação de um bot interativo para gerenciar servidores do Discord. Implementação da biblioteca discord.py para permitir a interação com API Discord. O bot oferece comandos personalizados para moderar e organizar servidores do Discord Responde os usuários com comandos pre-definidos, tornando a interações com usuários mais fluida",
          icon: RiRobot2Line,
          color: "gray",
          link: "https://github.com/Maycondo/DiscordBot",
          technologies: ["Python", "Discord.py"],
        },


      ],

      featuredProject: {
        category: "Web",
        year: "2025",
        name: "Painel Financeiro Nimbus",
        description:
          "Plataforma de gestão financeira para pequenas empresas, com relatórios em tempo real e design system própri",
        link: "",
        tags: ["React", "Tailwind CSS", "Figma", "Node.js"],
      },
    },

    EN: {
      label: "SELECTED PROJECTS",
      title: (
        <>
          Recent
          <br />
          work.
        </>
      ),
      filters: ["All", "Web", "Branding", "Bots", "API"],
      featured: "FEATURED",
      view: "View project",
      comingSoon: "Coming soon",

      projects: [

        {
          id: 1,
          category: "Web",
          year: "2022",
          name: "Portfólio",
          description: "My portfolio is a personal project developed to showcase my skills in web application development. To ensure an agile development process, fast loading times, and efficient builds, I used Vite. I integrated Bootstrap and Tailwind to create modern, responsive layouts, and the application is built using reusable components.",
          icon: AiOutlineMedium,
          color: "black",
          link: "https://portifolio-maycon-desenvolvedor-software.vercel.app/",
          technologies: ["React", "HTML", "CSS", "JavaScript", "Framer Motion", "React icons"],
        },


        {
          id: 2,
          category: "Web",
          year: "2025",
          name: "Ana Beatriz Law",
          description: "Editorial institutional website.",
          icon: FaBalanceScale,
          color: "dark-blue",
          link: "",
          technologies: ["Next.js", "TypeScript", "Framer Motion", "CSS"],
        },

        {
          id: 3,
          category: "Web",
          year: "2023",
          name: "My-Books",
          description: "My-Books is a website where I will list all the books I am currently reading. Each entry will include a brief description of the book and some personal thoughts on aspects covered in the text. There will also be a favorites section, which will display all the books I have marked as favorites.",
          icon: FiBook,
          color: "blue",
          link: "https://my-books-maycon-douglas.vercel.app/",
          technologies: ["React", "Tailwind CSS", "Typescript", "Axios", "Framer-motion"],
        },

        {
          id: 4,
          category: "API",
          name: "Book API",
          year: "2023",
          description: "A RESTful API built with Node.js, Express, and TypeScript, using Prisma ORM and MongoDB Atlas to store and manage book data. Ideal for applications that require a robust and scalable backend for CRUD operations.",
          icon: FiLink,
          color: "red",
          link: "https://github.com/Maycondo/Books_API",
          technologies: ["Node.js ", "TypeScript", "Prisma ORM", "MongoDB Atlas", "Dotenv"],
        },

        {
          id: 5,
          category: "Bots",
          name: "Discord-Bot",
          year: "2023",
          description: "Creation of an interactive bot for managing Discord servers. Implementation of the `discord.py` library to enable interaction with the Discord API. The bot provides custom commands for moderating and organizing Discord servers, and responds to users via pre-defined commands, making interactions more fluid.",
          icon: RiRobot2Line,
          color: "gray",
          link: "https://github.com/Maycondo/DiscordBot",
          technologies: ["Python", "Discord.py"],
        },
        
      ],

      featuredProject: {
        category: "Web",
        year: "2025",
        name: "Nimbus Financial Dashboard",
        description:
          "Financial management platform for small businesses, featuring real-time reports and its own design system.",
        link: "",
        tags: ["React", "Tailwind CSS", "Figma", "Node.js"],
      },
    },
  };

  const content = translations[language] || translations.PT;

  // FILTROS
  const filters = ["All", "Web", "Branding", "Bots", "API"];

  const filteredProjects = content.projects.filter((project) => {
    return filter === "All" || project.category === filter;
  });

  const showFeatured = filter === "All" || filter === "Web";

  const featured = content.featuredProject;

  // COMPONENTE
  return (
    <section className="container-projects-main" id="projetos">
      <ScrollReveal>
        <div className="container-projects">
          {/* CABEÇALHO */}
          <motion.div className="texts-container-projects" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} >
            <span className="label-project">03 — {content.label}</span>
            <h2 className="title-projects">{content.title}</h2>
          </motion.div>
          {/* FILTROS */}
          <motion.div className="projects-filters" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
            {filters.map((item, index) => (
              <button key={item} type="button" className={`filter-project ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)} >
                {content.filters[index]}
              </button>
            ))}
          </motion.div>
          {/* PROJETO EM DESTAQUE */}
          <AnimatePresence mode="popLayout">
            {showFeatured && (
              <motion.article key="featured-project" className="featured-project" layout initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} >   <div className="featured-visual">
                  <FiTrendingUp />
                </div>
                <div className="featured-content">
                  <span className="featured-badge">
                    {content.featured} · {featured.year}
                  </span>
                  <h3>{featured.name}</h3>
                  <p>{featured.description}</p>
                  <div className="featured-bottom">
                    <div className="featured-tags">
                      {featured.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {featured.link ? (
                      <a href={featured.link} target="_blank" rel="noopener noreferrer" >
                        {content.view}<FiExternalLink />
                      </a>
                    ) : (<span className="project-coming-soon">{content.comingSoon}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          {/* GRID DE PROJETOS */}

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const Icon = project.icon;
                // Com link: card clicável.
                // Sem link: card permanece visual, sem navegação.
                const Card = project.link ? motion.a : motion.article;

                return (
                  <Card layout key={project.id} {...(project.link
                      ? { href: project.link, target: "_blank", rel: "noopener noreferrer",}
                      : {})} className={`project-card ${project.link ? "has-link" : ""}`}
                      initial={{ opacity: 0, y: 30, }} animate={{ opacity: 1, y: 0, }}
                      exit={{ opacity: 0, scale: 0.95, }} transition={{ duration: 0.4, delay: index * 0.06, }}
                      whileHover={{y: project.link ? -5 : 0,}}>
                    {/* VISUAL */}
                    <div className={`project-card-visual ${project.color}`}>
                      <Icon />
                    </div>
                    {/* INFORMAÇÕES */}
                    <div className="project-card-content">
                      <div className="project-card-meta">
                        <span> {project.category.toUpperCase()} {" · "} {project.year}</span>
                        <FiExternalLink />
                      </div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      {/* TECNOLOGIAS */}
                      <div className="project-technologies">
                        {project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectWorked;

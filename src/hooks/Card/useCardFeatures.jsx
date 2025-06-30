/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Crie ou atualize este CSS

// Exemplo de array de projetos (usando IDs únicos)
const Projects = [

  {
    id: 'Bot Discord',
    title: 'Bot Discord',
    description: 'Criação de um bot interativo para gerenciar servidores do Discord. Implementação da biblioteca discord.py para permitir a interação com API Discord. O bot oferece comandos personalizados para moderar e organizar servidores do Discord Responde os usuários com comandos pre-definidos, tornando a interações com usuários mais fluida...',
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp', // Placeholder
    tech: ['Python', 'Node.js', 'Discord.js', 'API Integration'],
  },

  {
    id: 'MyBooks',
    title: 'MyBooks ',
    description: 'My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos..',
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp', // Placeholder
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
   
  {
    id: 'Web Books',
    title: 'Web Books',
    description: 'O iBooks é um projeto pessoal desenvolvido para consolidar e demonstrar minhas habilidades em desenvolvimento web. Ele faz requisições à API do Google Books para obter informações detalhadas sobre livros, incluindo autores, descrições, avaliações e capas. Os usuários podem criar uma lista personalizada de favoritos para acessar seus livros preferidos.',
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp', // Placeholder
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },

  {
    id: 'Spotify',
    title: 'Spotify Gmone',
    description: 'Spotify Gmone é um projeto que visa criar uma plataforma de streaming de música semelhante ao Spotify, mas com um toque único. O nome "Gmone" é uma combinação de "Gnome" e "Music", refletindo a inspiração no ambiente de desktop Gnome. O projeto utiliza tecnologias modernas para oferecer uma experiência de usuário envolvente e intuitiva.',
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/041.webp', // Placeholder
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },

];

function DynamicTimeline({ sectionId, navtexts }) {
  const [activeProject, setActiveProject] = useState(Projects[0].id); // Começa com o primeiro projeto ativo
  const itemRefs = useRef([]); // Para armazenar referências a cada item da timeline

  // Adiciona um ref para cada item da timeline
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, Projects.length);
  }, [Projects.length]);


  // Intersection Observer para detectar qual item está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajuste o threshold para melhor detecção de "centralizado"
            // Por exemplo, você pode verificar se está mais de 50% visível
            if (entry.intersectionRatio > 0.5) {
                setActiveProject(entry.target.id);
            }
          }
        });
      },
      {
        root: null, // viewport como root
        rootMargin: '0px',
        threshold: 0.5, // 50% do elemento visível
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []); // Executa apenas uma vez ao montar o componente


  // Função para rolar até um projeto específico quando o nome é clicado
  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // eslint-disable-next-line no-unused-vars
  const currentProjectDetails = Projects.find(p => p.id === activeProject);


  return (
    <section className="page-wrapper-3" id={sectionId}>
      <div className="section-timeline-2">
        <div className="container-left"> {/* Nova div para a navegação esquerda */}
          <div className="timeline_nav">
            {Projects.map((project) => (
              <h2
                key={project.id}
                className={`timeline_nav_item ${activeProject === project.id ? 'active' : ''}`}
                onClick={() => scrollToProject(project.id)}
              >
                {project.title}
              </h2>
            ))}
          </div>
        </div>

        <div className="container-right"> {/* Nova div para o conteúdo da direita */}
          <div className="timeline_component">
            {Projects.map((project, index) => (
              <div className="timeline_item" key={project.id} id={project.id} ref={(el) => (itemRefs.current[index] = el)} >
                <div className="timeline_right_content">
                  <p>{project.description}</p>
                  <img src={project.image} alt={project.title} />
                    <div className="timeline_tech_roles"> {/* Para os "Roles" / Techs */}
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="timeline_tech_item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DynamicTimeline;
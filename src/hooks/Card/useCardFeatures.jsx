/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect, useRef } from 'react';
import Carddetails from "./cardDetails.jsx"
import { motion, AnimatePresence } from 'framer-motion';
import './useCardFeatures.css'; // Crie ou atualize este CSS

// Imgens do projetos
import MyBooks1 from '../../imagens/Projetos/My_Books/MyBooks1.png';
import MyBooks2 from '../../imagens/Projetos/My_Books/MyBooks2.png';
import MyBooks3 from '../../imagens/Projetos/My_Books/MyBooks3.png';
import MyBooks4 from '../../imagens/Projetos/My_Books/MyBooks4.png';
import MyBooks5 from '../../imagens/Projetos/My_Books/MyBooks5.png';

import ApiBooks1 from '../../imagens/Projetos/API_Books/ApiBooks1.png';
import ApiBooks2 from '../../imagens/Projetos/API_Books/ApiBooks2.png';
import ApiBooks3 from '../../imagens/Projetos/API_Books/ApiBooks3.png';


// Exemplo de array de projetos (usando IDs únicos)
const Projects = [

  {
    id: 'Bot Discord',
    title: 'Bot Discord',
    description: 'Criação de um bot interativo para gerenciar servidores do Discord. Implementação da biblioteca discord.py para permitir a interação com API Discord. O bot oferece comandos personalizados para moderar e organizar servidores do Discord Responde os usuários com comandos pre-definidos, tornando a interações com usuários mais fluida...',
    image: [ MyBooks1,  MyBooks2, MyBooks3, ], // Placeholder
    tech: ['Python', 'Node.js', 'Discord.js', 'API Integration'],
    github: 'https://github.com/Maycondo/DiscordBot',
    site: 'https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot',
  },

  {
    id: 'MyBooks',
    title: 'MyBooks ',    
    description: 'My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos..',
    image: [ MyBooks1,  MyBooks2, MyBooks3, MyBooks4, MyBooks5 ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', "Boostrap", 'Tailwind'  ],
    github: 'https://github.com/Maycondo/My-Books',
    site: 'https://my-books-lyart-seven.vercel.app/',
  },  

  {
    id: 'API de Books',
    title: 'API de Books',
    description: 'Desenvolvimento de uma API RESTful para gerenciamento de uma coleção de livros. A API permite operações CRUD (Create, Read, Update, Delete) em livros, incluindo atributos como título, autor, gênero e ano de publicação. Implementação utilizando Node.js com Express e banco de dados MongoDB para armazenamento dos dados.',
    image: [ ApiBooks1, ApiBooks2, ApiBooks3 ],
    tech: ['Node.js', 'Express', 'MongoDB', 'RESTful API'],
    github: 'https://github.com/Maycondo/Books_API',
  },
  
  {
    id: 'Web Books',
    title: 'Web Books',
    description: 'O iBooks é um projeto pessoal desenvolvido para consolidar e demonstrar minhas habilidades em desenvolvimento web. Ele faz requisições à API do Google Books para obter informações detalhadas sobre livros, incluindo autores, descrições, avaliações e capas. Os usuários podem criar uma lista personalizada de favoritos para acessar seus livros preferidos.',
    image: [
      'https://tecdn.b-cdn.net/img/new/standard/city/044.webp', 
      'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
      'https://tecdn.b-cdn.net/img/new/standard/city/042.webp'],
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/Maycondo/WebIBooks',
    site: 'https://web-ibooks.vercel.app/',
  },

  {
    id: 'Spotify',
    title: 'Spotify Gmone',
    description: 'Spotify Gmone é um projeto que visa criar uma plataforma de streaming de música semelhante ao Spotify, mas com um toque único. O nome "Gmone" é uma combinação de "Gnome" e "Music", refletindo a inspiração no ambiente de desktop Gnome. O projeto utiliza tecnologias modernas para oferecer uma experiência de usuário envolvente e intuitiva.',
    image: [
      'https://tecdn.b-cdn.net/img/new/standard/city/044.webp', 
      'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
      'https://tecdn.b-cdn.net/img/new/standard/city/042.webp'],
    tech: ['C#', "ASP.NET Core", "Entity Framework Core", ],
    github: 'https://github.com/Maycondo/SpotifyMiniPanel',
    site: 'https://spotifygmone.azurewebsites.net/',
  },

];

function DynamicTimeline({ sectionId, navtexts }) {
  const [activeProject, setActiveProject] = useState(Projects[0].id); // Começa com o primeiro projeto ativo
  const [carddetails, setCardDetails] = useState(null); 
  const [indexImagen , setIndeximagen] = useState(0)
  const allimagens = Projects.flatMap(project => project.image);
  const itemRefs = useRef([]); // Para armazenar referências a cada item da timeline

  // Muda a imagem a cada 6 segundos
  useEffect(() => {
    const intervalId = setInterval (() => {
      setIndeximagen((prevIndex => (prevIndex + 1) % allimagens.length));
    }, 6000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [allimagens.length])


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

   
  const currentProjectDetails = Projects.find(p => p.id === activeProject);

  // Função para fechar o Carddetails
  const handleClose = () => {
    setCardDetails(null);
  };


  return (
    <section className="page-wrapper-3" id={sectionId}>
      <h1>{navtexts[2]}</h1>
      <div className="section-timeline-2">
        <div className="PROJECTS"></div>
        <div className="container-left"> {/* Nova div para a navegação esquerda */}
          <div className="timeline_nav">
            {Projects.map((project) => (
              <h2 key={project.id} className={`timeline_nav_item ${activeProject === project.id ? 'active' : ' '}`} onClick={() => scrollToProject(project.id)} >
                {project.title}
              </h2>
            ))}
          </div>
        </div>

        <div className="container-right"> {/* Nova div para o conteúdo da direita */}
          <div className="timeline_component">
            {Projects.map((project, index) => {
              const currentImages = project.image;
              return (
                <div className="timeline_item" key={project.id} id={project.id} ref={(el) => (itemRefs.current[index] = el)} >
                  <div className="timeline_right_content">
                    <p>{project.description}</p>
                    {/* Imagem com animação */}
                      <div className='timeline_image_container'>  
                          <AnimatePresence mode="wait">
                            <motion.img key={currentImages[indexImagen % currentImages.length]} 
                            src={currentImages[indexImagen % currentImages.length]} 
                            alt={`Imagem ${indexImagen}`} className="timeline_image" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ duration: 0.6 }}
                              onClick={() => setCardDetails(project) }
                            />
                        </AnimatePresence>
                      </div>
                   <AnimatePresence mode="wait">
                      {carddetails && (
                        <Carddetails carddetails={carddetails} onClose={handleClose} />
                      )}
                    </AnimatePresence>
                      <div className="timeline_tech_roles"> {}
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="timeline_tech_item">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DynamicTimeline;
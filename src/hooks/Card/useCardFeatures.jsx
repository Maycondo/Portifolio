/* eslint-disable react/prop-types */

import './style.css';

export default function CardFeatures({  handleLanguageChange }) {
    const sectionId = handleLanguageChange === "PT" ? 'projetos' : 'projects';



    const Projects = [
        {
            title: "Bot Discord",
            description: 'Criação de um bot interativo para gerenciar servidores do Discord. Implementação da biblioteca discord.py para permitir a interação com API Discord. O bot oferece comandos personalizados para moderar e organizar servidores do Discord Responde os usuários com comandos pre-definidos, tornando a interações com usuários mais fluida...',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
            link: 'https://github.com/Maycondo/DiscordBot',
            tech: [
                "Python",
                "discord.py",
                "API Discord",
            ],
        },

        {
            title: "MyBooks Website",
            description: 'My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
            link: 'https://github.com/Maycondo/my-books',
            site: 'https://my-books-wheat.vercel.app/',
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
            ]
        },

        {
            title: "Web iBooks",
            description: 'O iBooks é um projeto pessoal desenvolvido para consolidar e demonstrar minhas habilidades em desenvolvimento web. Ele faz requisições à API do Google Books para obter informações detalhadas sobre livros, incluindo autores, descrições, avaliações e capas. Os usuários podem criar uma lista personalizada de favoritos para acessar seus livros preferidos.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
            link: 'https://github.com/Maycondo/WebIbooks',
            site: 'https://web-ibooks.vercel.app/',
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
            ]
        },

        {
            title: "Spotify Gmone",
            description: 'Spotify Gmone é um projeto que visa criar uma plataforma de streaming de música semelhante ao Spotify, mas com um toque único. O nome "Gmone" é uma combinação de "Gnome" e "Music", refletindo a inspiração no ambiente de desktop Gnome. O projeto utiliza tecnologias modernas para oferecer uma experiência de usuário envolvente e intuitiva.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/041.webp',
            link: '',
            site: 'https://spotify-gmone.vercel.app/',
            tech: [
                "C#",
                "ASP.NET Core",
                "Entity Framework Core",
            ]
        }
        // ...demais projetos omitidos por brevidade
    ];

    return (
        <section className="page-wrapper-3" id={sectionId}>
               { /* <h1 id="ProjectoName">{navtexts[2]}</h1> */}
            <div className="section-timeline-2">
                    <div className="container-4">
                        <div className="timeline_component">
                            {Projects.map((project, index) => (
                                <div className="timeline_item" key={index}>
                                    <div className='timeline_left'>
                                        <h2>{project.title}</h2>
                                    </div>
                                    <div className='timeline_centre'>
                                        <div className='timeline_circle'>
                                            <div className='timeline_circle_inner'>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='timeline_right'>
                                         <p>{project.description}</p>
                                        <img src={project.image} alt={project.title} />
                                        <div className='timeline_tech'>
                                            {project.tech.map((tech, index) => (
                                                <span key={index} className='timeline_tech_item'>{tech}</span>
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

/* eslint-disable react/prop-types */
import AnimatedContent from "./AnimatedContent/AnimatedContent";


import './style.css';

export default function CardFeatures({ navtexts, handleLanguageChange }) {
    const sectionId = handleLanguageChange === "PT" ? 'projetos' : 'projects';

    const Projects = [
        {
            title: "Bot Discord",
            description: 'Em uma tarde ensolarada, Lucas caminhava pelo parque com um sorriso no rosto. O vento suave balançava as folhas das árvores, criando uma melodia natural que acalmava sua mente. Ele encontrou um banco vazio perto de um lago e decidiu sentar-se, observando os patos nadando tranquilamente. Enquanto admirava a paisagem, Lucas refletiu sobre as pequenas coisas da vida que trazem felicidade e percebeu que, às vezes, a paz está nas coisas mais simples.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
        },

        {
            title: "Portfolio Website",
            description: 'Sofia adorava explorar livrarias antigas. Um dia, enquanto caminhava por uma rua estreita de paralelepípedos, encontrou uma pequena loja escondida entre dois prédios. Lá dentro, o cheiro de papel envelhecido misturava-se ao aroma de café fresco. As prateleiras eram abarrotadas de livros com capas desgastadas pelo tempo. Curiosa, ela pegou um volume encadernado em couro, que parecia ter sido esquecido por anos. Ao abrir, encontrou uma dedicatória que falava de amor e aventuras passadas. Era como se aquele livro estivesse esperando por ela',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
        },

        {
            title: "E-commerce App",
            description: 'No meio da noite, Ana acordou com uma leve brisa entrando pela janela. O céu estava claro, iluminado por milhares de estrelas que cintilavam como diamantes. Ela levantou-se e caminhou até a varanda, onde o silêncio da madrugada a envolveu. O som distante das ondas do mar quebrava a quietude, trazendo uma sensação de tranquilidade. Ana fechou os olhos por um momento, respirando profundamente o ar salgado, sentindo-se conectada ao vasto universo. Ali, sob o céu estrelado, ela encontrou uma paz que há muito tempo buscava.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
        },

        {
            title: "E-commerce App",
            description: 'No meio da noite, Ana acordou com uma leve brisa entrando pela janela. O céu estava claro, iluminado por milhares de estrelas que cintilavam como diamantes. Ela levantou-se e caminhou até a varanda, onde o silêncio da madrugada a envolveu. O som distante das ondas do mar quebrava a quietude, trazendo uma sensação de tranquilidade. Ana fechou os olhos por um momento, respirando profundamente o ar salgado, sentindo-se conectada ao vasto universo. Ali, sob o céu estrelado, ela encontrou uma paz que há muito tempo buscava.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
        },

        {
            title: "Portfolio Website",
            description: 'Sofia adorava explorar livrarias antigas. Um dia, enquanto caminhava por uma rua estreita de paralelepípedos, encontrou uma pequena loja escondida entre dois prédios. Lá dentro, o cheiro de papel envelhecido misturava-se ao aroma de café fresco. As prateleiras eram abarrotadas de livros com capas desgastadas pelo tempo. Curiosa, ela pegou um volume encadernado em couro, que parecia ter sido esquecido por anos. Ao abrir, encontrou uma dedicatória que falava de amor e aventuras passadas. Era como se aquele livro estivesse esperando por ela',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
        },

        {
            title: "E-commerce App",
            description: 'No meio da noite, Ana acordou com uma leve brisa entrando pela janela. O céu estava claro, iluminado por milhares de estrelas que cintilavam como diamantes. Ela levantou-se e caminhou até a varanda, onde o silêncio da madrugada a envolveu. O som distante das ondas do mar quebrava a quietude, trazendo uma sensação de tranquilidade. Ana fechou os olhos por um momento, respirando profundamente o ar salgado, sentindo-se conectada ao vasto universo. Ali, sob o céu estrelado, ela encontrou uma paz que há muito tempo buscava.',
            image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
        },

        
    ];

    return (
        <section className="Container_Projetcs" id={sectionId} >
            <h1 id="Projecto_name">{navtexts[2]}</h1>
            <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.0}
                threshold={0.2}>

            <div className="grid grid-cols-1 sm:grid md:grid-cols-3 gap-6">
                {Projects.map((project, index) => (
                    <div style={{ backgroundColor: "var(--Backgtound-color-card-projetcs)", color: "var(--Color-texto)"}} key={index}className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!" className="zoom-container">
                            <img        
                                className="rounded-t-lg"
                                src={project.image}
                                alt={project.title}
                            />
                        </a>
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-semibold leading-tight">{project.title}</h5>
                            <p className="mb-3 text-base ">
                                {project.description}
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}
                            className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-end text-surface/75 dark:border-white/10 dark:text-neutral-300 "
                        >
                            <a href="" target="_blank" ><i className="bi bi-github text-2xl" style={{cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                            <a href="" target="_blank" ><i className="bi bi-globe text-2xl" style={{cursor: 'pointer', color: "var(--Color-icons--projetcs)" }}></i></a>
                        </div>
                    </div>
                ))}
            </div>
            </AnimatedContent>
        </section>
    );
}

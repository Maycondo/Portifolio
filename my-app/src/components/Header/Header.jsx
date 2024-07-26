import React, { useEffect, useState } from 'react';
import ButtonLingua from '../Buttons/Linguabutton'
import Modebutton from '../Buttons/Modebutton';
import Navbutton from '../Buttons/Navbutton';
import './style.css'

export default function Header() {



    const [messageIndex, setMessageIndex] = useState(0);
    const messages = [
        "Welcome to my portfolio",
        "My name is Michael",
        "I'm a full stack developer",
    ];
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            }, 2000);
        
            const timeoutId = setTimeout(() => {
                clearInterval(intervalId);
                setMessageIndex(0);
            }, 10000);
        
            return () => {
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            };
    }, []);



return (
        <header className="App-header">
            <section className="Top-barra">

             <h1 id="Portifolio">Portfólio</h1>

                <Modebutton></Modebutton>
                <ButtonLingua></ButtonLingua>
                <Navbutton></Navbutton>

             </section>
             <nav className="Narve"> 
                 <a id="Name-home" href="#HOME">INICIO</a>
                 <a id="Name-about" href="#ABOUT">SOBRE</a>
                 <a id="Name-projects" href="#PROJECTS">PROJETOS</a>
                 <a id="Name-contac" href="#CONTAC">CONTATOS</a>
             </nav>

             <section className="Painel-1">

             <div className="Discrição-Perso">
               <h1 id="Name-Perso">{messages[messageIndex]}</h1>
                 <h5 id="Email">maycondouglasniculau@gmail.com</h5>
                 <h1 id="Founder">Founder</h1>
               <p id="Pequeno-Texto">
                    Minhas habilidades incluem a utilização de tecnologias modernas,
                    como React para o front-end e Node.js para o back-end, garantindo
                    uma abordagem coesa e eficiente em todas as camadas de uma
                    aplicação.
               </p> 

               <div className="Social-Midias">
                   <a href="https://www.linkedin.com/in/maycon-douglas-b97786306/" target="_blank"><i class="bi bi-linkedin"></i>Linkedin</a>
                   <a href="https://github.com/Maycondo" target="_blank"><i class="bi bi-git"></i>Github</a>
                   <a href=""><i class="bi bi-file-text-fill"></i>Curriculo</a>
               </div>

                    <button id="LowButton"><i class="bi bi-chevron-double-down"></i></button>

               </div>
                    <div className="Imagem-Perso">
                    <img id="Imagem-User" src="imagens/Perfil-perso2.jpeg" alt="Imagem-Perso" />
               </div>

             </section>
     </header>
    )
}
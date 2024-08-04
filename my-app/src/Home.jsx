import { useState, useEffect } from 'react';
import React from 'react';
import Animetiontexto from './components/ AnimationText/Animetiontext';
import Mode_dark_light from './components/Buttons/Dark_Light';
import Navbutton from './components/Buttons/Navbutton';
import useModelinguagem from './Hooks/Modeliguagem';


export default function Home() {

const { texts,  navtexts, setLinguagem } = useModelinguagem();
const [selectedLanguage, setSelectedLanguage] = useState('PT');

const handleLanguageChange = (linguagem) => {
    setLinguagem(linguagem); 
    setSelectedLanguage(linguagem)
}; 


return (    
    <>
      <header className="App-header">
            <section className="Top-barra">
                    <h1 id="Portifolio">Portfólio</h1>
                <div className='div_buttons'>
                        <Mode_dark_light></Mode_dark_light>
                            <div className="lingua">
                                <button className="lingua__button"  onClick={() => handleLanguageChange('PT')}>PT</button>
                                <button className="lingua__button"  onClick={() => handleLanguageChange('EN')}>EN</button>
                            </div>
                        <Navbutton></Navbutton>
                </div>
             </section>
             
                <nav> 
                    <ul className="Narve">{navtexts.map((item, index) => (<a href="" key={index}>{item}</a>))}</ul>
                </nav>

             <section className="Painel-1">

             <div className="Discrição-Perso">
                 <Animetiontexto></Animetiontexto>
                 <h5 id="Email">maycondouglasniculau@gmail.com</h5>
                 <h1 id="Founder">Founder</h1>
               <p id="Pequeno-Texto">{texts['text_peque']}</p> 

               <div className="Social-Midias">
                   <a href="https://www.linkedin.com/in/maycon-douglas-b97786306/" target="_blank"><i class="bi bi-linkedin"></i>Linkedin</a>
                   <a href="https://github.com/Maycondo" target="_blank"><i class="bi bi-git"></i>Github</a>
                   <a href=""><i class="bi bi-file-text-fill"></i>Curriculo</a>
               </div>

                    <button id="LowButton"><i class="bi bi-chevron-double-down"></i></button>

               </div>
                    <div className="Imagem-Perso">
                    <img id="Imagem-User" src="imagens/Perfil-perso2.jpeg" alt="Imagem-Perso"/>
               </div>

             </section>
     </header>

     <main className="Main" id="ABOUT">
            <h1 id="About">{navtexts[1]}</h1>
            <div class="ABOUT">
                <p id="Text-About">{texts['about']}</p>
            </div>

            <section class="Tecnologias">

                <div id="Skills"><p>Technologies Experience</p></div>
                
                <div id="Skills-Icones">
                    <i class="fab fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-node"></i>
                        <i class="fa-brands fa-python"></i>
                </div>

            </section>
        </main>
    </>
)}

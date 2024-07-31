import { useState, useEffect } from 'react';


export default function useModelinguagem() {

    const [linguagem, setLinguagem] = useState('PT');
    const [texts, setTexts] = useState({});
    const [navtexts, setNavtexts] = useState([]);
  
    useEffect(() => {
      if (linguagem === 'PT') {   

         setNavtexts(['INICIO', 'SOBRE', 'PROJETOS', 'CONTATOS']);

          setTexts({
            id_1: `
              Minhas habilidades incluem a utilização de tecnologias modernas, como React para o front-end e Node.js,
              Python para o back-end, garantindo uma abordagem coesa e eficiente em todas as camadas de uma aplicação.`,
            about: `
              Olá 👋🏼 seja bem-vindo! Meu nome é maycon, Entrei no mercado de tecnologia a 2 anos 9 meses, atualmente trabalho como freelancer você pode ver alguns desses meus projetos Minha paixão pela programação e minha busca contínua por aprender e crescer me impulsionam a criar soluções que fazem a diferença. Dê uma olhada em meu portfólio e descubra como posso contribuir para seus projetos."
              Minha jornada no mundo da programação é marcada por um compromisso constante com a aprendizagem e o crescimento. Sempre em busca de aprimorar minhas habilidades, estou determinado a elevar o padrão e entregar resultados que façam a diferença.`,
          },);
        } else if (linguagem === 'EN') {

            setNavtexts(['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']);

          setTexts({
            id_1: `My skills include using modern technologies, such as React for the front-end and Node.js, Python for the back-end,
              ensuring a cohesive and efficient approach across all layers of an application.`,
            about: `
              Hello 👋🏼 welcome! My name is Maycon. I entered the tech market 2 years and 9 months ago, and currently work as a freelancer. You can see some of my projects.
              My passion for programming and my continuous quest to learn and grow drive me to create solutions that make a difference. Take a look at my portfolio and see how I can contribute to your projects.
              My journey in the programming world is marked by a constant commitment to learning and growth. Always seeking to improve my skills, I am determined to raise the standard and deliver results that make a difference.`,
          });
      }
    }, [linguagem]);



  
    return { texts, linguagem, navtexts, setLinguagem}
}
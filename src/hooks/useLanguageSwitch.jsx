import { useState, useEffect } from 'react';


export default function LanguageSwitch(initialLinguagem = 'PT') {
  
    const [linguagem, setLinguagem] = useState(initialLinguagem);
    const [texts, setTexts] = useState({});
    const [navtexts, setNavtexts] = useState([]);
    
    useEffect(() => {

    const navTextsPt = ['INICIO', 'SOBRE', 'PROJETOS', 'CONTATOS'];
    const navTextsEn = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACTS'];

    const textsPT = {
      text_footer: `TEM UM PROJETO EM MENTE?`,
      text_footer_button: `VOLTAR AO TOPO`,
      text_peque: `
        Minhas habilidades incluem a utilização de tecnologias modernas, como React para o desenvolvimento de interfaces ricas, responsivas e interativas no front-end. No back-end, atuo com Node.js e Python, desenvolvendo APIs robustas e eficientes que garantem uma comunicação fluida entre as camadas da aplicação.`,
      about: `
        Olá 👋🏼 seja bem-vindo! Meu nome é Maycon, entrei no mercado de tecnologia há 3 anos. Atualmente, trabalho como freelancer e você pode ver alguns dos meus projetos. Minha paixão pela programação e minha busca contínua por aprender e crescer me impulsionam a criar soluções que fazem a diferença. Dê uma olhada em meu portfólio e descubra como posso contribuir para seus projetos.
        Minha jornada no mundo da programação é marcada por um compromisso constante com a aprendizagem e o crescimento. Sempre em busca de aprimorar minhas habilidades, estou determinado a elevar o padrão e entregar resultados que façam a diferença.`,
    };

    const textsEN = {
      text_footer: `DO YOU HAVE A PROJECT IN MIND?`,
      text_footer_button: `BACK TO TOP`,
      text_peque: `
        My skills include the use of modern technologies such as React for developing rich, responsive, and interactive front-end interfaces. On the back end, I work with Node.js and Python, building robust and efficient APIs that ensure smooth communication between the layers of the application. `,
      about: `
        Hello 👋🏼 welcome! My name is Maycon. I entered the tech market 3 years ago and currently work as a freelancer. You can see some of my projects. My passion for programming and my continuous quest to learn and grow drive me to create solutions that make a difference. Take a look at my portfolio and see how I can contribute to your projects.
        My journey in the programming world is marked by a constant commitment to learning and growth. Always seeking to improve my skills, I am determined to raise the standard and deliver results that make a difference.`,
    };

    if (linguagem === 'PT'){
      setTexts(textsPT);
      setNavtexts(navTextsPt);
    }else if (linguagem === 'EN'){
      setTexts(textsEN)
      setNavtexts(navTextsEn)
    };

    }, [linguagem]);


    return { texts, linguagem, navtexts, setLinguagem}
}
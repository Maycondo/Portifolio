
import { useState, useEffect } from 'react';

const navTextsPt = [
  'INÍCIO',
  'SOBRE',
  'PROJETOS',
  'CONTATOS',
];

const navTextsEn = [
  'HOME',
  'ABOUT',
  'PROJECTS',
  'CONTACTS',
];

const textsPT = {
  text_footer: 'TEM UM PROJETO EM MENTE?',
  text_footer_button: 'VOLTAR AO TOPO',

  about: `
    Olá 👋🏼, seja bem-vindo! Meu nome é Maycon e estou há 4 anos
    no mercado de tecnologia, atuando como desenvolvedor freelancer.
    Tenho experiência no desenvolvimento de interfaces modernas,
    responsivas e interativas com React, além de trabalhar no back-end
    com Node.js e Python, criando APIs robustas e eficientes.
    Minha paixão pela programação, aliada à busca constante por
    aprendizado e evolução, me motiva a desenvolver soluções criativas
    e funcionais que fazem a diferença.
    Fique à vontade para conhecer alguns dos meus projetos!
  `,
};

const textsEN = {
  text_footer: 'DO YOU HAVE A PROJECT IN MIND?',
  text_footer_button: 'BACK TO TOP',

  about: `
    Hello 👋🏼, welcome! My name is Maycon, and I have been in the
    technology industry for 4 years, working as a freelance developer.
    I have experience developing modern, responsive, and interactive
    interfaces with React, as well as working on the back end with
    Node.js and Python to build robust and efficient APIs.
    My passion for programming, combined with my constant pursuit
    of learning and growth, motivates me to develop creative and
    functional solutions that make a difference.
    Feel free to explore some of my projects!
  `,
};

export default function LanguageSwitch(initialLanguage = 'PT') {
  const normalizeLanguage = (value) =>
    String(value ?? 'PT').trim().toUpperCase() === 'EN'
      ? 'EN'
      : 'PT';

  const [linguagem, setLinguagemState] = useState(() =>
    normalizeLanguage(initialLanguage)
  );

  const [texts, setTexts] = useState(textsPT);
  const [navtexts, setNavtexts] = useState(navTextsPt);

  // Mantém os textos sincronizados com o idioma
  useEffect(() => {
    const isEnglish = linguagem === 'EN';

    setTexts(isEnglish ? textsEN : textsPT);
    setNavtexts(isEnglish ? navTextsEn : navTextsPt);
  }, [linguagem]);

  // Normaliza qualquer idioma recebido
  const setLinguagem = (value) => {
    setLinguagemState(normalizeLanguage(value));
  };

  return {
    texts,
    linguagem,
    navtexts,
    setLinguagem,
  };
}

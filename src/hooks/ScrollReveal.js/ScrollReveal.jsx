/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css"; // Arquivo de estilos separado

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Começa a animação quando 80% do elemento entra na tela
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return <div ref={sectionRef} className="scroll-reveal">{children}</div>;
};

export default ScrollReveal;

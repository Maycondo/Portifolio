
/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import ThemeToggle from "../Buttons/useThemeToggle";
import "./style.css";

const EASE = [0.25, 0.8, 0.25, 1];

const SECTION_IDS = {
  PT: ["inicio", "sobre", "projetos", "contatos"],
  EN: ["home", "about", "projects", "contacts"],
};

export default function PyramidMenu({
  language,
  navtexts = [],
  CorStyle = () => ({}),
  handleLanguageChange = () => {},
  handleThemeChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const btn = useRef(null);
  const firstLink = useRef(null);

  const reduce = useReducedMotion();

  const lang = String(language || "PT").trim().toUpperCase();

  const ids = SECTION_IDS[lang] || SECTION_IDS.PT;

  // Itens da navegação
  const items = navtexts
    .map((label, i) => ({
      label,
      id: ids[i],
    }))
    .filter((item) => item.id);

  const close = () => setOpen(false);

  // Verifica se o componente está montado
  useEffect(() => {
    setMounted(true);
  }, []);

  // Controle do teclado e scroll
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);

    document.body.style.overflow = open ? "hidden" : "";

    const timer = open
      ? setTimeout(() => firstLink.current?.focus(), 500)
      : null;

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";

      if (timer) clearTimeout(timer);
    };
  }, [open]);

  // Duração das animações
  const duration = reduce ? 0 : 0.5;

  // Animação do painel
  const panel = {
    hidden: {
      x: "100%",
    },

    show: {
      x: "0%",
      transition: {
        duration,
        ease: EASE,
        when: "beforeChildren",
        staggerChildren: reduce ? 0 : 0.08,
        staggerDirection: -1,
      },
    },

    exit: {
      x: "-100%",
      transition: {
        duration,
        ease: EASE,
      },
    },
  };

  // Animação dos elementos
  const rise = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 40,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: EASE,
      },
    },
  };

  if (!mounted) return null;

  return createPortal(
    <div className={`pm-root ${open ? "pm-open" : ""}`}>

      {/* ==================================
          BOTÃO HAMBURGUER
      ================================== */}
      <button ref={btn} type="button" className="pm-btn" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="pm-nav" onClick={() => setOpen((previous) => !previous)} >
        <span className="pm-line" />
        <span className="pm-line" />
        <span className="pm-line" />
      </button>
      {/* ==================================
          PAINEL DE NAVEGAÇÃO
      ================================== */}
      <AnimatePresence>
        {open && (
            <motion.div
              key="pm-overlay"
              id="pm-nav"
              className="Nav_animation-wrapper"
              variants={panel}
              initial={{clipPath: "circle(0px at calc(100% - 61px) 36px)  ",}}
              animate={{clipPath: "circle(150vmax at calc(100% - 61px) 36px)  ",}}
              exit={{clipPath: "circle(0px at calc(100% - 61px) 36px) ",}}
              transition={{duration: 0.8,ease: [0.76, 0, 0.24, 1],}}
              aria-label="Navegação principal"
            >   
            <div className="Nav_animetion">

              {/* NAVEGAÇÃO */}
              <nav aria-label="Navegação principal">
                <ul className="pm-list">

                  {items.map((item, i) => (
                    <motion.li className="pm-item" key={item.id} variants={rise} >
                      <a ref={i === 0 ? firstLink : null} className="pm-link" href={`#${item.id}`} onClick={close}
                        style={{
                          "--w": `${30 + (70 * i) / Math.max(items.length - 1, 1)}%`,
                          "--t": `${(100 * i) / Math.max(items.length - 1, 1)}%`,
                        }}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}

                </ul>
              </nav>

              {/* ==================================
                  TEMA E IDIOMA
              ================================== */}
              <motion.div className="pm-tools" variants={rise} >
                <ThemeToggle theme={undefined} onThemeChange={handleThemeChange} />
               <div className="lingua">
                  {["PT", "EN"].map((code) => (
                    <button key={code} type="button" className="lingua__button" style={CorStyle(code)} aria-pressed={lang === code} onClick={() => handleLanguageChange(code)} >
                      {code}
                    </button>
                  ))}
                </div>

              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>,
    document.body
  );
}

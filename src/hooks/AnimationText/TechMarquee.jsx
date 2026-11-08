/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

const DEFAULT_ITEMS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "Node js",
  "React",
];

/**
 * Props:
 * - items: string[]            lista de tecnologias
 * - speed: number              velocidade em px/s (padrão 40)
 * - direction: "left"|"right"  direção do movimento
 * - pauseOnHover: boolean      pausa ao passar o mouse
 * - respectReducedMotion: boolean  fica parado se o sistema pedir "reduzir movimento" (padrão false)
 * - gap: number                espaço entre itens em px
 * - className: string
 */
export default function TechMarquee({
  items = DEFAULT_ITEMS,
  speed = 60,
  direction = "left",
  pauseOnHover = true,
  respectReducedMotion = false,
  gap = 40,
  className,
}) {
  const reduceMotion = useReducedMotion();

  const containerRef = useRef(null);
  const setRef = useRef(null);

  const [setWidth, setSetWidth] = useState(0);
  const [copies, setCopies] = useState(2);
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);

  // Mede o conjunto de itens e calcula quantas cópias são necessárias
  // para preencher o container sem "buracos".
  useEffect(() => {
    const container = containerRef.current;
    const set = setRef.current;
    if (!container || !set) return;

    const measure = () => {
      const w = set.getBoundingClientRect().width;
      if (w === 0) return;
      setSetWidth(w);
      setCopies(Math.ceil(container.getBoundingClientRect().width / w) + 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(set);
    return () => observer.disconnect();
  }, [items, gap]);

  // Loop contínuo: o deslocamento "dá a volta" a cada largura de um conjunto.
  useAnimationFrame((_, delta) => {
    if ((respectReducedMotion && reduceMotion) || paused || setWidth === 0)
      return;

    const sign = direction === "left" ? -1 : 1;
    let next = x.get() + sign * speed * (Math.min(delta, 50) / 1000);

    if (next <= -setWidth) next += setWidth;
    if (next > 0) next -= setWidth;

    x.set(next);
  });

  const renderSet = (key, ref) => (
    <div
      key={key}
      ref={ref}
      aria-hidden={key > 0}
      style={{ display: "flex", flexShrink: 0, alignItems: "center" }}
    >
      {items.map((item) => (
        <div
          key={`${key}-${item}`}
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: gap,
            gap,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: "#6b7280",
            }}
          >
            {item}
          </span>
          <span aria-hidden style={{ color: "#c4c7cc", fontSize: 12 }}>
            ·
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={className}
      role="marquee"
      aria-label={`Tecnologias: ${items.join(", ")}`}
      onPointerEnter={(e) =>
        pauseOnHover && e.pointerType === "mouse" && setPaused(true)
      }
      onPointerLeave={() => setPaused(false)}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "20px 0",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
        // Esmaece as bordas laterais
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div style={{ x, display: "flex", width: "max-content" }}>
        {Array.from({ length: copies }, (_, i) =>
          renderSet(i, i === 0 ? setRef : undefined)
        )}
      </motion.div>
    </div>
  );
}

/* Exemplo de uso:

import TechMarquee from "./TechMarquee";

export default function App() {
  return <TechMarquee speed={50} />;
}

Instalação:  npm install framer-motion
*/
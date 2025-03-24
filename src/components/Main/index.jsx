/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import CardFeatures from '../../hooks/Card/useCardFeatures.jsx'
import InfiniteSlider from '../SliderInfinito/index.jsx'
import ScrollReveal from "../../hooks/ScrollReveal.js/ScrollReveal.jsx";
import './style.css'


const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};


export default function Main ({ texts, navtexts, handleLanguageChange}) {
    const sectionId =  handleLanguageChange === "PT" ? 'sobre' : 'about'; // Determina o ID da seção com base na linguagem

    return (
        <>
            <main className="Main" id={sectionId}>
                <motion.div initial="hidden" animate="visible" variants={textVariant} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h1>{navtexts[1]}</h1>  
                <div className="ABOUT">  
                <ScrollReveal>
                    <p id="Text-About">{texts['about']}</p>
                </ScrollReveal>
                    
                </div>
                </motion.div>
                <section className="Tecnologias">
                    <InfiniteSlider></InfiniteSlider>
                </section>

                <CardFeatures texts={texts} navtexts={navtexts} handleLanguageChange={handleLanguageChange} ></CardFeatures>
            </main>
        </>
    )
}
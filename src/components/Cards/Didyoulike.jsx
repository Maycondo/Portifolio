import PropTypes from 'prop-types';

import ScroollReveal from "../../hooks/ScrollReveal/ScrollReveal"
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Didyoulike.css"


const DidyyouLike = ({ language = 'PT' }) => {
    return (    
        <section className="conteine-didyyou-main">
            <ScroollReveal>
                <div className="conteine-didyyou">
                    <div className="didyyou-course-text">
                        <h1>{language === 'PT' ? 'Gostou do que viu? Vamos criar o proximo juntos.' : 'Did you like what you saw? Let’s create the next one together.'}</h1>
                    </div>
                    <div className="Buttons-didyyou-contatec">
                        <a href="Get-in-touch" id="Get-in-touch">{language === "PT" ? 'Entrar em contato' : 'Get in touch'} <AiOutlineArrowRight/></a>
                    </div>
                </div>
            </ScroollReveal>
        </section>
    )
}

DidyyouLike.propTypes = {
    language: PropTypes.string
};

export default DidyyouLike

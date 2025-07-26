
import { motion } from "framer-motion";
import './PainelAmind.css';
import Imagem from '../../imagens/Imagem.jpeg';



export default function Socialmidias() {


    return (
             <motion.div className="Painel-Admin" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} whileHover={{ scale: 1.02 }} >
                        <div className="Painel-Admin__img">
                           <img src={Imagem} alt="Maycon Douglas"/>
                        </div>
                        <a className="socialContainer containerThree" href="https://www.linkedin.com/notifications/?filter=all" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                        </a>
                    <a className="socialContainer containerTwo" href="https://github.com/Maycondo" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 496 512" className="socialSvg githubSvg">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.5 0-6.2-2-6.2-4.5 0-2.4 2.3-4.3 5.3-4.3 3.2 0 6.1 2 6.1 4.4zM141 384c-.7 2-2.7 3.5-5.2 3.5s-4.9-1.5-5.2-3.5c-.3-2 .7-3.7 2.6-4.3 1.8-.7 4 .2 4.7 1.8.7 1.6.4 3.2-.7 4zm-12.3-7.7c-.3 1.5-2 2.5-3.9 2.2-1.9-.3-3.2-1.7-2.9-3.2.3-1.5 2-2.5 3.9-2.2 1.9.3 3.2 1.7 2.9 3.2zm-10.2-10.5c-.8 1.3-2.8 1.1-4.3-.5-1.5-1.6-1.9-3.7-1-5 .8-1.3 2.8-1.1 4.3.5 1.5 1.6 1.9 3.7 1 5zM244 8C109.3 8 0 117.3 0 252c0 108.9 70.7 201.4 169 234.1 12.3 2.3 16.8-5.4 16.8-12v-42.2c-68.7 14.9-83.2-33.1-83.2-33.1-11.2-28.5-27.3-36.1-27.3-36.1-22.3-15.3 1.7-15 1.7-15 24.6 1.7 37.6 25.2 37.6 25.2 21.9 37.6 57.6 26.7 71.6 20.4 2.2-15.9 8.6-26.7 15.6-32.8-54.8-6.2-112.5-27.4-112.5-122 0-27 9.6-49.1 25.2-66.4-2.5-6.2-10.9-31.2 2.4-65 0 0 20.6-6.6 67.4 25.2 19.5-5.4 40.4-8.1 61.2-8.2 20.8.1 41.7 2.8 61.2 8.2 46.7-31.8 67.3-25.2 67.3-25.2 13.4 33.8 4.9 58.8 2.4 65 15.7 17.3 25.2 39.4 25.2 66.4 0 94.9-57.8 115.7-112.8 121.8 8.8 7.6 16.6 22.6 16.6 45.6v67.6c0 6.6 4.3 14.3 16.8 12C425.3 453.4 496 360.9 496 252 496 117.3 386.7 8 252 8z"/>
                        </svg>
                    </a>
                    <a className="socialContainer containerOne" href="mailto:maycondouglasniculau@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 512 512" className="socialSvg gmailSvg">
                            <path d="M502.3 190.8L327.4 338.2c-20.4 17.5-54.5 17.5-74.9 0L9.7 190.8A48 48 0 0 1 0 152V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v72a48 48 0 0 1-9.7 38.8zM48 208v224c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V208L281.6 361.6c-20.4 17.5-54.5 17.5-74.9 0L48 208z"/>
                        </svg>
                    </a>
                    <a className="socialContainer containerFour" href="https://drive.google.com/file/d/1jFuYr06zjVcjmiQaYE6U_RYTku_L0k1m/view" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 384 512" className="socialSvg curriculoSvg">
                            <path d="M224 136V0H24C10.8 0 0 10.8 0 24v464c0 13.3 10.8 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 304H96v-32h192v32zm0-64H96v-32h192v32zm-64-96c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm96-114.5V128h-88V40h6.1c6.4 0 12.5 2.5 17 7l57.9 57.5c4.5 4.5 7 10.6 7 17z"/>
                        </svg>
                    </a>
    </motion.div>
    )
}

import { motion } from 'framer-motion';
import './Socialmidias.css';


const linkVariants = {
    hidden: { opacity: 0, y: -20 }, 
    visible: { opacity: 1, y: 0 }
};

export default function Socialmidias() {


    return (
         <div className="Social-Midias-Container">
                <div className="Social-Midias">
                    <motion.a  href="https://www.linkedin.com/in/maycon-douglas-b97786306/"  target="_blank" initial="hidden" animate="visible" variants={linkVariants} transition={{ duration: 0.5, delay: 0.1 }}>
                        <i className="bi bi-linkedin"></i>Linkedin
                    </motion.a>
                    <motion.a  href="https://github.com/Maycondo"  target="_blank" initial="hidden" animate="visible" variants={linkVariants} transition={{ duration: 0.5, delay: 0.3 }}>
                        <i className="bi bi-git"></i>Github
                    </motion.a>
                            
                    <motion.a  href="#" initial="hidden" animate="visible" variants={linkVariants} transition={{ duration: 0.5, delay: 0.5 }}>
                        <i className="bi bi-file-text-fill"></i>Curriculo
                    </motion.a>
                </div>
       </div>
    )
}
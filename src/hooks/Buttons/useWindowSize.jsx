import ThemeToggle from '../Buttons/useThemeToggle';
import { motion } from 'framer-motion';
import './style.css';


export default function useWindowSize ({ navtexts = [], CorStyle = () => ({ color: "black" }), handleLanguageChange, handleThemeChange = () => ({ color: "white" })}) {

    

    return (
        <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: "0%" }}    
            exit={{ x: "-100%" }}     
            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1], }}
             className="Nav_animation-wrapper"
    >
        <div className='Nav_animetion'>
               <nav> 
                    <ul>
                        {navtexts.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                            </li>))}
                    </ul>
                </nav>
            <ThemeToggle onThemeChange={ handleThemeChange }/>
                <div className="lingua">
                    <button  className="lingua__button"  style={ CorStyle('PT')}  onClick={() => handleLanguageChange('PT')}>PT</button>
                    <button  className="lingua__button"  style={ CorStyle('EN')}  onClick={() => handleLanguageChange('EN')}>EN</button>
                </div>
        </div>
        </motion.div>
    )
}
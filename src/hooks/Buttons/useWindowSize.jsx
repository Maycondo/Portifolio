import ThemeToggle from '../Buttons/useThemeToggle';
import './style.css';


export default function useWindowSize ({navtexts, CorStyle, handleLanguageChange, handleThemeChange}) {

    

    return (
        <>
               <nav> 
                    <ul>
                        {navtexts.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                            </li>))}
                    </ul>
                </nav>
            <ThemeToggle onThemeChange={handleThemeChange}/>
                <div className="lingua">
                    <button 
                    className="lingua__button" 
                    style={CorStyle('PT')} 
                    onClick={() => handleLanguageChange('PT')}>PT</button>

                    <button 
                    className="lingua__button" 
                    style={CorStyle('EN')} 
                    onClick={() => handleLanguageChange('EN')}>EN</button>
                </div>
        </>
    )
}
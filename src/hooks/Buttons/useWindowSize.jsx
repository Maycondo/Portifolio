import ThemeToggle from '../Buttons/useThemeToggle';
import './style.css';


export default function useWindowSize ({navtexts, CorStyle, handleLanguageChange, handleThemeChange}) {

    

    return (
        <>
            <ul>
                {navtexts.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
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
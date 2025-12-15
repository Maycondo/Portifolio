import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ThemeToggle({ onThemeChange }) {

const [tema, setogleTheme] = useState('ModeDark');

const ModeLight = <i className="bi bi-sun-fill"></i>;
const ModeDark = <i className="bi bi-moon-fill"></i>;


const alternarModo = () => {
    setogleTheme((prevState) => {
        const NewState = prevState === 'ModeLight' ? 'ModeDark' : 'ModeLight';
        document.body.classList.remove(prevState); // Remove a classe anterior do body
        document.body.classList.add(NewState);    // Adiciona a nova classe ao body
        onThemeChange(NewState); // Notifica o pai sobre a mudança de tema
        return NewState;
    });
}


return (    
    <div className="Botao_Modo" >
        <button type='button' onClick={alternarModo} style={{fontSize: '17px'}}>
            {tema === 'ModeDark' ? ModeLight : ModeDark}</button>
    </div>
)}
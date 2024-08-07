import React, { useEffect, useState } from 'react';

export default function Mode_dark_light() {

const [tema, setogleTheme] = useState('ModeLight');
const ModeLight = <i className="bi bi-sun-fill"></i>;
const ModeDark = <i className="bi bi-moon-fill"></i>;


const alternarModo = () => {
     setogleTheme((prevState) => {
     const NewState = prevState === 'ModeDark' ? 'ModeLight' : 'ModeDark';
         document.body.classList.remove(prevState);
         document.body.classList.add(NewState);
     return NewState;
});
}

return (    
    <div className="Botao_Modo">
        <button type='button' onClick={alternarModo}> {tema === 'ModeLight' ? ModeDark : ModeLight}</button>
    </div>
)}
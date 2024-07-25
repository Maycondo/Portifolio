import React, { useState, useEffect } from 'react';


export default function ButtonMode(){


    const Mode_light = '<i class="bi bi-sun-fill"></i>'
    const Mode_dark = <i class="bi bi-moon-fill"></i>

    const [theme, setTheme] = useState('light')

    return (
        <div className="Butto_Mode">
            <button type='button'>{Mode_dark}</button>
        </div>
    )
}
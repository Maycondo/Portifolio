import React, { useEffect, useState } from 'react';

export default function ButtonLingua(){

    const [linguaEN, setLinguaEN] = useState('en');
    const [linguaPT, setLinguapt] = useState('pt')

    




    return(
        <div className="lingua">
            <button className="lingua__button">PT</button>
            <button className="lingua__button">EN</button>
        </div>
    )
}
import React, { useEffect, useState } from 'react';

export default function Animetiontexto() {

    const [messageIndex, setMessageIndex] = useState(0);
    const messages = ["Welcome to my portfolio", "My name is Michael", "I'm a full stack developer",];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            }, 2000);
        
            const timeoutId = setTimeout(() => {
                clearInterval(intervalId);
                setMessageIndex(0);
            }, 10000);
        
            return () => {
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            };
    }, []);

    return(
        <>
          <h1 id="Name-Perso">{messages[messageIndex]}</h1>
        </>
    )

}


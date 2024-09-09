import { useEffect, useState } from 'react';

export default function TextAnimation() {

    const [messageIndex, setMessageIndex] = useState(0);
    const [messages] = useState(["Welcome to my portfolio", "My name is Michael", "I'm a full stack developer",])
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setDisplayedText('')
            setCharIndex(0)
            }, 5000);

            return () => clearInterval(intervalId);
    }, [messages.length]);

    useEffect(() => {
        if(charIndex < messages[messageIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + messages[messageIndex][charIndex])
                setCharIndex((prevIndex) => prevIndex + 1);
            }, 100)

            return () => clearInterval(timeoutId)
        }
        
    }, [charIndex, messageIndex, messages])

    return(
        <>
          <h1 id="Name-Perso">{displayedText}</h1>
        </>
    )

}


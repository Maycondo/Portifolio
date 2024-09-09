import { useState } from 'react';
import './style.css';


export default function ButtonLow() {
    // eslint-disable-next-line no-unused-vars
    const [scroll, setScroll] = useState(0);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        setScroll(document.documentElement.scrollHeight);
    };

    return (
        <div className='Low'>
            <div className="arrow" onClick={scrollToBottom}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
import { useState } from 'react';
import './style.css';


export default function ButtonTop() {
    const [scroll, setScroll] = useState(0)

    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'
         });
         setScroll(0)
    }
   
    return (
        <div className='Top'>
            <div class="arrom_2" onClick={scrollToTop}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    </div>
    )
}
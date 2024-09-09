/* eslint-disable react/prop-types */
import CardFeatures from '../../hooks/Card/useCardFeatures.jsx'
import InfiniteSlider from '../SliderInfinito/index.jsx'
import './style.css'



export default function Main ({ texts, navtexts, handleLanguageChange}) {
    const sectionId =  handleLanguageChange === "PT" ? 'sobre' : 'about';

    return (
        <>
            <main className="Main" id={sectionId}>
                <h1>{navtexts[1]}</h1>
                <div className="ABOUT">  
                    <p id="Text-About">{texts['about']}</p>
                </div>
                <section className="Tecnologias">
                    <InfiniteSlider></InfiniteSlider>
                </section>

                <CardFeatures texts={texts} navtexts={navtexts} handleLanguageChange={handleLanguageChange} ></CardFeatures>
            </main>
        </>
    )
}
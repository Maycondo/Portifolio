/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./carddetails.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export default function Carddetails({ carddetails, onClose }) {
    if (!carddetails) return null;

    const allImages = carddetails.image || [];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [carddetails]);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    };

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="card-backdrop-filter">
            <div className="card-details-project">
                <div className="card-button-close">
                    <button className="close-button" onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <h2 className="name-projetc">{carddetails.title}</h2>
                <div className="card-container">
                    <button className="previous-imagem" onClick={handlePreviousImage}>
                        <GrPrevious />
                    </button>
                        <div className="card-image-container">
                            <img id="imagem-project" src={allImages[currentIndex]} alt={carddetails.title} />
                            <div className="card-project-sites">
                                <a className="socialContainer containerTwo" href={carddetails.github} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 496 512" className="socialSvg githubSvg">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.5 0-6.2-2-6.2-4.5 0-2.4 2.3-4.3 5.3-4.3 3.2 0 6.1 2 6.1 4.4zM141 384c-.7 2-2.7 3.5-5.2 3.5s-4.9-1.5-5.2-3.5c-.3-2 .7-3.7 2.6-4.3 1.8-.7 4 .2 4.7 1.8.7 1.6.4 3.2-.7 4zm-12.3-7.7c-.3 1.5-2 2.5-3.9 2.2-1.9-.3-3.2-1.7-2.9-3.2.3-1.5 2-2.5 3.9-2.2 1.9.3 3.2 1.7 2.9 3.2zm-10.2-10.5c-.8 1.3-2.8 1.1-4.3-.5-1.5-1.6-1.9-3.7-1-5 .8-1.3 2.8-1.1 4.3.5 1.5 1.6 1.9 3.7 1 5zM244 8C109.3 8 0 117.3 0 252c0 108.9 70.7 201.4 169 234.1 12.3 2.3 16.8-5.4 16.8-12v-42.2c-68.7 14.9-83.2-33.1-83.2-33.1-11.2-28.5-27.3-36.1-27.3-36.1-22.3-15.3 1.7-15 1.7-15 24.6 1.7 37.6 25.2 37.6 25.2 21.9 37.6 57.6 26.7 71.6 20.4 2.2-15.9 8.6-26.7 15.6-32.8-54.8-6.2-112.5-27.4-112.5-122 0-27 9.6-49.1 25.2-66.4-2.5-6.2-10.9-31.2 2.4-65 0 0 20.6-6.6 67.4 25.2 19.5-5.4 40.4-8.1 61.2-8.2 20.8.1 41.7 2.8 61.2 8.2 46.7-31.8 67.3-25.2 67.3-25.2 13.4 33.8 4.9 58.8 2.4 65 15.7 17.3 25.2 39.4 25.2 66.4 0 94.9-57.8 115.7-112.8 121.8 8.8 7.6 16.6 22.6 16.6 45.6v67.6c0 6.6 4.3 14.3 16.8 12C425.3 453.4 496 360.9 496 252 496 117.3 386.7 8 252 8z"/>
                                    </svg>
                                </a>
                                  <a className="socialContainer containerTwo" href={carddetails.site}target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 496 512" className="socialSvg globeSvg">
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm160 248c0 22.3-3.6 43.7-10.1 63.7h-72.2c3.9-20.6 6.3-41.8 7.1-63.7h75.2zm-96 0c-.8 23.7-3.5 46.2-7.7 67.7h-112c-4.2-21.5-6.9-44-7.7-67.7h127.4zm-127.4-32c.8-23.7 3.5-46.2 7.7-67.7h112c4.2 21.5 6.9 44 7.7 67.7H184.6zm138.2-96h-109c12.6-39.4 31.2-69.2 54.5-83.4 23.2 14.2 41.8 44 54.5 83.4zM174.3 36.6c-23.2 17.2-43.4 47.9-57 91.4h-66C85.8 84.1 126.8 50.1 174.3 36.6zM56.4 160h75.2c-3.9 20.6-6.3 41.8-7.1 63.7H56.4c1.7-22.4 6.4-43.9 13.5-63.7zm0 127.9h67.9c.8 23.7 3.5 46.2 7.7 67.7H70c-8.1-20.9-13.5-43.3-13.6-67.7zM51.3 352h66c13.6 43.5 33.8 74.2 57 91.4C126.8 430.2 85.8 396.2 51.3 352zm122 27.9h109c-12.6 39.4-31.2 69.2-54.5 83.4-23.2-14.2-41.8-44-54.5-83.4zM321.7 475.4c23.2-17.2 43.4-47.9 57-91.4h66c-34.5 44.2-75.5 78.2-123 91.4zM364.8 352c4.2-21.5 6.9-44 7.7-67.7h67.9c-.1 24.4-5.5 46.8-13.6 67.7h-62zm7.7-127.9c-.8-23.7-3.5-46.2-7.7-67.7h62c8.1 20.9 13.5 43.3 13.6 67.7h-67.9zM321.7 36.6c47.5 13.6 88.5 47.6 123 91.4h-66c-13.6-43.5-33.8-74.2-57-91.4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <button className="next-imagem" onClick={handleNextImage}>
                        <GrNext />
                    </button>
                </div>
            </div>
        </div>
    );
}

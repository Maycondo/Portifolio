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
                <h2>{carddetails.title}</h2>
                <div className="card-container">
                    <button className="previous-imagem" onClick={handlePreviousImage}>
                        <GrPrevious />
                    </button>
                    <div className="card-image-container">
                        <img
                            id="imagem-project"
                            src={allImages[currentIndex]}
                            alt={carddetails.title}
                            style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <button className="next-imagem" onClick={handleNextImage}>
                        <GrNext />
                    </button>
                </div>
            </div>
        </div>
    );
}

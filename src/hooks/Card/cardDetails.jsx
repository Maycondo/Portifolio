/* eslint-disable react/prop-types */



import "./carddetails.css"
import { AiOutlineClose } from "react-icons/ai";


export default function Carddetails ({carddetails, onClose}) {

    if(!carddetails) return null;

    return (
        <div className="card-backdrop-filter">
            <div className="card-details-project">
                <div className="card-button-close">
                    <button className="close-button" onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <h2>{carddetails.title}</h2>
                <div className="card-image">

                </div>
            </div>
        </div>
    )
}
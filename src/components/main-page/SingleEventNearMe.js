import React from "react";
import { useNavigate } from "react-router-dom";

function SingleEventNearMe(props) {

    const navigate = useNavigate();

    const event = props.event
    const id = event.id
    const name = event.name
    const date = event.startTime
    const img = event.img

    const handleDetailButtonClick = (evt) => {
        evt.preventDefault();
        navigate('/')
    }

    return (
        <div className="single-event-near-me">
            <div className="single-event-near-me-image-container">
                <img className="single-event-near-me-image" src={img} alt="event_picture"/>
            </div>
            <div className="single-event-near-me-date">{date}</div>
            <div className="single-event-near-me-title">{name}</div>
            <div className="main-page-event-button-container">
                <button onClick={handleDetailButtonClick} className="main-page-event-button">See Details</button>
            </div>
        </div>
    )
}

export default SingleEventNearMe
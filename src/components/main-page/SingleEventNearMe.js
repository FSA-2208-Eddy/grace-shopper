import React from "react";
import { useNavigate } from "react-router-dom";

function SingleEventNearMe() {

    const navigate = useNavigate();

    return (
        <div className="single-event-near-me">
            <img className="single-event-near-me-image" src="https://m.media-amazon.com/images/I/41rOKnRvgJL._AC_.jpg" alt="event_picture"/>
            <div className="single-event-near-me-date">01/01/2023</div>
            <div className="single-event-near-me-title">Generic Football Game</div>
            <div className="main-page-event-button-container">
                <button className="main-page-event-button">See Details</button>
            </div>
        </div>
    )
}

export default SingleEventNearMe
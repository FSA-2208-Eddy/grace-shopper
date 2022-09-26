import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SingleUpcomingEvent(props){

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
    <div className="single-upcoming-event">
        <div className="single-upcoming-event-image-container">
            <img className="single-upcoming-event-image" src={img} alt="event_picture"/>
        </div>
        <div className="single-upcoming-event-date">{date}</div>
        <div className="single-upcoming-event-title">{name}</div>
        <div className="main-page-event-button-container">
            <button onClick={handleDetailButtonClick} className="main-page-event-button">See Details</button>
        </div>
    </div>
    )
}

export default SingleUpcomingEvent
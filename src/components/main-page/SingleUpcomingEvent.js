import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SingleUpcomingEvent(props){

const navigate = useNavigate();

const handleDetailButtonClick = (evt) => {

}

return (
    <div className="single-upcoming-event">
        <img className="single-upcoming-event-image" src="https://www.apollotheparty.com.au/wp-content/uploads/2019/10/upd_MG_10309-500x500.jpg" alt="event_picture"/>
        <div className="single-upcoming-event-date">01/01/2023</div>
        <div className="single-upcoming-event-title">Cathal's Big Birthday Bash</div>
        <div className="main-page-event-button-container">
            <button onClick={handleDetailButtonClick} className="main-page-event-button">See Details</button>
        </div>
    </div>
)
}

export default SingleUpcomingEvent
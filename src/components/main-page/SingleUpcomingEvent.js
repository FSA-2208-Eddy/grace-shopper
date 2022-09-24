import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SingleUpcomingEvent(){


return (
    <div className="single-upcoming-event">
        <img src="https://www.apollotheparty.com.au/wp-content/uploads/2019/10/upd_MG_10309-500x500.jpg" alt="event_picture"/>
        <div className="featured-event-date">01/01/2023</div>
        <div className="featured-event-name">Cathal's Big Birthday Bash</div>
        <button className="main-page-event-button">See Details</button>
    </div>
)

}

export default SingleUpcomingEvent
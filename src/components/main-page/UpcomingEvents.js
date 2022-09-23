import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function UpcomingEvents() {

  const navigate = useNavigate();


  return (
    <>
    <div id="upcoming-events">
            <div id='upcoming-events-container'>
            <div className="upcoming-events-title">Upcoming Events</div>
                <div className="single-upcoming-event">
                    <img src="https://www.apollotheparty.com.au/wp-content/uploads/2019/10/upd_MG_10309-500x500.jpg" alt="event_picture"/>
                    <div className="featured-event-date">01/01/2023</div>
                    <div className="featured-event-name">Cathal's Big Birthday Bash</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
                <div className="single-upcoming-main-page-">
                    <img src="https://baltimore.org/wp-content/uploads/2020/02/insiders-guide-to-camden-yards-game-shot2-500x500-c-default.jpg"alt="event_picture"/>
                    <div className="featured-main-page-date">01/01/2023</div>
                    <div className="featured-main-page-name">Generic Baseball Game</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
                <div className="single-upcoming-event">
                    <img src="https://mesaartscenter.com/sysimg/main-image-shows-performing-live-chicago-symphony-orchestra-with-riccardo-muti-media-box-image-1-image.jpg"alt="event_picture"/>
                    <div className="featured-event-date">01/01/2023</div>
                    <div className="featured-event-name">Classical Night</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
            </div>
            
    </div>
    </>
  )
}

export default UpcomingEvents
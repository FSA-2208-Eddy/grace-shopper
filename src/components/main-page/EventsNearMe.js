import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function EventsNearMe() {

  const navigate = useNavigate();


  return (
    <>
    <div id="events-near-me">
        <div id='events-near-me-container'>
        <div className="events-near-me-title">Events Near Me</div>
                <div className="single-event-near-me">
                    <img src="https://m.media-amazon.com/images/I/41rOKnRvgJL._AC_.jpg" alt="event_picture"/>
                    <div className="single-event-date">01/01/2023</div>
                    <div className="single-event-title">Generic Football Game</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
                <br/>
                <div className="single-event-near-me">
                    <img src="https://baltimore.org/wp-content/uploads/2020/02/insiders-guide-to-camden-yards-game-shot2-500x500-c-default.jpg"alt="event_picture"/>
                    <div className="single-event-date">01/01/2023</div>
                    <div className="single-event-title">Generic Baseball Game</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
                <br/>
                <div className="single-event-near-me">
                    <img src="https://mesaartscenter.com/sysimg/main-image-shows-performing-live-chicago-symphony-orchestra-with-riccardo-muti-media-box-image-1-image.jpg"alt="event_picture"/>
                    <div className="single-event-date">01/01/2023</div>
                    <div className="single-event-title">Classical Night</div>
                    <button className="main-page-event-button">See Details</button>
                </div>
            </div>
            
    </div>
    </>
  )
}

export default EventsNearMe
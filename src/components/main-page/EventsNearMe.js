import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function EventsNearMe() {

  const navigate = useNavigate();


  return (
    <>
    <div id="events-near-me">
        <h2>Events Near Me</h2>
            <div id='events-near-me-container'>
                <div className="single-event-near-me">
                    <img className='single-event-img'src="https://m.media-amazon.com/images/I/41rOKnRvgJL._AC_.jpg" alt="event_picture"/>
                    <div className="event-date">01/01/2023</div>
                    <h3>Generic Football Game</h3>
                    <button className="event-button">See Details</button>
                </div>
                <br/>
                <div className="single-event-near-me">
                    <img className='single-event-img' src="https://baltimore.org/wp-content/uploads/2020/02/insiders-guide-to-camden-yards-game-shot2-500x500-c-default.jpg"alt="event_picture"/>
                    <div className="event-date">01/01/2023</div>
                    <h3>Generic Baseball Game</h3>
                    <button className="event-button">See Details</button>
                </div>
                <br/>
                <div className="single-event-near-me">
                    <img className='single-event-img'src="https://mesaartscenter.com/sysimg/main-image-shows-performing-live-chicago-symphony-orchestra-with-riccardo-muti-media-box-image-1-image.jpg"alt="event_picture"/>
                    <div className="event-date">01/01/2023</div>
                    <h3>Classical Night</h3>
                    <button className="event-button">See Details</button>
                </div>
            </div>
            
    </div>
    </>
  )
}

export default EventsNearMe
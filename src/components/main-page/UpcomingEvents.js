import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getEvents, getSingleEvent } from '../../store/events/eventSlice';
import SingleUpcomingEvent from './SingleUpcomingEvent';



function UpcomingEvents() {
    const state = useSelector(state => state)
    const events = state.events.events[0]
    // console.log('state: ', state)
    // console.log('events: ',events)
    const navigate = useNavigate();
    

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getEvents())
    },[])

    console.log('getSingleEvent: ', getSingleEvent(1))


    function chooseUpcomingEvents () {
        const upcomingEventsArray = []
        let eventId = 0
        while (upcomingEventsArray.length < 3) {
            const curEvent = getSingleEvent(eventId)
            if (curEvent) {
                console.log('current event data: ',curEvent)
                upcomingEventsArray.push(curEvent)
                eventId++
            } else { eventId++ }
        }
        return upcomingEventsArray
    }

    // console.log('choose upcoming events: ', )

  return (
    <>
    <div id="upcoming-events">
        <div id='upcoming-events-container'>Upcoming Events Title
                <SingleUpcomingEvent event={event}/>
            <div className="single-upcoming-event">
                <img src="https://baltimore.org/wp-content/uploads/2020/02/insiders-guide-to-camden-yards-game-shot2-500x500-c-default.jpg"alt="event_picture"/>
                <div className="featured-event-date">01/01/2023</div>
                <div className="featured-event-name">Generic Baseball Game</div>
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
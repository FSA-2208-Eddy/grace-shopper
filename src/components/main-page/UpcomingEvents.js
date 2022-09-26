import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getEvents } from '../../store/events/eventSlice';
import { getSingleEvent } from '../../store/singleEvent/singleEventSlice';
import SingleUpcomingEvent from './SingleUpcomingEvent';



function UpcomingEvents() {
    
    const eventsStore = useSelector(state => state.events.events)

    const navigate = useNavigate();

    const dispatch = useDispatch()

    let upcomingEventsArray = []

    React.useEffect(() => {
        dispatch(getEvents())
    },[])


    const handleDisplayUpcomingEvents = () => {
        if (eventsStore.length > 0) {
            for (let i = 0; i < 3; i++){
                let curEvent = eventsStore[i];
                upcomingEventsArray.push(curEvent)
            }
        }
    }

    handleDisplayUpcomingEvents()

    
  return (
    <>
        <div className='upcoming-events-container'>
            <h1 className='upcoming-events-title'>Upcoming Events</h1>
            {
                upcomingEventsArray && upcomingEventsArray.map(event => <SingleUpcomingEvent event={event} key = {Math.floor(Math.random()*100)}/>)
            }
        </div>  
    </>
  )
}

export default UpcomingEvents
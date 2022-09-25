import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getEvents } from '../../store/events/eventSlice';
import { getSingleEvent } from '../../store/singleEvent/singleEventSlice';
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
   
    const upcomingEventsArray = []

    // const eventsSorted = [...events]

    // console.log ('events sorted: ',eventsSorted)
  
    


    function chooseUpcomingEvents () {
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


    React.useEffect(() => {
        chooseUpcomingEvents();
        console.log(upcomingEventsArray)
    },[upcomingEventsArray])

    
  return (
    <>
        <div className='upcoming-events-container'>
            <h1 className='upcoming-events-title'>Upcoming Events</h1>
                <SingleUpcomingEvent/>
                <SingleUpcomingEvent/>
                <SingleUpcomingEvent/>
        </div>  
    </>
  )
}

export default UpcomingEvents
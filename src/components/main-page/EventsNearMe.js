import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import SingleEventNearMe from './SingleEventNearMe';
import { getEvents } from '../../store/events/eventSlice';


function EventsNearMe() {

    const eventsStore = useSelector(state => state.events.events);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    let eventsNearMeArray = []

    React.useEffect(() => {
        dispatch(getEvents())
    },[])

    const handleDisplayEventsNearMe = () => {
        if (eventsStore.length > 0) {
            for (let i = 0; i < 3; i++){
                let curEvent = eventsStore[i];
                eventsNearMeArray.push(curEvent)
            }
        }
    }

    handleDisplayEventsNearMe()

  return (

    <div className='events-near-me-container'>
        <h1 className='events-near-me-title'>Events Near Me</h1>   
        {
            eventsNearMeArray && eventsNearMeArray.map(event => <SingleEventNearMe event={event} key = {event.id}/>)
        }        
    </div>

  )
}

export default EventsNearMe
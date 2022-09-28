import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import SingleEventNearMe from './SingleEventNearMe';
import { getEvents } from '../../store/events/eventSlice';
import { getSingleUser } from '../../store/users/singleUserSlice';


function EventsNearMe() {

    const eventsStore = useSelector(state => state.events.events);
    const user = useSelector((state) => state.singleUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const load = async () => {
            dispatch(getSingleUser());
        };
        load();
    }, [dispatch]);
    
    let eventsNearMeArray = []

    React.useEffect(() => {
        dispatch(getEvents())
    },[])

   
    const handleDisplayEventsNearMe = () => {

    if (user.city || user.state || user.country) {
        const filteredByLocationEvents = eventsStore.filter(
            (event) =>
            event.location?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
            event.location?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0 ||
            event.name?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
            event.name?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0
        )
    const names = {};
    let filteredWithoutDuplicateNames = [];

    for (let i = 0; i < filteredByLocationEvents.length; i++) {
      let event = filteredByLocationEvents[i];

      if (names[event.name]) continue;
      names[event.name] = true;
      filteredWithoutDuplicateNames.push(event);
    }
        if (filteredWithoutDuplicateNames.length > 5) {
        while (eventsNearMeArray.length < 5) {
            let random =
            filteredWithoutDuplicateNames[
                Math.floor(filteredWithoutDuplicateNames.length * Math.random())
            ];
            if (!eventsNearMeArray.includes(random)) {
            eventsNearMeArray.push(random);
                }
            }
        }
        if (!eventsNearMeArray.length) {
            for (let i = 0; i < 5; i++) {
              eventsNearMeArray.push(eventsStore[Math.floor(eventsStore.length * Math.random())]);
            }
        }
    }
    let undefinedCheck = false
    let nullCheck = false
    if (user.city === undefined && user.state === undefined && user.country === undefined ) {
        undefinedCheck = true
    }
    if (user.city === null && user.state === null && user.country === null ){
        nullCheck = true
    }

    if (eventsStore.length >= 5 && (undefinedCheck || nullCheck)){
       for (let i = 0; i < 5; i++){
        eventsNearMeArray.push(eventsStore[Math.floor(eventsStore.length * Math.random())]);
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
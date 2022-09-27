import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import SingleEventNearMe from './SingleEventNearMe';
import { getEvents } from '../../store/events/eventSlice';
import { getSingleUser } from '../../store/users/singleUserSlice';


function EventsNearMe() {

    const eventsStore = useSelector(state => state.events.events);
    const userStore = useSelector(state => state)
    const user = useSelector((state) => state.singleUser)
    console.log("user", user)
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

    if (user.city || user.state || user.country) {
        const filteredByLocationEvents = eventsStore.filter(
            (event) =>
            event.location?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
            event.location?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0 ||
            event.name?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
            event.name?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0
        )
        const names = {};
        console.log('names: ',names)
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
  

    //Currently choosing 3 random, will need to choose based on User's location or have default
    // const handleDisplayEventsNearMe = () => {
    //     if (eventsStore.length > 0) {
    //         for (let i = 0; i < 3; i++){
    //             let curEvent = eventsStore[Math.floor(Math.random()*eventsStore.length)];
    //             eventsNearMeArray.push(curEvent)
    //         }
    //     }
    // }

    // handleDisplayEventsNearMe()

    console.log('events near me array: ',eventsNearMeArray)

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
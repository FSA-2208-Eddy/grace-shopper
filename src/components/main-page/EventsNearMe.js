import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SingleEventNearMe from './SingleEventNearMe';


function EventsNearMe() {

  const navigate = useNavigate();

  return (

    <div className='events-near-me-container'>
        <h2 className='events-near-me-title'>Events Near Me</h2>
            <SingleEventNearMe/>
            <SingleEventNearMe/>
            <SingleEventNearMe/>                
    </div>

  )
}

export default EventsNearMe
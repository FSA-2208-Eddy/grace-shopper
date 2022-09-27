import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import EventsNearMe from './EventsNearMe';
import UpcomingEvents from './UpcomingEvents';


function MainPage() {

  const navigate = useNavigate();

  return (
    <div className="main-page-featured-container">
        <Carousel/>

        <div className='featured-events-container'>
            <EventsNearMe/>
            <UpcomingEvents/>
        </div>


    </div>
  )
}

export default MainPage
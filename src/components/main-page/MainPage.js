import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import EventsNearMe from './EventsNearMe';
import UpcomingEvents from './UpcomingEvents';


function MainPage() {

  const navigate = useNavigate();

    // var img1 = document.createElement("img");
    // img1.src = "https://a.cdn-hotels.com/gdcs/production134/d1054/893261d0-5a57-417a-b42d-9ce1c63dcb64.jpg?impolicy=fcrop&w=800&h=533&q=medium";

  const carouselItems = ["image1","image2","image3"]

  return (
    <div className="main-page-featured-container">
        <div className="carousel-container">
            <Carousel data={carouselItems}/>
        </div>

        <div className='featured-events-container'>
            <EventsNearMe/>
            <UpcomingEvents/> 
        </div>
        

    </div>
  )
}

export default MainPage
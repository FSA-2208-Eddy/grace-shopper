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
            {/* <Carousel data={carouselItems}/>
             */}
             <div class='gallery'>
              <span style={{"--i": 1}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 2}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 3}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 4}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 5}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 6}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 7}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
              <span style={{"--i": 8}}>
                <img src="https://assets.reedpopcdn.com/crash-brawler.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/crash-brawler.jpg" alt="" />
              </span>
            </div>
        </div>

        <div className='featured-events-container'>
            <EventsNearMe/>
            <UpcomingEvents/>
        </div>


    </div>
  )
}

export default MainPage
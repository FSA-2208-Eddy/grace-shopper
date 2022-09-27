import React from "react";
import { useSelector } from "react-redux";

function CarouselItem(props){
//useState, value of state is of useSelector, store in variable
  
    const event = props.event
    // const id = event.id
    // const name = event.name
    // const date = event.startTime
    const img = event.img

    
    console.log('carousel props: ',props)
    return(
        // <div className={"carousel-item"} style={{width: props.wd+"%"}}>
        //     {props.data}
        // </div>
        
        <div className="carousel-item">
            <div className="carousel-item-image-container">
                <img className="carousel-item-image" src={img} alt="event_picture"/>
            </div>
            <div className="carousel-item-event-date">Event Date</div>
            <div className="carousel-item-event-title">Event Name</div>
        </div>
    )
}
export default CarouselItem;
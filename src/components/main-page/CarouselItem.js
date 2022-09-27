import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CarouselItem(props){
    const navigate = useNavigate();
    const event = props.event;

    const id = event.id
    const name = event.name
    const date = event.startTime
    const img = event.img
    const idx =  props.idx + 1

    function handleOnClick(evt){
        evt.preventDefault()
        const id = event.id
        navigate(`/events/${id}`)
    }
    return(
        <span className="carousel-span" style={{"--i": idx}}>
            <img onClick={handleOnClick} src={img} alt="" className='carousel-image'/>
            <div className="carousel-image-title">Title</div>
        </span>
    )
}
export default CarouselItem;
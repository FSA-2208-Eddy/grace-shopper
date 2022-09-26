import React from "react";
import { useSelector } from "react-redux";

function CarouselItem(props){
//useState, value of state is of useSelector, store in variable
    // const [eventStore, setEventStore] = useSelector(state => state.events)
    // const currentEvent = [eventStore[0], eventStore[1], eventStore[2]]

    // console.log(currentEvent)

    return(
        <div className={"carousel-item"} style={{width: props.wd+"%"}}>
            {props.data}
        </div>
    )
}
export default CarouselItem;
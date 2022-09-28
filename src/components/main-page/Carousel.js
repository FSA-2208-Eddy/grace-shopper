import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events/eventSlice";
import CarouselItem from "./CarouselItem";
import "../../../public/carousel.css";

function Carousel() {
  const eventsStore = useSelector((state) => state.events.events);

  const dispatch = useDispatch();

  let carouselEventsArray = [];

  React.useEffect(() => {
    dispatch(getEvents());
  }, []);

  //Picking random events from DB to feature
  const handleCarouselEvents = () => {
    if (eventsStore?.length > 0) {
      for (let i = 0; i < 8; i++) {
        let curEvent =
          eventsStore[Math.floor(Math.random() * eventsStore.length)];
        carouselEventsArray.push(curEvent);
      }
    }
  };
  handleCarouselEvents();

  return (
    <div className="carousel-container">
      <div className="gallery">
        {carouselEventsArray &&
          carouselEventsArray.map((event, idx) => (
            <CarouselItem event={event} idx={idx} key={idx} />
          ))}
      </div>
    </div>
  );
}

export default Carousel;

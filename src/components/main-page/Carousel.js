import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events/eventSlice";
import CarouselItem from "./CarouselItem";
import '../../../public/carousel.css'


function Carousel(props) {

    const [carousel, setCarousel] = React.useState(0);

    const eventsStore = useSelector(state => state.events.events)

    const dispatch = useDispatch();

    let carouselEventsArray = []

    React.useEffect(() => {
        dispatch(getEvents())
    },[])

    //Picking random events from DB to feature
    const handleCarouselEvents = () => {
        if (eventsStore.length > 0) {
            for (let i = 0; i < 3; i++){
                let curEvent = eventsStore[Math.floor(Math.random()*200)];
                carouselEventsArray.push(curEvent)
            }
        }
    }
    handleCarouselEvents()

    React.useEffect(()=>{
        if (carousel < 0) {
            setCarousel(props.data.length - 1)
        }else if (carousel >= props.data.length) {
            setCarousel(0)
        }
    }, [carousel,props.data.length])

    //Func that just changes carousel's idx
    function handleCarouselTime() {
        if (carousel < 2){
            setCarousel(carousel + 1)
            console.log('carousel: ', carousel)
        } else {
            setCarousel(carousel - 2)
        }
    }

    //This is what makes the carousel change every 5 seconds:
    // setInterval(handleCarouselTime, 5000)

    //style={{width: 100 * props.data.length + "%", left: -100*carousel+"%"}}
    return (
        <div className="gallery">
            <span className="slider">
      <span style={"--i:1"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:2;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:3;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:4;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:5;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:6;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:7;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
      <span style={"--i:8;"} className="items">
          <img src = "https://www.adweek.com/wp-content/uploads/files/news_article/concert-hed-2014.jpg" alt="event picture"/>
      </span>
  </span>
        </div>
    )
}

export default Carousel;


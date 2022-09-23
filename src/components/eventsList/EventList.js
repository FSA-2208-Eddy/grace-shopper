import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Pagination from './Pagination'
import { getEvents } from '../../store/events/eventSlice'

const EventList = () => {

    const events = useSelector(state => state.events)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getEvents())
    },[])

    return (
        <div id="events-main-container">
            <div id="events-sort-filter">
                <div id="events-sort"> SORT BY:&nbsp;&nbsp;
                <select>
                    <option className="events-option" value="date">Date</option>
                    <option className="events-option" value="abc">Alphabetical</option>
                </select>
                </div>
                <div id="events-filter"> FILTER BY:&nbsp;&nbsp;
                    <select>
                        <option className="events-option" value="Sports">Sports</option>
                        <option className="events-option" value="Music">Music</option>
                        <option className="events-option" value="ArtsAndTheatre">Arts and Theatre</option>
                    </select>
                </div>
            </div>
            <div id="events-list">
                {events.events.map((event)=>
                    <div key={event.id} className="events-listing">
                        <img src={event.img} alt="picture should go here"/>
                        <div className="event-date">{event.startTime}</div>
                        <p>{event.name}</p>
                        <button className="event-button">See Details</button>
                    </div>
                )}
                <div className="events-pagination">
                    <div className="events-pag-number events-active">1</div>
                    <div className="events-pag-number">2</div>
                    <div className="events-pag-number">3</div>
                    <div className="events-pag-number">4</div>
                </div>
            </div>
        </div>
    )
}

export default EventList
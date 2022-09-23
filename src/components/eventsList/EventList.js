import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Pagination from './Pagination'
import { getEvents } from '../../store/events/eventSlice'

const EventList = () => {

    const [currentPage, setCurrentPage] = React.useState(1)

    const events = useSelector(state => state.events.events)
    const dispatch = useDispatch()
    

    React.useEffect(()=>{
        dispatch(getEvents())
    },[])

    const eventsPerPage = 10;
    const indexOfLastPost = currentPage * eventsPerPage;
    const indexOfFirstPost = indexOfLastPost - eventsPerPage;
    const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost)
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentPosts.map((event)=>
                    <div key={event.id} className="events-listing">
                        <img src={event.img} alt="picture should go here"/>
                        <div className="event-date">{event.startTime}</div>
                        <p>{event.name}</p>
                        <button className="event-button">See Details</button>
                    </div>
                )}
                <Pagination postsPerPage={eventsPerPage} totalPosts={events.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </div>
    )
}

export default EventList
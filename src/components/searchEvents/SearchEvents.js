import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { getEvents, getEventsByTag } from "../../store/events/eventSlice";
import { useNavigate } from "react-router-dom";

const SearchEvents = () => {
  let { keywords } = useParams();
  keywords = keywords.split("+");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState("0");
  const [sort, setSort] = React.useState("none");
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getEvents());
  }, []);

  React.useEffect(() => {
    if (filter === "0") {
      dispatch(getEvents());
    } else {
      dispatch(getEventsByTag(filter));
    }
  }, [filter]);

  const filterHandler = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortHandler = (event) => {
    event.preventDefault();
    setSort(event.target.value);
  };

  const allEvents = [...events];

  const cache = {};
  const searchResult = [];

  allEvents.forEach((event) => {
    for (let i = 0; i < keywords.length; i++) {
      let currentWord = keywords[i];
      if (
        event.location?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        event.name?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        event.category?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        event.genre?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        event.subGenre?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0
      ) {
        if (cache[event.name]) continue;
        if (i === keywords.length - 1) {
          cache[event.name] = true;
          searchResult.push(event);
        }
      } else break;
    }
  });

  const eventsSorted = [...searchResult].sort(function (a, b) {
    if (sort === "none") {
      return;
    } else if (sort === "date") {
      let aTime = a.startTime;
      let bTime = b.startTime;
      return aTime.localeCompare(bTime);
    } else if (sort === "abc") {
      return a.name.localeCompare(b.name);
    }
  });

  const eventsPerPage = 10;
  const indexOfLastPost = currentPage * eventsPerPage;
  const indexOfFirstPost = indexOfLastPost - eventsPerPage;
  const currentPosts = eventsSorted.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(eventsSorted.length / eventsPerPage);

  // const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo(0, 0);
  };

  const prevPage = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div id="events-main-container">
      <div id="events-sort-filter">
        <div id="events-sort">
          {" "}
          SORT BY:&nbsp;&nbsp;
          <select onChange={sortHandler}>
            <option className="events-option" value="none">
              None
            </option>
            <option className="events-option" value="date">
              Date
            </option>
            <option className="events-option" value="abc">
              Alphabetical
            </option>
          </select>
        </div>
        <div id="events-filter">
          {" "}
          FILTER BY:&nbsp;&nbsp;
          <select onChange={filterHandler}>
            <option className="events-option" value="0">
              All
            </option>
            <option className="events-option" value="1">
              Sports
            </option>
            <option className="events-option" value="2">
              Music
            </option>
            <option className="events-option" value="3">
              Arts and Theatre
            </option>
            <option className="events-option" value="4">
              Misc
            </option>
          </select>
        </div>
      </div>
      <div id="events-list">
        {currentPosts.map((event) => {
          let date = new Date(event.startTime.split(" ")[0]);
          return (
            <div key={event.id} className="events-listing">
              <img src={event.img} alt="picture should go here" />
              <div className="event-date">{date.toDateString()}</div>
              <p>{event.name}</p>
              <Link to={`/events/${event.id}`}>
                <button className="event-button">See Details</button>
              </Link>
            </div>
          );
        })}
        {/* <Pagination postsPerPage={eventsPerPage} totalPosts={eventsSorted.length} paginate={paginate} currentPage={currentPage}/> */}
        <div id="events-next-prev">
          <button onClick={prevPage} className="event-next-button">
            Prev
          </button>
          <p>{`${currentPage}/${totalPages}`}</p>
          <button onClick={nextPage} className="event-next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;

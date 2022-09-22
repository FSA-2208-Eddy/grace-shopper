import React from 'react'

const EventList = () => {
    return (
        <div id="events-main-container">
            <div id="events-sort-filter">
                <div id="events-sort"> SORT BY:&nbsp;&nbsp;
                <select>
                    <option class="events-option" value="date">Date</option>
                    <option class="events-option" value="abc">Alphabetical</option>
                </select>
                </div>
                <div id="events-filter"> FILTER BY:&nbsp;&nbsp;
                    <select>
                        <option class="events-option" value="Sports">Sports</option>
                        <option class="events-option" value="Music">Music</option>
                        <option class="events-option" value="ArtsAndTheatre">Arts and Theatre</option>
                    </select>
                </div>
            </div>
            <div id="events-list">
                <div class="events-listing">
                    <img alt="picture should go here"/>
                    <div class="event-date">01/01/2023</div>
                    <p>Title of the Event goes here</p>
                    <button class="event-button">See Details</button>
                </div>
                <div class="events-listing">
                    <img alt="picture should go here"/>
                    <div class="event-date">01/01/2023</div>
                    <p>Title of the Event goes here</p>
                    <button class="event-button">See Details</button>
                </div>
                <div class="events-listing">
                    <img alt="picture should go here"/>
                    <div class="event-date">01/01/2023</div>
                    <p>Title of the Event goes here</p>
                    <button class="event-button">See Details</button>
                </div>
                <div class="events-listing">
                    <img alt="picture should go here"/>
                    <div class="event-date">01/01/2023</div>
                    <p>Title of the Event goes here</p>
                    <button class="event-button">See Details</button>
                </div>
                <div class="events-listing">
                    <img alt="picture should go here"/>
                    <div class="event-date">01/01/2023</div>
                    <p>Title of the Event goes here</p>
                    <button class="event-button">See Details</button>
                </div>
                <div class="events-pagination">
                    <div class="events-pag-number events-active">1</div>
                    <div class="events-pag-number">2</div>
                    <div class="events-pag-number">3</div>
                    <div class="events-pag-number">4</div>
                </div>
            </div>
        </div>
    )
}

export default EventList
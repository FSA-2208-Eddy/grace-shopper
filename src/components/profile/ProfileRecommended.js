import React from "react";
import { Link } from "react-router-dom";
function ProfileRecommended({ user, orders, events }) {
  let finalEvents = [];
  if (user.city || user.state || user.country) {
    const filteredByLocationEvents = events.filter(
      (event) =>
        event.location?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
        event.location?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0 ||
        event.name?.toLowerCase().indexOf(user.city?.toLowerCase()) >= 0 ||
        event.name?.toLowerCase().indexOf(user.state?.toLowerCase()) >= 0
    );
    const names = {};
    let filteredWithoutDuplicateNames = [];
    for (let i = 0; i < filteredByLocationEvents.length; i++) {
      let event = filteredByLocationEvents[i];
      if (names[event.name]) continue;
      names[event.name] = true;
      filteredWithoutDuplicateNames.push(event);
    }
    console.log(filteredByLocationEvents);
    console.log(filteredWithoutDuplicateNames);
    if (filteredWithoutDuplicateNames.length > 3) {
      while (finalEvents.length < 3) {
        let random =
          filteredWithoutDuplicateNames[
            Math.ceil(filteredWithoutDuplicateNames.length * Math.random())
          ];
        if (!finalEvents.includes(random)) {
          finalEvents.push(random);
        }
      }
    }
  }
  if (!finalEvents.length) {
    for (let i = 0; i < 3; i++) {
      console.log("inthefor");
      finalEvents.push(events[Math.ceil(events.length * Math.random())]);
    }
  }
  console.log("FINAL", finalEvents);
  return (
    <div className="profile-recommended-events-container">
      <div className="profile-recommended-events-header">
        <h2>Our Picks For You:</h2>
      </div>
      <div className="profile-recommended-events-block">
        {finalEvents?.map((event) => {
          return (
            <Link to={`/events/${event?.id}`} key={event?.id} target="_blank">
              <div className="profile-event-item">
                <img src={event?.img} />
                <div className="profile-event-item-title">
                  <div>{event?.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
        {/* <div className="profile-event-item">
          <div className="profile-event-item-title">
            <div>The Biggest Fight of the Century</div>
          </div>
          <img src="http://musicfeeds.com.au/assets/uploads/Ben-and-Liam_fight-night-e1559785017827.jpg" />
        </div>
        <div className="profile-event-item">
          <img src="https://urbanmatter.com/chicago/wp-content/uploads/2018/07/BristolRoversWayneHile.jpg" />
          <div className="profile-event-item-title">
            <div>Bristol Renaissance Faire</div>
          </div>
        </div>
        <div className="profile-event-item">
          <img src="https://media.npr.org/assets/img/2014/01/28/120196117-8cad7b866486eb420c58e24af826c2238af8a477-s1100-c50.jpg" />
          <div className="profile-event-item-title">
            <div>Pete Seeger Concert</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProfileRecommended;

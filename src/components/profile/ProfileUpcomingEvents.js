import React from "react";
import { Link } from "react-router-dom";

function ProfileUpcomingEvents({ orders }) {
  const upcoming = orders.orders?.filter((item) => {
    const start = Date.parse(item.events[0].startTime);
    const now = Date.now();
    let daysUntil = Math.ceil((start - now) / 86400000);
    if (daysUntil <= 30) return true;
    else return false;
  });
  console.log("UPCOMING", upcoming);
  return (
    <div className="profile-upcoming-tickets-container">
      <div className="profile-upcoming-tickets-header">
        <h2>Your Upcoming Events</h2>
      </div>
      <div className="profile-upcoming-tickets-item-container">
        {upcoming.length > 0 ? (
          upcoming.map((item) => {
            const start = Date.parse(item.events[0].startTime);
            const now = Date.now();
            const daysUntil = Math.ceil((start - now) / 86400000);
            return (
              <Link to={`/events/${item.events[0].id}`} key={item.id}>
                <div className="profile-upcoming-tickets-item">
                  <div className="profile-upcoming-tickets-item-title">
                    {`${daysUntil} ${daysUntil > 1 ? "Days" : "Day"} Until: ${
                      item.events[0].name
                    }`}
                  </div>
                  <div className="profile-upcoming-tickets-item-image-container">
                    <img src={item.events[0].img} />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>Events happening within 30 days will show here.</div>
        )}
      </div>
    </div>
  );
}

export default ProfileUpcomingEvents;

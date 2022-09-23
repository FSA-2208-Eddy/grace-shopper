import React from "react";

function ProfileUpcomingEvents() {
  return (
    <div className="profile-upcoming-tickets-container">
      <div className="profile-upcoming-tickets-header">
        <h2>Your Upcoming Events</h2>
      </div>
      <div className="profile-upcoming-tickets-item-container">
        <div className="profile-upcoming-tickets-item">
          <div className="profile-upcoming-tickets-item-title">
            New Abnormal: The Strokes | September 25, 2022
          </div>
          <div className="profile-upcoming-tickets-item-image-container">
            <img src="https://s1.ticketm.net/dam/a/84e/4d1720db-9677-413c-b844-2cd22f1f484e_1313551_TABLET_LANDSCAPE_LARGE_16_9.jpg" />
          </div>
        </div>
        <div className="profile-upcoming-tickets-item">
          <div className="profile-upcoming-tickets-item-title">
            Arcade Fire -- Amsterdam, Netherlands | August 1, 2023
          </div>
          <div className="profile-upcoming-tickets-item-image-container">
            <img src="https://i.guim.co.uk/img/media/da207ed976e1b316bab8a8ae547b6dbdc992911f/504_0_4674_2805/master/4674.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0f625bcdff3a9aede290d4cfa832dcfa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpcomingEvents;

import React from "react";
function ProfileRecommended() {
  return (
    <div className="profile-recommended-events-container">
      <div className="profile-recommended-events-header">
        <h2>Our Picks For You:</h2>
      </div>
      <div className="profile-recommended-events-block">
        <div className="profile-event-item">
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
        </div>
      </div>
    </div>
  );
}

export default ProfileRecommended;

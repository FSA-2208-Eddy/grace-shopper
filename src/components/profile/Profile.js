import ProfileMenu from "./ProfileMenu";
import ProfileRecommended from "./ProfileRecommended";
import ProfileCart from "./ProfileCart";
import ProfileUpcomingEvents from "./ProfileUpcomingEvents";
import React from "react";

function Profile() {
  return (
    <>
      <div className="profile-main-container">
        <ProfileMenu />
        <div className="profile-cart-events-container">
          <ProfileRecommended />
          <ProfileCart />
          <ProfileUpcomingEvents />
        </div>
      </div>
    </>
  );
}

export default Profile;

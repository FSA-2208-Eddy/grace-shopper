import ProfileMenu from "./ProfileMenu";
import ProfileRecommended from "./ProfileRecommended";
import ProfileCart from "./ProfileCart";
import ProfileUpcomingEvents from "./ProfileUpcomingEvents";
import ProfilePurchaseHistory from "./ProfilePurchaseHistory";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "../../store/users/userSlice";

function Profile() {
  console.log(window.localStorage);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getSingleUser());
  }, []);
  console.log("user", user);
  return (
    <>
      <div className="profile-main-container">
        <ProfileMenu user={user} />
        <div className="profile-cart-events-container">
          <ProfileRecommended user={user} />
          <ProfileCart user={user} />
          <ProfileUpcomingEvents user={user} />
          <ProfilePurchaseHistory user={user} />
        </div>
      </div>
    </>
  );
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
function ProfileMenu({ user }) {
  return (
    <div className="profile-menu-container">
      <div className="profile-header">
        <h1>Profile Overview</h1>
      </div>
      <div className="profile-account-information-container">
        <div className="profile-name-container">{`${user.firstName} ${user.lastName}`}</div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={user.img}
            alt="profile picture"
          />
        </div>
        <Link to="/profile/edit">Edit Profile</Link>
        <div className="profile-email-container">
          <h3>Email</h3>
          <div
            className={user?.email?.length > 21 ? "profileLargeEmail" : null}
          >
            {user.email}
          </div>
          <Link to="/profile/edit">Edit Email</Link>
        </div>
        <div className="profile-address-container">
          <h3>Location</h3>
          {user.city && user.state && user.country ? (
            <>
              <div>{`${user.city}, ${user.state}, ${user.country}`}</div>
            </>
          ) : (
            <div>No location selected.</div>
          )}

          <Link to="/profile/edit">Edit Address</Link>
        </div>
      </div>
      <div className="profile-settings-container">
        <div id="profile-setting-1">My Tickets</div>
        <div id="profile-setting-2">My Purchases</div>
        <div id="profile-setting-3">Manage Payment</div>
      </div>
    </div>
  );
}

export default ProfileMenu;

import React from "react";
function ProfileMenu() {
  return (
    <div className="profile-menu-container">
      <div className="profile-header">
        <h1>Profile Overview</h1>
      </div>
      <div className="profile-account-information-container">
        <div className="profile-name-container">Jane Doe</div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src="https://www.pngkey.com/png/detail/810-8105695_person-icon-grey-person-icon-grey-png.png"
            alt="profile picture"
          />
        </div>
        <a href="google.com">Edit Profile</a>
        <div className="profile-email-container">
          <h3>Email</h3>
          <div>example.email@gmail.com</div>
          <a href="google.com">Edit Email</a>
        </div>
        <div className="profile-address-container">
          <h3>Address</h3>

          <div>2000 Fake Blvd</div>
          <div>Chicago, IL 12345</div>

          <a href="google.com">Edit Address</a>
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

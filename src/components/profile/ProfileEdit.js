import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfileEdit() {
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  //   useEffect(() => {
  //     dispatch(fetchUser());
  //   }, [dispatch]);
  //   const profile = useSelector((state) => state.user);

  //   const handleSubmit = async (evt) => {
  //     evt.preventDefault();
  //     await dispatch(editUser({ id, name: name.length ? name : profile.name }));
  //     Navigate("/");
  //   };

  return (
    <div className="profile-edit-container-main">
      <div className="profile-edit-container">
        <h1>My Profile</h1>
        <h2>Edit your information using the form below</h2>
        <form id="profile-edit-form">
          <label className="profile-edit-label" for="name">
            Profile Name
          </label>
          <input
            placeholder="enter first and last name"
            className="profile-edit-input"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label className="profile-edit-label" for="profile-picture">
            Profile Picture
          </label>
          <input
            placeholder="enter image url"
            className="profile-edit-input"
            type="text"
            name="profile-picture"
            onChange={(e) => setPictureUrl(e.target.value)}
          ></input>
          <label className="profile-edit-label" for="email">
            Email
          </label>
          <input
            placeholder="enter email"
            className="profile-edit-input"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="profile-edit-label" for="address">
            Address Line 1
          </label>
          <input
            className="profile-edit-input"
            type="text"
            name="address"
            placeholder="enter street address"
            onChange={(e) => setAddress1(e.target.value)}
          ></input>
          <label className="profile-edit-label" for="address2">
            Address Line 2
          </label>
          <input
            className="profile-edit-input"
            type="text"
            name="address2"
            placeholder="enter city, state/region, zip, country"
            onChange={(e) => setAddress2(e.target.value)}
          ></input>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;

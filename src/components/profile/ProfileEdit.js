import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../../store/users/singleUserSlice";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleUser());
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      updateUser({
        id: user.id,
        firstName: firstName.length ? firstName : user.firstName,
        lastName: lastName.length ? lastName : user.lastName,
        img: pictureUrl.length ? pictureUrl : user.img,
        email: email.length ? email : user.email,
        city: city.length ? city : user.city,
        state: state.length ? state : user.state,
        country: country.length ? country : user.country,
      })
    );
    navigate("/profile");
  };

  return (
    <div className="profile-edit-container-main">
      <div className="profile-edit-container">
        <h1>My Profile</h1>
        <h2>Edit your information using the form below</h2>
        <form id="profile-edit-form" onSubmit={handleSubmit}>
          <label className="profile-edit-label" htmlFor="first name">
            First Name
          </label>
          <input
            placeholder={user.firstName}
            className="profile-edit-input"
            type="text"
            name="first name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="last name">
            Last Name
          </label>
          <input
            placeholder={user.lastName}
            className="profile-edit-input"
            type="text"
            name="last name"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="profile-picture">
            Profile Picture
          </label>
          <input
            placeholder={
              user.img ===
              "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                ? "enter an image url"
                : user.img
            }
            className="profile-edit-input"
            type="text"
            name="profile-picture"
            onChange={(e) => setPictureUrl(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="email">
            Email
          </label>
          <input
            placeholder={user.email}
            className="profile-edit-input"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="city">
            City
          </label>
          <input
            className="profile-edit-input"
            type="text"
            name="city"
            placeholder={user.city ? user.city : "enter city"}
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="state">
            State/Region
          </label>
          <input
            className="profile-edit-input"
            type="text"
            name="state"
            placeholder={user.state ? user.state : "enter state/region"}
            onChange={(e) => setState(e.target.value)}
          ></input>
          <label className="profile-edit-label" htmlFor="country">
            Country
          </label>
          <input
            className="profile-edit-input"
            type="text"
            name="country"
            placeholder={user.country ? user.country : "enter country"}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;

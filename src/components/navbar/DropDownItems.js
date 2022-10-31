import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/login/loginSlice";

function DropDownItems({ setDropDown, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    // dispatch(toggle())
    navigate("/");
  };

  return (
    <>
      <div className="navbar-dropdown-container">
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          <Link to={window.localStorage.token ? "/profile" : "/login"}>
            👤 Profile
          </Link>
        </li>
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          <Link to="/profile/checkout">🛒 Your Cart</Link>
        </li>
        <div className="navbar-links-dropdown">
          <Link to="/events" onClick={() => setDropDown(false)}>
            All Events
          </Link>
          <Link to="/events/type/music" onClick={() => setDropDown(false)}>
            Music
          </Link>
          <Link to="/events/type/sports" onClick={() => setDropDown(false)}>
            Sports
          </Link>
          <Link
            to="/events/type/artsandtheatre"
            onClick={() => setDropDown(false)}
          >
            Arts/Theatre
          </Link>
          <Link to="/events/type/misc" onClick={() => setDropDown(false)}>
            Misc
          </Link>
        </div>
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          {loggedIn ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </div>
    </>
  );
}

export default DropDownItems;

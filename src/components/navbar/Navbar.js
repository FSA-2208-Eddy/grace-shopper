import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/tickitLogo.png";
import cog from "../images/cog3.png";
import { DropDownItems } from "../";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  setValue,
} from "../../store/orders/itemNumberSlice";

function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchBarInput, setSearchBarInput] = React.useState("");
  const [dropDown, setDropDown] = React.useState(false);

  const login = useSelector((state) => state.value);
  const cart = useSelector((state) => state.cart.cart);
  const itemCount = useSelector((state) => state.itemCount.value);

  React.useEffect(() => {
    const loginCheck = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get("/api/auth", {
          headers: {
            authorization: token,
          },
        });
        if (data) {
          setLoggedIn(true);
        }
      }
    };
    loginCheck();
  }, []);
  React.useEffect(() => {
    const loadCounter = async () => {
      if (window.localStorage.getItem("token")) {
        const token = window.localStorage.getItem("token");
        const { data } = await axios.put(
          "/api/users/cart-items",
          {},
          { headers: { authorization: token } }
        );
        console.log(data, "CART INSIDE THE USE EFFECT");
        dispatch(setValue(data.lineitems.length));
      } else {
        let localCart = JSON.parse(window.localStorage.getItem("cart"));
        dispatch(setValue(localCart.lineitems.length));
      }
    };
    loadCounter();
  }, [loggedIn]);

  const handleSearch = () => {
    if (searchBarInput === "") {
      return;
    }
    let keywords = searchBarInput.split(" ").join("+");
    setSearchBarInput("");
    navigate(`/events/search/${keywords}`);
  };

  return (
    <>
      <nav id="navbar">
        <Link to="/" id="navbar-logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar-links">
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

        <div
          className="out-of-drop-down-cart"
          onClick={() => navigate("/profile/checkout")}
        >
          <img
            id="out-of-drop-down-cart"
            src="../../../pngfind.com-cart-icon-png-1434613.png"
            alt="shopping cart icon"
          />

          <div className={itemCount ? "out-of-drop-down-cart-items" : null}>
            {itemCount ? itemCount : null}
          </div>
        </div>
        <div className="login-logout-container">
          <img
            id="settings-icon"
            src={cog}
            alt="settings"
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
        {dropDown ? (
          <ul>
            <DropDownItems
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setDropDown={setDropDown}
            />
          </ul>
        ) : (
          <></>
        )}
      </nav>
      <div className="navbar-searchbar-container">
        <div className="inner-searchbar-container">
          <div className="searchbar-icon"></div>
          <input
            type="text"
            placeholder="Search by location, artist, genre..."
            onChange={(e) => {
              setSearchBarInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                handleSearch();
              }
            }}
            value={searchBarInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

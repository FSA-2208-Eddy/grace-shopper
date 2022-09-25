import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeItemFromCart } from "../../store/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProfileCart({ cart }) {
  const linkStyle = { textDecoration: "none" };
  const dispatch = useDispatch();
  function handleDelete(event) {
    event.preventDefault();
    let lineItemId = event.target.getAttribute("value");
    dispatch(removeItemFromCart(lineItemId));
  }
  console.log("cart", cart);
  return (
    <div className="profile-cart-container">
      <div className="profile-cart-header">
        <h2>Your Cart</h2>
        <Link style={linkStyle} to="/profile/checkout">
          <div className="profile-cart-checkout">Checkout (3 Items)</div>
        </Link>
      </div>
      <div className="profile-cart-item-container">
        {cart?.lineitems?.length > 0 ? (
          cart?.lineitems?.map((item) => {
            return (
              <div className="profile-cart-item" key={item.id}>
                <div className="profile-cart-item-picture-container">
                  <img src={item.events[0].img} />
                </div>
                <div className="profile-cart-item-title">
                  {item.events[0].name}
                </div>
                <div className="profile-cart-item-address">
                  {item.events[0].location}
                </div>
                <div className="profile-cart-item-price">$50</div>
                <div className="profile-cart-item-seat">
                  Seat: <span>{item.seat}</span>
                </div>
                <div className="profile-cart-item-available">
                  {item.events[0].tickets}
                </div>
                <div
                  className="profile-cart-item-delete"
                  value={item.id}
                  key={item.id}
                  onClick={handleDelete}
                >
                  Remove
                </div>
              </div>
            );
          })
        ) : (
          <div className="profile-empty-cart">No Events in cart</div>
        )}
        {/* <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc=" />
          </div>
          <div className="profile-cart-item-title">Generic Concert</div>
          <div className="profile-cart-item-address">Chicago, IL</div>
          <div className="profile-cart-item-price">$29.95</div>
          <div className="profile-cart-item-seat">
            Seat: <span>D9</span>
          </div>
          <div className="profile-cart-item-available">60 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div>
        <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbraSe2Z1jmuTdU0lj8i8nAFqiaz7BBzPMxg&usqp=CAU" />
          </div>
          <div className="profile-cart-item-title">
            Cathal's Big Birthday Extravaganza-Palooza
          </div>
          <div className="profile-cart-item-address">Dublin, Ireland</div>
          <div className="profile-cart-item-price">$399.99</div>
          <div className="profile-cart-item-seat">
            Seat: <span>F3</span>
          </div>
          <div className="profile-cart-item-available">3 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div>
        <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NYG_wbg.png" />
          </div>
          <div className="profile-cart-item-title">The Big Game</div>
          <div className="profile-cart-item-address">New York, NY</div>
          <div className="profile-cart-item-price">$150.00</div>
          <div className="profile-cart-item-seat">
            Seat: <span>A10</span>
          </div>
          <div className="profile-cart-item-available">10 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div> */}
      </div>
    </div>
  );
}

export default ProfileCart;

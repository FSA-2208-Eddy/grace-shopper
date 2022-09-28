import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeItemFromCart } from "../../store/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProfileCart({ cart, orders }) {
  const linkStyle = {
    textDecoration: "none",
    backgroundColor: "#ff8e3c",
    color: "black",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
  };
  const checkoutStyle = { textDecoration: "none" };
  const dispatch = useDispatch();
  async function handleDelete(event) {
    event.preventDefault();
    let lineItemId = event.target.getAttribute("value");
    console.log(lineItemId);
    await dispatch(removeItemFromCart(lineItemId));
    setClicked(!clicked);
  }
  const [clicked, setClicked] = useState(false);
  return (
    <div className="profile-cart-container">
      <div className="profile-cart-header">
        <h2>Your Cart</h2>
        <Link style={checkoutStyle} to="/profile/checkout">
          <div className="profile-cart-checkout">{`Checkout (${
            cart?.lineitems?.length || 0
          } ${cart?.lineitems?.length === 1 ? "Item" : "Items"})`}</div>
        </Link>
      </div>
      <div className="profile-cart-item-container">
        {cart?.lineitems?.length > 0 ? (
          cart?.lineitems?.map((item) => {
            console.log(item.id);
            return (
              <div className="profile-cart-item" key={item?.id}>
                <div className="profile-cart-item-picture-container">
                  <img src={item?.events[0].img} />
                </div>
                <div className="profile-cart-item-title">
                  {item?.events[0].name}
                </div>
                <div className="profile-cart-item-address">
                  {item?.events[0].location}
                </div>
                <div className="profile-cart-item-price">$50</div>
                <div className="profile-cart-item-seat">
                  Seat: <span>{item?.seat.split(";").join(", ")}</span>
                </div>
                <div className="profile-cart-item-available">
                  {item?.events[0].tickets}
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
          <div className="profile-empty-cart">
            <img src="../../../toppng.com-shopping-cart-512x512.png" />
            <div
              style={{
                fontSize: "28px",
                marginBottom: "10px",
                color: "rgb(60,60,60)",
              }}
            >
              Your shopping cart is empty
            </div>
            <div
              style={{
                marginBottom: "10px",
                color: "rgb(130,130,130)",
              }}
            >
              Once you have items, checkout from here or use the cart icon in
              the top right.
            </div>
            <Link style={linkStyle} to="/events">
              <div className="profile-view-events">View Available Events</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCart;

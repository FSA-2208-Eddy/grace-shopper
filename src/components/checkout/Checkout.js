import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  removeItemFromCart,
  checkoutCart,
} from "../../store/cart/cartSlice";
import axios from "axios";
import CheckoutDone from "./CheckoutDone";
import {
  increment,
  decrement,
  incrementByAmount,
  setValue,
} from "../../store/orders/itemNumberSlice";

const Checkout = ({ loggedIn }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkedOut, setCheckedOut] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(getCart());
      setCheckedOut(false);
    }
  }, []);

  React.useEffect(() => {}, [finalCart]);

  let finalCart = { lineitems: [] };

  if (!window.localStorage.getItem("token")) {
    finalCart = JSON.parse(window.localStorage.getItem("cart"));
  } else {
    finalCart = cart;
  }

  let total = 0;
  finalCart.lineitems.forEach((element) => {
    total += element.events[0].price * element.qty;
  });

  function handleDelete(event) {
    if (window.localStorage.getItem("token")) {
      event.preventDefault();
      let lineItemId = event.target.getAttribute("value");
      console.log(lineItemId);
      dispatch(removeItemFromCart(lineItemId));
      dispatch(decrement());
    } else {
      event.preventDefault();
      let lineItemId = event.target.getAttribute("value");
      let cart = JSON.parse(window.localStorage.getItem("cart"));
      let lineitems = cart.lineitems.filter((element) => {
        return element.id != lineItemId;
      });
      window.localStorage.setItem(
        "cart",
        JSON.stringify({ lineitems: lineitems })
      );
      dispatch(decrement());

      setRefresh(!refresh);
    }
  }

  async function handleCheckout() {
    if (window.localStorage.getItem("token")) {
      await dispatch(checkoutCart());
      dispatch(setValue(0));
      // testCheckout();
    } else {
      if (email === "") {
        alert("Please enter an email address to continue.");
        return;
      }
      const cartToCheck = JSON.parse(window.localStorage.getItem("cart"));
      const { data } = await axios.put("/api/users/guest-checkout", {
        cart: cartToCheck,
        email: email,
      });
      await axios.put("api/users/guest-checkout-seat", {
        order: data.order,
        events: data.events,
      });
      dispatch(setValue(0));
      window.localStorage.setItem("cart", JSON.stringify({ lineitems: [] }));
      // testCheckout();
    }
  }

  async function testCheckout() {
    const { data } = await axios.post("api/stripe/create-checkout-session", {
      cart: finalCart,
    });
    window.location.replace(`${data.url}`);
  }

  return (
    <div className="checkout-cart-events-container">
      <div className="checkout-cart-container">
        <>
          <div className="checkout-cart-header">
            <h2>Review Your Order</h2>
          </div>
          <div className="checkout-cart-item-container">
            {finalCart.lineitems.length > 0 ? (
              finalCart.lineitems.map((item) => (
                <div key={item.id} className="checkout-cart-item">
                  <div className="checkout-cart-item-picture-container">
                    <img src={item.events[0].img} />
                  </div>
                  <div className="checkout-cart-item-title">
                    {item.events[0].name}
                  </div>
                  <div className="checkout-cart-item-address">
                    {item.events[0].location}
                  </div>
                  <div className="checkout-cart-item-price">
                    Price: ${item.events[0].price}
                  </div>
                  <div className="checkout-cart-item-price">
                    QTY: {item.qty}
                  </div>
                  <div className="checkout-cart-item-seat">
                    Seat: <span>{item.seat.split(";").join(", ")}</span>
                  </div>
                  <div className="checkout-cart-item-available">
                    {item.events[0].tickets} Seats Available
                  </div>
                  <div
                    onClick={handleDelete}
                    value={item.id}
                    key={item.id}
                    className="checkout-cart-item-delete"
                  >
                    Remove
                  </div>
                </div>
              ))
            ) : (
              <div>Your Cart is Empty</div>
            )}
          </div>
          <div className="checkout-cart-header">
            <h2>Your Total: ${total.toFixed(2)}</h2>
          </div>
          {!window.localStorage.getItem("token") ? (
            <div className="checkout-card-info">
              Email:{" "}
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              ></input>
            </div>
          ) : (
            <div></div>
          )}
          <div onClick={handleCheckout} className="checkout-button">
            Checkout
          </div>
        </>
      </div>
    </div>
  );
};

export default Checkout;

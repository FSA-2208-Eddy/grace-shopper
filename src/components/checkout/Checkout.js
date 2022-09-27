import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  removeItemFromCart,
  checkoutCart,
} from "../../store/cart/cartSlice";
import axios from "axios";
import CheckoutDone from "./CheckoutDone";

const Checkout = ({loggedIn}) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [checkedOut, setCheckedOut] = React.useState(false);
  const [email, setEmail] = React.useState('')
  const [refresh, setRefresh] = React.useState(true)

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(getCart());
      setCheckedOut(false);
    }
  }, []);

  React.useEffect(()=>{
  },[finalCart])

  let finalCart = {lineitems:[]}

  if (!window.localStorage.getItem('token')) {
    finalCart = JSON.parse(window.localStorage.getItem('cart'))
  } else {
    finalCart = cart
  }

  let total = 0
  finalCart.lineitems.forEach((element) => {
    total += (element.events[0].price * element.qty)
  })

  function handleDelete(event) {
    if (window.localStorage.getItem('token')) {
      event.preventDefault();
      let lineItemId = event.target.getAttribute("value");
      console.log(lineItemId);
      dispatch(removeItemFromCart(lineItemId));
    } else {
      event.preventDefault();
      let lineItemId = event.target.getAttribute("value");
      let cart = JSON.parse(window.localStorage.getItem('cart'))
      let lineitems = cart.lineitems.filter((element) => {
        return element.id != lineItemId
      })
      window.localStorage.setItem('cart', JSON.stringify({lineitems: lineitems}))
      setRefresh(!refresh)
    }
  }

  async function handleCheckout() {
    if (window.localStorage.getItem('token')) {
      dispatch(checkoutCart());
      setCheckedOut(true);
    } else {
      const cartToCheck = JSON.parse(window.localStorage.getItem('cart'))
      await axios.put('/api/users/guest-checkout', {
        cart: cartToCheck,
        email: email
      })
      window.localStorage.setItem('cart', JSON.stringify({lineitems: []}))
      setCheckedOut(true)
    }
  }

  return (
    <div className="checkout-cart-events-container">
      <div className="checkout-cart-container">
        {checkedOut ? (
          <CheckoutDone loggedIn={loggedIn} email={email} />
        ) : (
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
                    <div className="checkout-cart-item-price">Price: ${item.events[0].price}</div>
                    <div className="checkout-cart-item-price">QTY: ${item.qty}</div>
                    <div className="checkout-cart-item-seat">
                      Seat: <span>{item.seat}</span>
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
              <h2>Your Total: ${total}</h2>
            </div>
            {!window.localStorage.getItem('token') ? <div className="checkout-card-info">
              Email: <input onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Email"></input>
            </div> : <div></div>}
            <div className="checkout-card-info">
              Credit Card Info: <input placeholder="XXXX-XXXX-XXXX-XXXX"></input>
            </div>
            <div onClick={handleCheckout} className="checkout-button">
              Checkout
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;

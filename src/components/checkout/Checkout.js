import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, removeItemFromCart, checkoutCart } from "../../store/cart/cartSlice";
import axios from "axios";
import CheckoutDone from "./CheckoutDone";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [checkedOut, setCheckedOut] = React.useState(false)

  React.useEffect(() => {
    dispatch(getCart());
    setCheckedOut(false)
  }, []);

  function handleDelete(event) {
    event.preventDefault()
    let lineItemId = event.target.getAttribute('value')
    console.log(lineItemId)
    dispatch(removeItemFromCart(lineItemId))
  }

  async function handleCheckout() {
    dispatch(checkoutCart())
    setCheckedOut(true)
  }

  return (
    <div className="checkout-cart-events-container">
      <div className="checkout-cart-container">
        {checkedOut ? <CheckoutDone/> : <>
        <div className="checkout-cart-header">
          <h2>Review Your Order</h2>
        </div>
        <div className="checkout-cart-item-container">
          {cart.lineitems.length > 0 ? cart.lineitems.map((item) => <div key={item.id} className="checkout-cart-item">
            <div className="checkout-cart-item-picture-container">
              <img src={item.events[0].img} />
            </div>
            <div className="checkout-cart-item-title">{item.events[0].name}</div>
            <div className="checkout-cart-item-address">{item.events[0].location}</div>
            <div className="checkout-cart-item-price">$29.95</div>
            <div className="checkout-cart-item-seat">
              Seat: <span>{item.seat}</span>
            </div>
            <div className="checkout-cart-item-available">
              {item.events[0].tickets} Seats Available
            </div>
            <div onClick={handleDelete} value={item.id} key={item.id} className="checkout-cart-item-delete">Remove</div>
          </div>) : <div>Your Cart is Empty</div>}
        </div>
        <div className="checkout-cart-header">
          <h2>Your Total: $500</h2>
        </div>
        <div onClick={handleCheckout} className="checkout-button">Checkout</div>
        </>}
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import { Link } from "react-router-dom";

const CheckoutDone = ({loggedIn}) => {
    console.log(loggedIn)
    return (
        <>
        <div className="checkout-cart-events-container">
        <div className="checkout-cart-container">
            <div className="checkout-cart-header">
                <h2>Thank you for your order! An email confirmation has been sent to your email address.</h2>
            </div>
            {loggedIn ? <div className="checkout-cart-header">
                <h2>You can see your recently purchased orders on your profile.</h2>
            </div> : <div className="checkout-cart-header"><h2>If you create an account using the same email, you can view your orders.</h2></div>}
            {loggedIn ? <Link to="/profile">Back to Profile</Link> : <Link to="/">Back to Home</Link>}
        </div>
        </div>
        </>
    )
}

export default CheckoutDone
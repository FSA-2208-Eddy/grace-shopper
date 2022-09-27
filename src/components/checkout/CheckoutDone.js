import React from "react";
import { Link } from "react-router-dom";

const CheckoutDone = () => {
    return (
        <>
        <div className="checkout-cart-header">
            <h2>Thank you for your order! An email confirmation has been sent to your email address.</h2>
        </div>
        <div className="checkout-cart-header">
            <h2>You can see your recently purchased orders on your profile.</h2>
        </div>
        <Link to="/profile">Back to Profile</Link>
        </>
    )
}

export default CheckoutDone
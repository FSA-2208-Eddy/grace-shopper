import React from "react";
import { Link } from "react-router-dom";

const CheckoutDone = () => {
    return (
        <>
        <div className="checkout-cart-header">
            <h2>Thank you for your order! You can see your upcoming events on your profile page</h2>
        </div>
        <Link to="/profile">Back to Profile</Link>
        </>
    )
}

export default CheckoutDone
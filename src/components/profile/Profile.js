import ProfileMenu from "./ProfileMenu";
import ProfileRecommended from "./ProfileRecommended";
import ProfileCart from "./ProfileCart";
import ProfileUpcomingEvents from "./ProfileUpcomingEvents";
import ProfilePurchaseHistory from "./ProfilePurchaseHistory";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "../../store/users/userSlice";
import { getCart } from "../../store/cart/cartSlice";
import { getOrders } from "../../store/orders/orderSlice";
import axios from "axios";

function Profile() {
  console.log(window.localStorage);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getSingleUser());
    dispatch(getOrders());
  }, []);
  console.log("user", user);
  return (
    <>
      <div className="profile-main-container">
        <ProfileMenu user={user} />
        <div className="profile-cart-events-container">
          <ProfileRecommended user={user} orders={orders} />
          <ProfileCart user={user} cart={cart} />
          <ProfileUpcomingEvents user={user} orders={orders} />
          <ProfilePurchaseHistory user={user} orders={orders} />
        </div>
      </div>
    </>
  );
}

export default Profile;

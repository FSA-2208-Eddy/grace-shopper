import ProfileMenu from "./ProfileMenu";
import ProfileRecommended from "./ProfileRecommended";
import ProfileCart from "./ProfileCart";
import ProfileUpcomingEvents from "./ProfileUpcomingEvents";
import ProfilePurchaseHistory from "./ProfilePurchaseHistory";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "../../store/users/singleUserSlice";
import { getCart } from "../../store/cart/cartSlice";
import { getOrders } from "../../store/orders/orderSlice";
import { getEvents } from "../../store/events/eventSlice";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUser);
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.orders);
  const events = useSelector((state) => state.events.events);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      dispatch(getCart());
      dispatch(getSingleUser());
      console.log("THIS IS THE USER HERE", user);
      dispatch(getOrders());
      dispatch(getEvents());
      setLoading(false);
    };
    load();
  }, [dispatch]);
  if (loading) return <div>LOADING</div>;
  else
    return (
      <>
        <div className="profile-main-container">
          <ProfileMenu user={user} />
          <div className="profile-cart-events-container">
            <ProfileRecommended user={user} orders={orders} events={events} />
            <ProfileCart user={user} cart={cart} />
            <ProfileUpcomingEvents user={user} orders={orders} />
            <ProfilePurchaseHistory user={user} orders={orders} />
          </div>
        </div>
      </>
    );
}

export default Profile;

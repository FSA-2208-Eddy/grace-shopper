import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import {
  userSlice,
  eventSlice,
  cartSlice,
  singleEventSlice,
  ordersSlice,
  singleUserSlice,
  loginSlice,
} from "../components";

const store = configureStore({
  reducer: {
    users: userSlice,
    events: eventSlice,
    cart: cartSlice,
    orders: ordersSlice,
    singleEvent: singleEventSlice,
    singleUser: singleUserSlice,
    loginStatus: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});

export default store;

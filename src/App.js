import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  EventList,
  LoginPage,
  Footer,
  SingleEvent,
  MainPage,
  EventTagListSports,
  EventTagListArts,
  EventTagListMisc,
  EventTagListMusic,
  Checkout,
  Profile,
  ProfileEdit,
} from "./components";

function App() {
  if (!window.localStorage.getItem('cart')) {
    const guestCart = {lineitems: [
      {qty: 1, seat: "3B", events: [{
        id: 1,
        name: "Immersive Monet & The Impressionists",
        location: "Lighthouse ArtSpace Chicago"
      }]}
    ]}
    window.localStorage.setItem('cart', JSON.stringify(guestCart))
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/type/sports" element={<EventTagListSports />} />
        <Route path="/events/type/music" element={<EventTagListMusic />} />
        <Route
          path="/events/type/artsandtheatre"
          element={<EventTagListArts />}
        />
        <Route path="/events/type/misc" element={<EventTagListMisc />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

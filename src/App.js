import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  EventList,
  SearchEvents,
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
  CheckoutDone,
} from "./components";

function App() {
  if (!window.localStorage.getItem("cart")) {
    const guestCart = { lineitems: [] };
    window.localStorage.setItem("cart", JSON.stringify(guestCart));
  }

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/search/:keywords" element={<SearchEvents />} />
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
        <Route
          path="/profile/checkout"
          element={<Checkout loggedIn={loggedIn} />}
        />
        <Route
          path="/profile/checkout/done"
          element={<CheckoutDone loggedIn={loggedIn} />}
        />
      </Routes>
      <Footer />
      <div className="footer-fill"></div>
    </>
  );
}

export default App;

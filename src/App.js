import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, EventList, Profile, Footer } from "./components";
import ProfileEdit from "./components/profile/ProfileEdit";
function App() {
  return (
    <>
      <Navbar />
      <Profile />
      {/* <ProfileEdit /> */}
      <Footer />
    </>
  );
}

export default App;

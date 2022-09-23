import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, EventList, Profile, Footer } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}

export default App;

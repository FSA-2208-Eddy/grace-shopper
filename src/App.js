import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, EventList, Profile } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}

export default App;

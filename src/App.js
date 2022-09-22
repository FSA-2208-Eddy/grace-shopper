import React from "react";
<<<<<<< HEAD
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
=======
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, EventList, LoginPage, Footer, SingleEvent } from './components'


function App(){

    return(
        <>
        <Navbar/>
        <SingleEvent/>
        <Footer/>
        </>

    )
>>>>>>> b8383cb55ce2a86899ca9b0a86b1ffaa7b9a81ed
}

export default App;

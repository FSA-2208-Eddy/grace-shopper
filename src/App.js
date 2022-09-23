import React from "react";
<<<<<<< HEAD
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
=======
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, EventList, LoginPage, Footer, SingleEvent, MainPage } from './components'


function App(){

    return(
        <>
        <Navbar />
        <Routes>
            <Route index element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/events' element={<EventList />} />
            {/* <Route path='/events/type/:tag' element={< />} /> */}
            <Route path='/events/:id' element={<SingleEvent />} />
            {/* <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<ProfileEdit />} /> */}
        </Routes>
        <Footer />
        </>
    )
>>>>>>> c7ce1fd774bf89a88dc4911562075e4a76a5d350
}

export default App;

import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, EventList } from './components'
import UpcomingEvents from "./components/main-page/UpcomingEvents";
import EventsNearMe from "./components/main-page/EventsNearMe";
import MainPage from "./components/main-page/MainPage";


function App(){

    return(
        <>
        <div>
            <Navbar/>
            <MainPage/>
            <EventList/>
        </div>
        </>

    )
}

export default App;
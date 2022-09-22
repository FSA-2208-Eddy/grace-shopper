import React from "react";
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
}

export default App;
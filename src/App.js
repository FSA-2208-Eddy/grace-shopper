import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, EventList, LoginPage, Footer } from './components'


function App(){

    return(
        <>
        <Navbar/>
        <LoginPage />
        <Footer />
        </>
    )
}

export default App;
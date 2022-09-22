import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, EventList, LoginPage } from './components'


function App(){

    return(
        <>
        <LoginPage />
        <div>
            Hello World!
        </div>
        </>

    )
}

export default App;
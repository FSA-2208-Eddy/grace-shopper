import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar } from './components'


function App(){

    return(
        <>
        <Navbar />
        <div>
            Hello World!
        </div>
        </>

    )
}

export default App;
import React from "react";
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
}

export default App;
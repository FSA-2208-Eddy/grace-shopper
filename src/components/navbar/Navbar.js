import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    // window.localStorage.removeItem('token');
    navigate('/')
}
  return (
    <nav id="navbar">
        <Link to="/" id="navbar-logo">Logo</Link>
        <div className="navbar-links">
            <Link to="/events">All Events</Link>
            <Link to="/events/type/music">Music</Link>
            <Link to="/events/type/sports">Sports</Link>
            <Link to="/events/type/artsandtheatre">Arts/Theatre</Link>
            <Link to="/events/type/misc">Misc</Link>
        </div>
        <div className='login-logout-container'>
            <Link to="/" id="logout" onClick={logout}>Logout</Link>
        </div>
    </nav>
  )
}

export default Navbar
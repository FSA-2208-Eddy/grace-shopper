import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/tickitLogo.png'

function Navbar() {
  const navigate = useNavigate();

  const [searchBarInput, setSearchBarInput] = React.useState('');

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/')
}
  return (
    <>
    <nav id="navbar">
        <Link to="/" id="navbar-logo"><img src={logo} alt='logo' /></Link>
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
    <div className='navbar-searchbar-container'>
      <div className='searchbar-icon'></div>
        <input type='text' placeholder='Search by location, artist, genre...' onChange={(e) => setSearchBarInput(e.target.value)} value={searchBarInput}/>
        <button type='submit'>Search</button>
    </div>
    </>
  )
}

export default Navbar
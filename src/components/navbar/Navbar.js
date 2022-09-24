import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/tickitLogo.png'
import cog from '../images/cog3.png'
import { DropDownItems } from '../'
import axios from 'axios'

function Navbar() {
  const navigate = useNavigate();

  const [searchBarInput, setSearchBarInput] = React.useState('');
  const [dropDown, setDropDown] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState(false);

  React.useEffect(() => {

    const loginCheck = async() => {
      const token = window.localStorage.getItem('token');

        if (token){
          const { data } = await axios.get('/api/auth', {
            headers: {
                authorization: token
              }
          })
          if (data) {
            setLoginStatus(true);
          }
        }
        else {
          setLoginStatus(false)
        }
      }
    loginCheck();
  }, [])


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
            <img id='settings-icon' src={cog} alt='settings' onClick={() => setDropDown(!dropDown)}/>
        </div>
          { dropDown ? <ul><DropDownItems loginStatus={loginStatus} setDropDown={setDropDown}/></ul> : <></>}
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
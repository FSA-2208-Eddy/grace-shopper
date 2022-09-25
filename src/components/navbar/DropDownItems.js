import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

function DropDownItems({ loginStatus, setDropDown }) {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <>
      <div className='navbar-dropdown-container'>
        <li className='navbar-dropdown-item' onClick={() => setDropDown(false)}>
            <Link to='/profile'>👤 Profile</Link>
        </li>
        <li className='navbar-dropdown-item' onClick={() => setDropDown(false)}>
            <Link to='/profile/checkout'>🛒 Your Cart</Link>
        </li>
        <li className='navbar-dropdown-item' onClick={() => setDropDown(false)}>
            { loginStatus ? <button onClick={() => logout() }>Logout</button> : <button onClick={() => navigate('/login')}>Login</button> }
        </li>
      </div>
    </>
  )
}

export default DropDownItems
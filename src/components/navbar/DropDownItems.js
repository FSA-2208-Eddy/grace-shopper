import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

function DropDownItems({ loginStatus }) {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <>
      <li className='navbar-dropdown-item'>
          <Link to='/profile'>👤 Profile</Link>
      </li>
      <li className='navbar-dropdown-item'>
          { loginStatus ? <button onClick={() => logout() }>Logout</button> : <button onClick={() => navigate('/login')}>Login</button> }
      </li>
    </>
  )
}

export default DropDownItems
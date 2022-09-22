import React from 'react'
import '../../../public/index.css'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../'
import axios from 'axios'


function LoginPage() {
  const userRef = React.useRef();
  const errRef = React.useRef();
  const navigate = useNavigate();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errMsg, setErrMsg] = React.useState('');

  React.useEffect(() => {
    userRef.current.focus();
  }, [])

  React.useEffect(() => {
    setErrMsg('');
  }, [userName, password])


  const handleSubmit = async(e) => {
    e.preventDefault();
    let loginObj = {
      username: userName,
      password: password,
    }
    try {
    //   const auth = await axios.post('/api/auth', loginObj)
    //   const { token } = auth.data
    //   window.localStorage.setItem('token', token);
      setUserName('');
      setPassword('');

    }
    catch(error) {
      console.log(error)
      setErrMsg('Unauthorized login')
      errRef.current.focus();
    }
  }

  return (
    <>
    <Navbar />
        <div className="login-main-container">
            <div className="login-form-container">
            <p id='login-failed' ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <p>Tickit Login</p>
            <form id="login-form">
                <input type='text' ref={userRef} name='username' autoComplete="off" placeholder="UserName" required></input>
                <input type='password' name='password' placeholder="Password" required></input>
            <button>Login</button>
            <a>New to TICKIT? Sign up here</a>
            </form>
            </div>
        </div>
    </>
  )
}

export default LoginPage
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
  const [email, setEmail] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
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

  const handleCreateUser = (e) => {
    e.preventDefault();
    try{

    }
    catch(err) {

    }
  }

  return (
    <>
        {/* <div className="login-main-container">
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
        </div> */}
        <div className='login-create-new-user-container'>
            <h1>Sign up</h1>
            <div className='login-create-new-user-form'>
                <form id='new-user-form' onSubmit={handleCreateUser}>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' ref={userRef} name='first-name' required></input>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' name='last-name' required></input>
                    <label htmlFor='password'>Password</label>
                    <input type={showPassword ? 'test' : 'password'} name='password' required></input>
                    <span><i className="far fa-eye" id="togglePassword" onClick={() => setShowPassword(!showPassword)}></i></span>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' required></input>
                    <button>Submit</button>
                </form>
                <div className='login-have-an-account-container'>
                    <a>Already have an account? Sign in here</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage
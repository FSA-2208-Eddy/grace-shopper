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
  const [showSignUp, setShowSignUp] = React.useState(false);
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
      const auth = await axios.post('/api/auth/login', loginObj)
      const { token } = auth.data
      window.localStorage.setItem('token', token);
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
        setFirstName('')
        setLastName('')
        setEmail('')
        setNewPassword('')
    }
    catch(err) {
        console.log(err)
    }
  }

  return (
    <>
    {!showSignUp ?
        <div className="login-main-container">
            <div className="login-form-container">
            <p id='login-failed' ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <p>Tickit Login</p>
            <form id="login-form" onSubmit={handleSubmit}>
                <input type='text' ref={userRef} name='username' autoComplete="off" placeholder="UserName" onChange={(e) => setUserName(e.target.value)} value={userName} required></input>
                <input type='password' name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
            <button>Login</button>
            <a>New to TICKIT? Sign up here</a>
            </form>
            </div>
        </div>
        :
        <div className='login-create-new-user-container'>
            <h1>Sign up</h1>
            <div className='login-create-new-user-form'>
                <form id='new-user-form' onSubmit={handleCreateUser}>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' ref={userRef} name='first-name' onChange={(e) => setFirstName(e.target.value)} value={firstName} required></input>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' name='last-name' onChange={(e) => setLastName(e.target.value)} value={lastName} required></input>
                    <label htmlFor='password'>Password</label>
                    <input type={showPassword ? 'test' : 'password'} name='password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required></input>
                    <span><i className="far fa-eye" id="togglePassword" onClick={() => setShowPassword(!showPassword)}></i></span>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} value={email} required></input>
                    <button>Submit</button>
                </form>
                <div className='login-have-an-account-container'>
                    <a>Already have an account? Sign in here</a>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default LoginPage
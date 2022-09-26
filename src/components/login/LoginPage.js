import React from 'react'
import '../../../public/index.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Navbar } from '../'
import axios from 'axios'
import { toggle } from '../../store/login/loginSlice'


function LoginPage({ setLoggedIn  }) {
  const userRef = React.useRef();
  const errRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [newUserName, setNewUserName] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
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
      setLoggedIn(true)
      navigate('/profile')
    }
    catch(error) {
      console.log(error)
      setErrMsg('Unauthorized login')
      errRef.current.focus();
    }
  }

  const handleCreateUser = async(e) => {
    e.preventDefault();
    let newUserObj = {
        username: newUserName,
        password: newPassword,
        firstName: firstName,
        lastName: lastName,
        email: email,
        img: imageUrl
    }
    try{
        const newUser = await axios.post('/api/auth/signup', newUserObj)

        setFirstName('')
        setLastName('')
        setEmail('')
        setNewUserName('')
        setNewPassword('')

        window.location.reload(false);
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
            <a onClick={() => setShowSignUp(true)}>New to TICKIT? Sign up here</a>
            </form>
            </div>
        </div>
        :
        <div className='login-create-new-user-container'>
            <div className='login-create-new-user-form'>
            <p>Sign up</p>
                <form id='new-user-form' onSubmit={handleCreateUser}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' ref={userRef} name='username' onChange={(e) => setNewUserName(e.target.value)} value={newUserName} required></input>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' name='first-name' onChange={(e) => setFirstName(e.target.value)} value={firstName} required></input>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' name='last-name' onChange={(e) => setLastName(e.target.value)} value={lastName} required></input>
                    <label htmlFor='password'>Password</label>
                    <input type={showPassword ? 'test' : 'password'} name='password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required></input>
                    <span><i className="far fa-eye" id="togglePassword" onClick={() => setShowPassword(!showPassword)}></i></span>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} value={email} required></input>
                    <label htmlFor='profile-img-url'>Profile Image URL <small>(optional)</small></label>
                    <input type='text' name='profile-image-url' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}></input>
                    <button>Submit</button>
                </form>
                <div className='login-have-an-account-container'>
                    <a onClick={() => setShowSignUp(false)}>Already have an account? Sign in here</a>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default LoginPage
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userAction';
import './login.css'
import Spinner from '../components/Spinner'

function Login() {
const[userphone,setUserphone]=useState(0)
const[password,setPassword]=useState('')
const{loading} = useSelector(state => state.alertsReducer)

  const dispatch=useDispatch();
  function onFinish(e) {
  e.preventDefault()
  dispatch(userLogin({userphone,password}))
  }
  return (
    <>
    {loading?(
   <Spinner name='signing in'/>

    ):(

      <div className='login-page-the-rentals'>
      <form onSubmit={onFinish}>
      <h1>LOGIN</h1>
        <div>        <label htmlFor="phone-in-login">Phone No </label>
        <input value={userphone} onChange={(e)=>setUserphone(e.target.value)} name='userphone' id='phone-in-login'  />
        </div>
            <div>
        <label htmlFor="password-in-login">Password </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password'  id='password-in-login'  />
        </div>

        <button type='submit'>Login</button>
        <Link to='/register'>Don't have account</Link>
      </form>
    
    </div>
    )}
   </>
  )
}

export default Login
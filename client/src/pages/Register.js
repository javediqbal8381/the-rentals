import React,{useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { userRegister } from '../redux/actions/userAction';



// this ui is copied from login page so the classes names are same

function Register() {
  const[username,setUsername]=useState('')
  const[useremail,setUseremail]=useState('')
  const[userphone,setUserphone]=useState(0)
  const[usercnic,setUsercnic]=useState(0)
  const[password,setPassword]=useState('')
  const[cpassword,setCpassword]=useState('')

  const dispatch=useDispatch();

  function onFinish(e) {
    if (password !==cpassword) {
        alert('password not matching')
    } else {
      e.preventDefault()
    dispatch(userRegister({username,useremail,usercnic,userphone,password}))
    setTimeout(() => {
      window.location.href='/'
    }, 5000);
    }

    

  }

  return (
    <div className='register-page-the-rentals'>
      <form onSubmit={onFinish}>
      <h1>REGISTER</h1>
        <div>        <label htmlFor="name-in-register">Name </label>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} name='username' id='name-in-register'  />
        </div>
            <div>
        <label htmlFor="phone-in-register"> Phone </label>
        <input value={userphone} onChange={(e)=>setUserphone(e.target.value)} name='userphone'  id='phone-in-register'  />
        </div>
        <div>
        <label htmlFor="cnic-in-register">CNIC without dashes</label>
        <input value={usercnic} onChange={(e)=>setUsercnic(e.target.value)} name='usercnic'  id='cnic-in-register'  />
        </div> <div>
        <label htmlFor="email-in-register">Email </label>
        <input value={useremail} onChange={(e)=>setUseremail(e.target.value)} name='useremail'  id='email-in-register'  />
        </div> <div>
        <label htmlFor="password-in-register">Password </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password'  id='password-in-register'  />
        </div>
        <div>
        <label htmlFor="cpassword-in-register">Confirm Password </label>
        <input value={cpassword} onChange={(e)=>setCpassword(e.target.value)} name='cpassword'  id='cpassword-in-register'  />
        </div>

        <button type='submit'>Register</button>
        <Link to='/login'>Already have account</Link>
      </form>
    
    </div>
  )
}

export default Register
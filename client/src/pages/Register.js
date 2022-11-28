import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userAction';
import { message } from 'antd';

// this ui is copied from login page so the classes names are same

function Register() {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userphone, setUserphone] = useState(0);
  const [usercnic, setUsercnic] = useState(0);
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const dispatch = useDispatch();

  function onFinish(e) {
    if (password !== cpassword) {
      message.error('password not matching');
    } else {
      e.preventDefault();

      if (username.length > 0 && useremail.length > 0 && password.length > 6 && usercnic.length > 0 && userphone.length > 0) {


        if (usercnic.length == 13) {

          if (userphone.length >= 10 && userphone.length < 12) {
            if (useremail.includes('@')) {
              dispatch(
                userRegister({ username, useremail, usercnic, userphone, password })
              );

            } else {
              message.error('Please enter valid email')

            }
          } else {
            message.error('Please enter valid phone number')

          }


        } else {
          message.error('Please enter valid CNIC')

        }



      } else {
        message.error('Please fill all the fields')

      }





    }
  }

  return (
    <div className="register-page-the-rentals">
      <form onSubmit={onFinish}>
        <h1>REGISTER</h1>
        <div>
          <span style={{ color: 'white' }}>name</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="name-in-register"
          />
        </div>
        <div>
          <span style={{ color: 'white' }}>Phone</span>
          <input
            value={userphone}
            onChange={(e) => setUserphone(e.target.value)}
            name="userphone"
            id="phone-in-register"
          />
        </div>
        <div>
          <span style={{ color: 'white' }}>CNIC without dashes</span>
          <input
            value={usercnic}
            onChange={(e) => setUsercnic(e.target.value)}
            name="usercnic"
            id="cnic-in-register"
          />
        </div>{' '}
        <div>
          <span style={{ color: 'white' }}>Email</span>
          <input
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            name="useremail"
            id="email-in-register"
          />
        </div>{' '}
        <div>
          <span style={{ color: 'white' }}>Password</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password-in-register"
          />
        </div>
        <div>
          <span style={{ color: 'white' }}>Confirm password</span>
          <input
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            name="cpassword"
            id="cpassword-in-register"
          />
        </div>
        <button type="submit">Register</button>
        <Link to="/login">Already have account</Link>
      </form>
    </div>
  );
}

export default Register;

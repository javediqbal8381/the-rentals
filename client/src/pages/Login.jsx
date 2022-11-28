import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userAction';
import './login.css';
import Spinner from '../components/Spinner';
import { message } from 'antd';

function Login() {
  const [userphone, setUserphone] = useState(92);
  const [password, setPassword] = useState('');
  const { loading } = useSelector((state) => state.alertsReducer);
  var audio = new Audio('https://res.cloudinary.com/ddnrxtthk/video/upload/v1668917741/error_tp8ajz.wav');

  const dispatch = useDispatch();
  function onFinish(e) {
    e.preventDefault();
    if (userphone.length >= 10 && userphone.length < 13 && password.length > 6) {
      dispatch(userLogin({ userphone, password }));

    } else {
      message.error('please provide valid credentials')
      audio.play()

    }
  }


  return (
    <>
      {loading ? (
        <Spinner name="signing in" />
      ) : (
        <div className="login-page-the-rentals">
          <form onSubmit={onFinish}>
            <img
              style={{ width: '150px' }}
              src="https://res.cloudinary.com/ddnrxtthk/image/upload/v1668364161/login_dytgrw.png"
            />
            <div>
              {' '}
              <label htmlFor="phone-in-login">Phone No </label>
              <input
                value={userphone}
                onChange={(e) => setUserphone(e.target.value)}
                name="userphone"
                id="phone-in-login"
              />
            </div>
            <div>
              <label htmlFor="password-in-login">Password </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password-in-login"
              />
            </div>

            <button type="submit">Login</button>
            <Link to="/register">Don't have account</Link>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;

import axios from 'axios';
import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { toast, ToastContainer } from 'react-toastify';
import './autocare.css';

function Autocare() {
  var audio = new Audio('https://res.cloudinary.com/ddnrxtthk/video/upload/v1668917740/confirm-beep_dzetf1.wav');

  const postCar = (e) => {
    e.preventDefault();
    axios
      .post('api/autocare/addcartoautocare', {
        username,
        mobileno,
        carname,
        address,
        time,
        problem,
      })
      .then((res) => {
        toast('your request is sent')
        audio.play()
      })
      .catch((err) => console.log(err));
  };

  const [carname, setCarname] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [username, setUsername] = useState('');

  const [problem, setProblem] = useState('');

  return (
    <div>
      <DefaultLayout>
        <ToastContainer />
        <div className="autocare-container">
          <div className="autocare-form">
            <h2 style={{ color: 'white', marginLeft: '27%' }}>
              Fill out the form
            </h2>
            <div className="inputs-in-autocare">
              <h6 style={{ color: 'white' }}>Your Name</h6>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
              <h6 style={{ color: 'white' }}>Mobile No</h6>
              <input
                value={mobileno}
                onChange={(e) => setMobileno(e.target.value)}
                type="text"
              />
              <h6 style={{ color: 'white' }}>Car Info</h6>
              <input
                value={carname}
                onChange={(e) => setCarname(e.target.value)}
                type="text"
              />

              <h6 style={{ color: 'white' }}>Enter full Address</h6>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
              />

              <h6 style={{ color: 'white' }}>please provide date and time</h6>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="text"
              />
              <h6 style={{ color: 'white' }}>Problem you are facing</h6>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                type="text"
              />
            </div>
            <button onClick={postCar}>submit</button>
          </div>
          <img src="https://res.cloudinary.com/ddnrxtthk/image/upload/v1668318904/auto-repair-removebg-preview_nqhy8y.png"></img>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Autocare;

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import './contactus.css';
import DefaultLayout from '../components/DefaultLayout';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  var audio = new Audio('https://res.cloudinary.com/ddnrxtthk/video/upload/v1668917740/confirm-beep_dzetf1.wav');

  const onFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_33cp7y4',
        'template_kk9wzur',
        e.target,
        '2I3igKSnR4WqzZoQx'
      )
      .then(
        (result) => {
          window.confirm(` ${name} your message has been sent  `);
          audio.play()

          window.location.href = '/';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <DefaultLayout>
      <div className="the-rentals-contactus">
        <form className="contactus-container" onSubmit={onFormSubmit}>
          <h1 className="h1-in-contactus">Contact Us</h1>
          <input
            name="username"
            placeholder="You Name"
            className="form-control name-in-contactus"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            name="email"
            placeholder="Your Email"
            className=" form-control email-in-contactus"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            name="phone"
            placeholder="Your phone no"
            className="form-control number-in-contactus"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></input>
          <textarea
            name="message"
            placeholder="Write your message...."
            className="form-control message-in-contactus"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>

          <button className="button-in-contactus" type="submit">
            submit
          </button>
        </form>
        <img src="https://res.cloudinary.com/ddnrxtthk/image/upload/v1668361603/contactus-removebg-preview_alutsy.png" />
      </div>
    </DefaultLayout>
  );
}
export default ContactUs;

import React, { useState } from 'react';
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';
import './defaultlayout.css';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function DefaultLayout(props) {
  const [lights, setLights] = useState(false);
  function blinkLights() {
    setLights((current) => !current);
  }
  const user = JSON.parse(localStorage.getItem('user'));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">home</a>
      </Menu.Item>
      <Menu.Item>
        {user.password == 'devpassword' ? <a href="/admin">Admin</a> : null}
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/Contactus">Contact us</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login';
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="default-layout">
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={24} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 className="h1-sitelogo">
                <Link className="a-tag-site-logo" to="/">
                  <b>THE RENTALS</b>
                </Link>
              </h1>
              <div className="nav-right">
                <div className="navbar-buttons">
                  <Link to="/" className="nav-btn v6">
                    <span className="label0">Home</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </Link>
                  <Link to="/userbookings" className="nav-btn v6">
                    <span className="label0">My Bookings</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </Link>
                  {user.password == 'devpassword' ? (
                    <Link to="/admin" className="nav-btn v6">
                      <span className="label0">Admin</span>
                      <span className="icon-btn">
                        <span></span>
                      </span>
                    </Link>
                  ) : null}
                  <Link to="/contactus" className="nav-btn v6">
                    <span className="label0">Contact us</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => {
                      localStorage.removeItem('user');
                    }}
                    className="nav-btn v6"
                  >
                    <span className="label0">Logout</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </Link>
                </div>
                <div className="mobile-menu">
                  <Dropdown overlay={menu} placement="bottomLeft">
                    <button className="menu-button">{user.username}</button>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* <button
        className="blinkslights"
        onClick={blinkLights}
        style={{
          background: 'red',
          marginTop: '20.5vh',
          position: 'fixed',
          height: '10px',
          width: '20px',
        }}
      ></button> */}
      <div className="blinking">
        {lights && <p className="blinking-light-left">o</p>}
        {lights && <p className="blinking-light-right">o</p>}
      </div>

      <div className="contentz">{props.children}</div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                The Rentals is a platform where we can easily hire or rent a
                ride. Nowadays, there is Online Car Rental which gives much
                benefit to user. A rental service is a service which customers
                arrive to request the hire of a rental unit. It is more
                convenient than carrying the cost of owning and maintaining the
                unit. The Renals is a company that rent automobiles for short
                period of time for a fee for few hours or for few days or week
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Developers</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Javed Iqbal</a>
                </li>
                <br></br>
                <li>
                  <a href="/">Qazi Awais</a>
                </li>
                <br></br>

                <li>
                  <a href="/">Farman Shah</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <br></br>

                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <br></br>

                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <Link to="/"> The Rentals</Link>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="socl-icon" href="https://web.whatsapp.com/">
                    <ImWhatsapp />
                  </a>
                </li>
                <li>
                  <a className="socl-icon" href="https://www.facebook.com/">
                    <GrFacebook />
                  </a>
                </li>
                <li>
                  <a className="socl-icon" href="https://www.linkedin.com/">
                    <GrLinkedin />
                  </a>
                </li>
                <li>
                  <a className="socl-icon" href="https://mail.google.com/mail/">
                    <SiGmail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default DefaultLayout;

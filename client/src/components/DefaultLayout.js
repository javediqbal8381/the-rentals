import React,{useState} from 'react'
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';
import './defaultlayout.css'
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
  import 'react-toastify/dist/ReactToastify.css';

function DefaultLayout(props) {
  const[lights,setLights]=useState(false)
  function blinkLights(){
setLights(current=>!current)  } 
  const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
      <Menu.Item>
        <a href='/'>
          home
        </a>
      </Menu.Item>
      <Menu.Item>
        {user.password == 'devpassword' ? <a href='/admin'>Admin</a> : null}
      </Menu.Item>
      <Menu.Item>
        <a href='/userbookings'>
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href='/Contactus'>
          Contact us
        </a>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('user')
        window.location.href = '/login'
      }}>
        <li>Logout</li>
      </Menu.Item>
    </Menu>

  );
  return (
    <div className='default-layout'>
      <div className='header bs1'>
        <Row gutter={16} justify='center'>
          <Col lg={24} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 className='h1-sitelogo'><a className='a-tag-site-logo' href='/'><b>THE RENTALS</b></a></h1>

              <div className='nav-right'>
                <div className='navbar-buttons'>
                  <a href='/' className="nav-btn v6">
                    <span className="label0">Home</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </a>
                  <a href='/userbookings' className="nav-btn v6">
                    <span className="label0">My Bookings</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </a>
                  {user.password == 'devpassword' ? <a href='/admin' className="nav-btn v6">
                    <span className="label0">Admin</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </a> : null
                  }
                  <a href='/contactus' className="nav-btn v6">
                    <span className="label0">Contact us</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </a>

                  <a onClick={() => {
                    localStorage.removeItem('user')
                    window.location.href = '/login'
                  }} className="nav-btn v6">
                    <span className="label0">Logout</span>
                    <span className="icon-btn">
                      <span></span>
                    </span>
                  </a>


                </div>
                <div className='mobile-menu'>
                  <Dropdown overlay={menu} placement="bottomLeft" >
                    <button className='menu-button'>{user.username}</button>
                  </Dropdown>
                </div>

              </div>



            </div>
          </Col>
        </Row>
      </div>


      <button className='blinkslights' onClick={blinkLights} style={{background:'red',marginTop:'20.5vh',position:'fixed',height:'10px',width:'20px'}}></button>
      <div className='blinking'>  
     {lights && <p className='blinking-light-left'>o</p>}       
       {lights && <p className='blinking-light-right'>o</p>}       
      </div>



      <div className='contentz'>

        {props.children}
      </div>
      <div className='footer-in-home'>
        <div className='footer-left'>
          <a><h6>FAQs</h6></a>
          <a href='/contactus'><h6>Contact Us</h6></a>
          <a><h6>Write blog</h6></a>
          <a> <h6>Help</h6></a>
        </div>
        <div className='footer-center'>
          <br></br>
          <h4>Rent a Car</h4><br />
          <div id='f-c-btom-pc'><h5>developed by</h5><h6><br />Javed Iqbal &nbsp; &nbsp;| &nbsp;&nbsp;    Qazi Awais Akhtar
             &nbsp; &nbsp;|&nbsp;   &nbsp; Farman shah</h6></div>

             <div id='f-c--btom-mobbile'> <h5>developed by</h5> <h6><br />Javed Iqbal  <br/>   Qazi Awais Akhtar<br/>
             Farman shah</h6></div>
          </div>
        <div className='footer-right'>
          <a className='socl-icon' href='https://web.whatsapp.com/'><ImWhatsapp /><span>  Whatsapp</span></a> <br />
          <a className='socl-icon' href='https://www.facebook.com/'><GrFacebook /> <span>facebook</span></a> <br />
          <a className='socl-icon' href='https://www.linkedin.com/'><GrLinkedin /><span> Linkedin</span></a>  <br />
          <a className='socl-icon' href='https://mail.google.com/mail/'><SiGmail /> <span>Google</span></a>
        </div>

      </div>

    </div>
  )
}

export default DefaultLayout
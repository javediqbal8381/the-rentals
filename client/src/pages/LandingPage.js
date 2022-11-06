import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col, DatePicker } from 'antd'
import Spinner from '../components/Spinner';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './landingpage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { RangePicker } = DatePicker

function LandingPage() {

  const { cars } = useSelector(state => state.carsReducer)
  const loading = useSelector(state => state.alertsReducer)
  const [totalcars, setTotalCars] = useState([]);
  const dispatch = useDispatch();


const tologin=()=>{
  toast("please login to book car");

}


  useEffect(() => {
    dispatch(getAllCars())

  }, [])
  useEffect(() => {

    setTotalCars(cars)

  }, [cars])








  return (
    <div className='landingpage-ist'>


      <section className='home-section-1' >
        <div>
          <div className='header bs1' id='navbar'>
            <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
                <div className="d-flex justify-content-between">
                  <h1 className='h1-sitelogo'><a className='a-tag-site-logo' href='/'><b>THE RENTALS</b></a></h1>

                  
                    <div className='navbar-buttons-landing-page'>


                      <Link to='/register' className="nav-btn v6 register-btn-landingpage">
                        <span className="label0">register</span>
                        <span className="icon-btn">
                          <span></span>
                        </span>
                      </Link>



                      <Link to='/login' className="nav-btn v6">
                        <span className="label0"> <span id='the-rentals-login-btn'>Login</span> </span>
                        <span className="icon-btn">
                          <span></span>
                        </span>
                      </Link>


                    </div>


                  



                </div>
              </Col>
            </Row>
            {loading == true && (<Spinner />)}
          </div>
          <Row className='home-intro '>
            <h1 >THE LOW LATENCY ADVANTAGE FOR MORE FX DEALS</h1>
            <h4 className='animated-text'> Lets Ride</h4>
            <p>The rentals gives you the chance to checkout the latest vehicles in the market
                with out buying them.Just in few simple steps you can book any vehicle and can test it out. </p>
            <button className='explore-btn-in-home'>Explore</button>
            <br /><br /><br /><br /><br /><br />

          </Row>
          <div className='bold-line'>
          </div>



          <div className='myrow'>

            <div className='myrow1 ' ><a href='/landingpage'>Fast Service</a></div>


            <div className='myrow2'>
              <p>The Reantals allows a person to book/reserve a vehicle with/without payment on
                 one end while the company staff handles the transactions, on the other via the Internet.
                 The transactions is secure and handled by using Stripe.
              </p>

              <button className='explore-btn-2'>Explore</button>
            </div>
          </div>
        </div>


      </section>





      <section offset={1} speed={1} className="parallax-1">

        <div>
          <Row className='mt-3' justify='center'>
            <Col lg={20} sm={24} className="d-flex justify-content-left ">
              <h4 style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins' }}>Select Your Time Range</h4><hr />
              <RangePicker showTime='HH:mm' format='YYYY-MM-DD HH:mm' />
            </Col>
          </Row>
          <Row justify='center' gutter={15} >
          <ToastContainer/>

            {
              totalcars.map((car, index) => {
                return <Col lg={5} sm={24} xs={24} key={index}>
                  <div className='car p-2 bs1 '>
                    <img src={car.image} className='carimg' />
                    <div className='car-content d-flex align-items-center justify-content-between'>
                      <div >
                        <p>{car.name}</p>
                        <p> Rent per hour {car.rentPerHour}/-</p>
                      </div>
                      <div><button className='btn1 book-btn-inhome'><Link onClick={tologin}  className='book-link-inbutton'>Book Now</Link></button></div>
                    </div>
               
                  </div>
                </Col>
              })
            }

          </Row>

        </div>
      </section>





      <section offset={2} speed={1} className='parallax-2'>
        <div className='footer-in-home'>
          <div className='footer-left'>
            <a><h6>FAQs</h6></a>
            <a href='/contactus'><h6>Contact Us</h6></a>
            <a><h6>Read blog</h6></a>
            <a> <h6>Help</h6></a>
          </div>
          <div className='footer-center'>
            <br></br>
            <h4> The Rentals</h4><br />
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
      </section>




    </div>

  )
}

export default LandingPage;




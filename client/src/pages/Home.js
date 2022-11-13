//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/autocare.png';
import moment from 'moment';
import './home.css';
import DefaultLayout from '../components/DefaultLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  const { RangePicker } = DatePicker;
  const user = JSON.parse(localStorage.getItem('user'));
  const { cars } = useSelector((state) => state.carsReducer);
  const loading = useSelector((state) => state.alertsReducer);
  const [totalcars, setTotalCars] = useState([]);
  const dispatch = useDispatch();

  AOS.init();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  useEffect(() => {
    setTotalCars(cars);
  }, [cars]);

  function setFilter(values) {
    var selectedFrom = moment(values[0], 'YYYY-MM-DD HH:mm');
    var selectedTo = moment(values[1], 'YYYY-MM-DD HH:mm');

    var temp = [];

    for (var car of cars) {
      if (car.bookedTimeSlots.length === 0) {
        temp.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }

    setTotalCars(temp);
  }

  return (
    <DefaultLayout>
      <div className="landingpage-the-rentals">
        <section className="home-section-1">
          <Row className="home-intro ">
            <h1>THE LOW LATENCY ADVANTAGE FOR MORE FX DEALS</h1>
            <h4 className="animated-text"> Lets Ride</h4>

            <p>
              The rentals gives you the chance to checkout the latest vehicles
              in the market with out buying them.Just in few simple steps you
              can book any vehicle and can test it out.{' '}
            </p>
            <button
              onClick={() => {
                window.open(
                  'https://dmc-limousines.com/blog/',
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
              className="explore-btn-in-home"
            >
              Explore
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Row>
          <div className="bold-line"></div>

          <div className="myrow">
            <div className="myrow1 ">
              <Link to="/autocare">
                {' '}
                <img src={logo} />
              </Link>
            </div>

            <div className="myrow2">
              <p>
                The Rentals Provide A smart service to save time of Customer go
                to the auto care page simply fill the fill the form and the
                center will send auto mechenic to your address according to your
                problem.
              </p>
            </div>
            <div className="myrow3">
              <button
                onClick={() => {
                  window.open(
                    'https://dmc-limousines.com/blog/',
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                className="explore-btn-2"
              >
                Explore
              </button>
            </div>
          </div>
        </section>

        <section className="section">
          <Row className="mt-3" justify="center">
            <Col
              lg={20}
              sm={24}
              className="d-flex justify-content-left time-range-div-in-home"
            >
              <h4
                className="select-time-range"
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'Poppins',
                }}
              >
                Select Your Time Range
              </h4>
              <hr />
              <RangePicker
                className="rangepicker"
                showTime="HH:mm"
                format="YYYY-MM-DD HH:mm"
                onChange={setFilter}
              />
            </Col>
          </Row>
          <Row justify="center allcars-in-home" gutter={15}>
            {totalcars.map((car, index) => {
              return (
                <Col
                  className="cars-in-home"
                  key={index}
                  lg={6}
                  sm={24}
                  xs={24}
                >
                  <div className="car p-2 bs1 ">
                    <img
                      data-aos="flip-left"
                      src={car.image}
                      className="carimg"
                    />
                    <div className="car-content d-flex align-items-center justify-content-between">
                      <div>
                        <p>{car.name}</p>
                        <p>Rent per hour {car.rentPerHour}/-</p>
                      </div>
                      <div>
                        <button className="btn1 book-btn-inhome">
                          <Link
                            className="book-link-inbutton"
                            to={`/booking/${car._id}`}
                          >
                            Book Now
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default Home;

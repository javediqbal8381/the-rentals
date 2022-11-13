import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Suspense, Lazy } from 'react';
import './bookingcar.css';
import DefaultLayout from '../components/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/carsAction';
import StripeCheckout from 'react-stripe-checkout';
import { Row, Col, Divider, DatePicker, Checkbox, Modal } from 'antd';
import Spinner from '../components/Spinner';
import moment from 'moment';
import { bookCar } from '../redux/actions/bookingAction';
const { RangePicker } = DatePicker;

function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 50 * totalHours);
    }
  }, [driver, totalHours]);
  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format('YYYY-MM-DD HH:mm'));
    setTo(moment(values[1]).format('YYYY-MM-DD HH:mm'));

    setTotalHours(values[1].diff(values[0], 'hours'));
  }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem('user'))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    dispatch(bookCar(reqObj));
  }

  return (
    <>
      {loading ? (
        <Spinner name="Booking Car" />
      ) : (
        <DefaultLayout>
          <Row
            justify="center"
            className="d-flex align-items-center"
            style={{ minHeight: '90vh' }}
          >
            <Col lg={10} sm={24} xs={24} className="p-3">
              <img src={car.image} className="carimg-bookingcar bs1 w-100 " />
            </Col>

            <Col lg={10} sm={24} xs={24}>
              <Divider className="bookingcar-divider" type="horizental" dashed>
                <span>Car info</span>
              </Divider>
              <div className="bookingcar-divider-2nd-div">
                <p>Car : {car.name}</p>
                <p> Fuel type : {car.fueltype}</p>
                <p>Capacity : {car.capacity} persons</p>
                <p>
                  {car.rentperHour} Rent Per Hour {car.rentPerHour} /-
                </p>
              </div>
              <Divider type="horizental" dashed>
                Select Time Range
              </Divider>
              <RangePicker
                showTime="HH:mm"
                format="YYYY-MM-DD HH:mm"
                onChange={selectTimeSlots}
              />
              <br />
              <button
                className="btn1 mt-2 seebookedslots"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Booked Slots
              </button>

              {from && to && (
                <div className="car-info">
                  <p> Total Hours : {totalHours}</p>
                  <p>
                    Rent Per Hour : <b>{car.rentPerHour}</b>
                  </p>
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDriver(true);
                      } else {
                        setDriver(false);
                      }
                    }}
                  >
                    <span style={{ color: 'white' }}>Need A Driver</span>
                  </Checkbox>
                  <h4 style={{ color: 'white' }}>
                    Total Amount : {totalAmount}
                  </h4>

                  <StripeCheckout
                    shippingAddress
                    token={onToken}
                    amount={totalAmount * 100}
                    currency="pkr"
                    stripeKey="pk_test_51L5B6EK3jR06uJR6wyhMZ10dgIWJB8YhUz1J235SDCcXzFj1nU8kXS5nRqRyf6K75LRPido7Gh5uGYgvWD5Ufaxw003LVamtXK"
                  >
                    <button className="btn1 seebookedslots">Book Car</button>
                  </StripeCheckout>
                </div>
              )}
            </Col>

            {car.name && (
              <Modal
                visible={showModal}
                closable={false}
                footer={false}
                title="booked time slots"
              >
                <div className="p-3">
                  {car.bookedTimeSlots.map((slot) => {
                    return (
                      <button className="btn1">
                        {slot.from} - {slot.to}
                      </button>
                    );
                  })}
                  <div className="text-right mt-5">
                    <button
                      style={{ color: 'black' }}
                      className="btn1 seebookedslots"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      {' '}
                      close
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </Row>
        </DefaultLayout>
      )}
    </>
  );
}

export default BookingCar;

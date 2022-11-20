import React, { useEffect, useState } from 'react'
import DefaultLayout from "../components/DefaultLayout"

import { useDispatch, useSelector } from 'react-redux'
import { getAllBookings } from '../redux/actions/bookingAction'
import { getAllUsers } from '../redux/actions/userAction';

import { Row, Col } from 'antd'
import Spinner from '../components/Spinner';
import moment from "moment";

function Allbookings() {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch()
    const { bookings } = useSelector((state) => state.bookingsReducer)
    const { users } = useSelector((state) => state.usersReducer);

    const { loading } = useSelector((state) => state.alertsReducer);
    useEffect(() => {
        dispatch(getAllBookings());
        dispatch(getAllUsers());

    }, []);
    console.log(bookings);
    console.log(users);
    return (
        // this  is copiend from user bookings the css works from userbookings.css //////////////////////////////////////
        <DefaultLayout >
            <div className='userbooking-the-rentals'>
                {loading && (<Spinner />)}

                <h3 style={{ color: 'white' }} className='text-center mt-2  '>Total bookings: {bookings.length}</h3>

                <div className='userbookings-card-container '>

                    {
                        bookings.map((booking) => {
                            return <Row gutter={16} className="bs1 mt-3 text-left user-booking-card">
                                <Col className='user-booking-card-left' lg={6} sm={24}>
                                    {users.filter(o => o._id == booking.user).map((bookinguser) => {

                                        return (<>
                                            <p style={{ color: 'white' }}>name : {bookinguser.username}</p>
                                            <p style={{ color: 'white' }}>email : {bookinguser.useremail}</p>
                                            <p style={{ color: 'white' }}>cnic : {bookinguser.usercnic}</p>
                                            <p style={{ color: 'white' }}>phone :    {bookinguser.userphone}</p>
                                        </>
                                        )
                                    })}
                                </Col>

                                <Col className='user-booking-card-left' lg={6} sm={24}>
                                    <p><b>{booking.car.name}</b></p>
                                    <p>Total hours : <b>{booking.totalHours}</b></p>
                                    {/* <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p> */}
                                    <p>Total amount : <b>{booking.totalAmount}</b></p>
                                </Col>

                                <Col className='user-booking-card-mid' lg={12} sm={24}>
                                    <p className='ist-p'><span>Transaction Id :</span> <b>{booking.transactionId}</b></p>
                                    <p >From: <b>{booking.bookedTimeSlots.from}</b></p>
                                    <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                                    <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                                </Col>

                                <Col className='user-booked-car-right, text-right' lg={6} sm={24}>
                                    <img style={{ borderRadius: 5 }} src={booking.car.image} height="140" className="p-2 user-booked-car-img" />
                                </Col>
                            </Row>;
                        })}




                </div>
            </div>
        </DefaultLayout>
    )
}

export default Allbookings
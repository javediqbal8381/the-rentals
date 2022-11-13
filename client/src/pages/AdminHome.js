import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, deleteCar } from '../redux/actions/carsAction';
import { Button, Row, Col, DatePicker } from 'antd';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { Popconfirm, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './adminhome.css';

import moment from 'moment';
const { RangePicker } = DatePicker;

function AdminHome() {
  const user = JSON.parse(localStorage.getItem('user'));
  const pass = user.password;
  const isadmin = pass.toString();
  const adminpass = 'devpassword';
  console.log(isadmin);

  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalcars, setTotalCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
    if (isadmin != adminpass) {
      window.location.href = '/';
    }
  }, []);
  useEffect(() => {
    setTotalCars(cars);
    if (isadmin != adminpass) {
      window.location.href = '/';
    }
  }, [cars]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <DefaultLayout>
          <div className="admin-home-the-rentals">
            <br></br>
            <br></br>
            <div>
              <h1 className="admin-h1">A D M I N &nbsp; &nbsp; P A N E L</h1>
            </div>
            <Row justify="center" gutter={15} className="mt-2">
              <Col lg={20} sm={24}>
                <div className="text-right admin-home-buttons">
                  <Link to="/addcar" className="add-car-btn-admin">
                    Add Car
                  </Link>
                  <Link to="/getautocare" className="add-car-btn-admin">
                    AutoCare
                  </Link>
                  <Link to="/allusers" className="add-car-btn-admin">
                    USERS
                  </Link>
                  <a
                    href="https://support.google.com/mail/answer/56256?hl=en"
                    className="add-car-btn-admin"
                  >
                    Feedback
                  </a>
                </div>
              </Col>
            </Row>

            <Row justify="center" gutter={15}>
              {totalcars.map((car) => {
                return (
                  <Col lg={5} sm={24} xs={24}>
                    <div className="car p-2 bs1 ">
                      <img alt={car.name} src={car.image} className="carimg" />
                      <div className="car-content d-flex align-items-center justify-content-between">
                        <div className="text-left pl-2">
                          <p className="text-left">{car.name}</p>
                          <p> Rent per hour {car.rentPerHour}/-</p>
                        </div>
                        <div>
                          <Link to={`/editcar/${car._id}`}>
                            {' '}
                            <EditOutlined
                              className="mr-2 adminsvgicons"
                              style={{ color: 'blue', cursor: 'pointer' }}
                            />
                          </Link>
                          <Popconfirm
                            title="Are you sure to remove this car?"
                            onConfirm={() => {
                              dispatch(deleteCar({ carid: car._id }));
                            }}
                            okText="Yes"
                            cancelText="No"
                          >
                            <DeleteOutlined
                              className=" adminsvgicons"
                              style={{ color: 'red', cursor: 'pointer' }}
                            />
                          </Popconfirm>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </DefaultLayout>
      )}
    </>
  );
}

export default AdminHome;

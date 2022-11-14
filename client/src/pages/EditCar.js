import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Form, Input } from 'antd';
import { getAllCars } from '../redux/actions/carsAction';
import { useDispatch, useSelector } from 'react-redux';
import { editCar } from '../redux/actions/carsAction';
import Spinner from '../components/Spinner';
import './editcar.css';
function EditCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setCar] = useState();
  const [totalcars, setTotalCars] = useState([]);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setTotalCars(cars);
      setCar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  function onFinish(values) {
    values._id = car._id;
    values.bookedTimeSlots = [];
    dispatch(editCar(values));
  }

  return (
    <>
      {loading ? (
        <Spinner name="Updating car" />
      ) : (
        <DefaultLayout>
          <Row justify="center mt-5" className="edit-therentals">
            <Col lg={12} sm={24} xs={24}>
              {totalcars.length > 0 && (
                <Form
                  initialValues={car}
                  className="bs1 p-2 editcar-form"
                  layout="vertical"
                  onFinish={onFinish}
                >
                  <h3 className="sdfhdjkfhs">Edit Car</h3>
                  <hr />
                  <Form.Item
                    name="name"
                    label={
                      <label style={{ color: 'white', fontSize: '20px' }}>
                        car name
                      </label>
                    }
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="image"
                    label={
                      <label style={{ color: 'white', fontSize: '20px' }}>
                        Image URL
                      </label>
                    }
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="rentPerHour"
                    label={
                      <label style={{ color: 'white', fontSize: '20px' }}>
                        Rent Per Hour
                      </label>
                    }
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="capacity"
                    label={
                      <label style={{ color: 'white', fontSize: '20px' }}>
                        Capacity
                      </label>
                    }
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="fueltype"
                    label={
                      <label style={{ color: 'white', fontSize: '20px' }}>
                        Fuel Type
                      </label>
                    }
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <button className="btn1 add-car-btn-admin">EDIT CAR</button>
                </Form>
              )}
            </Col>
          </Row>
        </DefaultLayout>
      )}
    </>
  );
}

export default EditCar;

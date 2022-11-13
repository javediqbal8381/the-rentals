import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../redux/actions/carsAction';
import Spinner from '../components/Spinner';
import './addcar.css';
function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    values.bookedTimeSlots = [];
    dispatch(addCar(values));
  }

  return (
    <DefaultLayout>
      {loading ? (
        <Spinner name="Adding Car" />
      ) : (
        <Row justify="center mt-5" className="addcar-therentals">
          <Col lg={12} sm={24} xs={24}>
            <Form
              className="bs1  add-car-form"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3 className="sdfhdjkfhs">Add New Car</h3>
              <hr />
              <Form.Item
                className="sdfhdjkfhs"
                name="name"
                label={
                  <label style={{ color: 'white', fontSize: '20px' }}>
                    car name
                  </label>
                }
                rules={[{ required: true }]}
              >
                <Input className="bnmbnbnb" placeholder="name" />
              </Form.Item>
              <Form.Item
                className="sdfhdjkfhs"
                name="image"
                label={
                  <label style={{ color: 'white', fontSize: '20px' }}>
                    Image URL
                  </label>
                }
                rules={[{ required: true }]}
              >
                <Input className="bnmbnbnb" placeholder="Image URL" />
              </Form.Item>
              <Form.Item
                className="sdfhdjkfhs"
                name="rentPerHour"
                label={
                  <label style={{ color: 'white', fontSize: '20px' }}>
                    Rent Per Hour
                  </label>
                }
                rules={[{ required: true }]}
              >
                <Input className="bnmbnbnb" placeholder="rent Per Hour" />
              </Form.Item>
              <Form.Item
                className="sdfhdjkfhs"
                name="capacity"
                label={
                  <label style={{ color: 'white', fontSize: '20px' }}>
                    Capacity
                  </label>
                }
                rules={[{ required: true }]}
              >
                <Input className="bnmbnbnb" placeholder="Capacity" />
              </Form.Item>
              <Form.Item
                className="sdfhdjkfhs"
                name="fueltype"
                label={
                  <label style={{ color: 'white', fontSize: '20px' }}>
                    Fuel Type
                  </label>
                }
                rules={[{ required: true }]}
              >
                <Input className="bnmbnbnb" placeholder="Fuel Type" />
              </Form.Item>
              <button className="add-car-btn-addcar">ADD CAR</button>
            </Form>
          </Col>
        </Row>
      )}
    </DefaultLayout>
  );
}

export default AddCar;

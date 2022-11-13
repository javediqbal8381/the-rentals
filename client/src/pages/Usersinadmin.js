import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getAllUsers } from '../redux/actions/userAction';
import './usersinadmin.css';
import DefaultLayout from '../components/DefaultLayout';
import { Link } from 'react-router-dom';

function Usersinadmin() {
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <DefaultLayout>
      <h1 className="users-data-in-admin-h1">USERS DATA</h1>
      {users.map((user, index) => {
        return (
          <div key={index} className="user-card-in-admin">
            <div>
              <h5>Username</h5>
              <h5>Email</h5>
              <h5>Phone</h5>
              <h5>CNIC</h5>
            </div>
            <div>
              <h5>{user.username}</h5>
              <h5>{user.useremail}</h5>
              <h5>{user.userphone}</h5>
              <h5>{user.usercnic}</h5>
            </div>
          </div>
        );
      })}{' '}
    </DefaultLayout>
  );
}

export default Usersinadmin;

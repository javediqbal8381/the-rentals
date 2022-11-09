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
            <h3>
              User Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.username}
            </h3>
            <h3>
              User Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.useremail}
            </h3>
            <h3>
              User Phone
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {user.userphone}
            </h3>
            <h3>
              User CNIC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.usercnic}
            </h3>
          </div>
        );
      })}{' '}
      <Link className="go-back-admin" to="/admin">
        Home
      </Link>
    </DefaultLayout>
  );
}

export default Usersinadmin;

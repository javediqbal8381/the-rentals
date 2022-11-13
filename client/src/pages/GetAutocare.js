import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './getautocare.css';
import DefaultLayout from '../components/DefaultLayout';
import AutocareQuery from './AutocareQuery';
function GetAutocare() {
  const [autocares, setAutocares] = useState([]);

  useEffect(() => {
    axios
      .get('api/autocare/getcarfromautocare')
      .then((res) => {
        setAutocares(res.data);
      })
      .catch((err) => alert('error'));
  }, []);

  return (
    <DefaultLayout>
      <div className="adminautocare-page">
        {autocares.map((autocare, index) => {
          return (
            <div key={index} className="autocare-card">
              <div className="getautocare-card-right">
                <h5 style={{ color: 'white' }}>Name</h5> <br />
                <h5 style={{ color: 'white' }}>Mobile-no</h5>
                <br />
                <h5 style={{ color: 'white' }}>Car Info</h5>
                <br />
                <h5 style={{ color: 'white' }}>Address</h5>
                <br />
                <h5 style={{ color: 'white' }}>Time</h5>
                <br />
                <h5 style={{ color: 'white' }}>Problem</h5>
              </div>
              <div className="getautocare-card-right">
                {' '}
                <h5 style={{ color: 'white' }}>{autocare.username}</h5>
                <br />
                <h5 style={{ color: 'white' }}>{autocare.mobileno}</h5>
                <br />
                <h5 style={{ color: 'white' }}>{autocare.carname}</h5>
                <br />
                <h5 style={{ color: 'white' }}>{autocare.address}</h5>
                <br />
                <h5 style={{ color: 'white' }}>{autocare.time}</h5>
                <textarea value={autocare.problem} />
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default GetAutocare;

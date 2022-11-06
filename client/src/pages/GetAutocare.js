import React, { useEffect,useState } from 'react'
import axios from 'axios'

function GetAutocare() {
  const[cars,setCars]=useState([]);

  useEffect(()=>{
    axios.get('api/autocare/getcarfromautocare')
    .then(res => {
      setCars(res.data)

    })
    .catch(err =>alert('error'))

  },[])


  const arr =cars.map((car,index)=>{
    return(
      <div>
     <h3>{car.name}</h3>
     <h3></h3>
     <h3>{car.number}</h3>
     <h3></h3>
     <h3>{car.problem}</h3>
     <br></br>
     </div>
    )
}

)

  return (
    <div>

        <h1>Admin Autocare</h1>

      
       {arr}
    </div>
  )
}

export default GetAutocare
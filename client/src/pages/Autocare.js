import axios  from 'axios';
import React,{useState} from 'react'
import DefaultLayout from '../components/DefaultLayout';
import './autocare.css'






function Autocare() {

  const postCar =(e)=>{
    e.preventDefault();
    axios.post('api/autocare/addcartoautocare',
   { name,number,problem}
   ).then(res =>console.log('car added',res)).catch(err => console.log(err))

  
 }



  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const [problem,setProblem]=useState('')

  return (<div >
    <DefaultLayout>
    <div className='autocare-container'>
      
       <div> <h1>Autocare</h1></div>

       <div>
        <h2>Fill out the form</h2>
        <h4>Name</h4>
        <div  className='inputs-in-autocare'>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <h4>Car number</h4>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} type='text'/>
      
        <h4>Problem</h4>
        <input value={problem} onChange={(e)=>setProblem(e.target.value)} type="text"/>
        
        </div>
        <button onClick={postCar}>submit</button>
       </div>


    </div>
    </DefaultLayout>
    </div>
  )
}

export default Autocare
import axios from 'axios'
import {message} from 'antd'


export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    

    try {
        const response=await axios.post('/api/users/login',reqObj)
        localStorage.setItem('user',JSON.stringify(response.data))  
        message.success('login successful')
        
        
        
        setTimeout(() => {
            window.location.href='/'

            dispatch({type:'LOADING',payload:false})

          
        }, 500);
        

    } catch (error) {
        console.log(error)
        message.error('something went worng')
        dispatch({type:'LOADING',payload:false})
        

    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.post('/api/users/register',reqObj)
        message.success('registration success')
        
        setTimeout(() => {
            window.location.href='/login'
        }, 500);
        
        dispatch({type:'LOADING',payload:false})

    } catch (error) {
        console.log(error)
        message.error('something went worng')

        dispatch({type:'LOADING',payload:false})
        

    }
}

export const getAllUsers =()=> async dispatch=>{
     
    dispatch({type:'LOADING',payload:true})

    try {
        const response=await axios.get('/api/users/getallusers')
        dispatch({type:'GET_ALL_USERS',payload:response.data})
        dispatch({type:'LOADING',payload:false})

    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        

    }

}
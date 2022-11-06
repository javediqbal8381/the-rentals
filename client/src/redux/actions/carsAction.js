import { message } from 'antd'
import axios from 'axios'

export const getAllCars =()=> async dispatch=>{
     
    dispatch({type:'LOADING',payload:true})

    try {
        const response=await axios.get('/api/cars/getallcars')
        dispatch({type:'GET_ALL_CARS',payload:response.data})
        dispatch({type:'LOADING',payload:false})

    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        

    }

}


export const addCar =(reqObj)=> async dispatch=>{
     
    dispatch({type:'LOADING',payload:true})

    try {
        await axios.post('/api/cars/addcar',reqObj)
        message.success('Car added successfully')

        setTimeout(()=>{
                window.location.href='/admin'
                dispatch({type:'LOADING',payload:false})

        },2000)

    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        

    }

}

export const editCar =(reqObj)=> async dispatch=>{
     
    dispatch({type:'LOADING',payload:true})

    try {
        await axios.post('/api/cars/editcar',reqObj)
        message.success('Car updated successfully')

        setTimeout(()=>{
                window.location.href='/admin'
                dispatch({type:'LOADING',payload:true})
        },1000)

    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        

    }

}

export const deleteCar =(reqObj)=> async dispatch=>{
     
    dispatch({type:'LOADING',payload:true})

    try {
        await axios.post('/api/cars/deletecar',reqObj)
        message.success('Car removed successfully')

        setTimeout(()=>{
                window.location.reload()
                dispatch({type:'LOADING',payload:false})

        },1000)

    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        

    }

}
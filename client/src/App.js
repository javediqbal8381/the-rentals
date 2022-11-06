import './App.css';
import {Route,BrowserRouter,Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import BookingCar from './pages/BookingCar';
import Register from './pages/Register';
import 'antd/dist/antd.min.css';    
import UserBookings from './pages/UserBookings';
import LandingPage from './pages/LandingPage'
import Autocare from './pages/Autocare';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import GetAutocare from './pages/GetAutocare';
import ContactUs from './pages/ContactUs';
import Usersinadmin from './pages/Usersinadmin';
function App() {  
  return (
    <div className="App">
       <BrowserRouter>
       
         <ProtectedRoute path='/' exact component={Home}  />
         <Route path='/login' exact component={Login}  />
         <Route path='/register' exact component={Register}  />

         <Route path='/landingpage' exact component={LandingPage}  />
         <ProtectedRoute path='/booking/:carid' exact component={BookingCar}  />
         <ProtectedRoute path='/getautocare' exact component={GetAutocare}  />
         <ProtectedRoute path='/userbookings' exact component={UserBookings}  />
         <ProtectedRoute path='/autocare' exact component={Autocare}  />
         <ProtectedRoute path='/addcar' exact component={AddCar}  />
         <ProtectedRoute path='/contactus' exact component={ContactUs}  />
         <ProtectedRoute path='/admin' exact component={AdminHome}  />
         <ProtectedRoute path='/editcar/:carid' exact component={EditCar}  />
         <ProtectedRoute path='/allusers' exact component={Usersinadmin}  />

       </BrowserRouter>
    </div>
  );
}



export default App;

export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/landingpage'/>
    }

}




// export function ProtectedRoute(props)
// {


//     if(localStorage.getItem('user'))
//     {
//       return <Route {...props}/>
//     }
//     else{
//       return <Redirect to='/landingpage'/>
//     }

// }



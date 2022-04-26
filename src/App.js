import React, {useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Switch from 'react-dom';
import { Auth, getAuth } from 'firebase/auth';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/UserSlice';



function App() {
  const user=useSelector(selectUser);
  const auth=getAuth();
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.mail
        }))
      }else{
        dispatch(logout)
      }
    })
    return unSubscribe;
  },[dispatch])

  return (
    <div className='App'>
      {!user ? (<Login/>) :( 
      
      <Routes>
          <Route exact path='/checkout' element={<Paypal/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Home/>}/>
      </Routes>  
      )}
    </div>
  );
}

/*const useStyles = makeStyle((theme)=>({
  root:{
    backgroundColor:'#111',
    minHeight:'100vh',
  },
}));*/

export default App;

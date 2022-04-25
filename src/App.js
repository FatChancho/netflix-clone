import  {minHeight,makeStyle} from '@emotion/styled';
import React, {useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Switch from 'react-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';
import './App.css';


function App() {
  const user='PEPE';
  //const classes =useStyles();
  return (
    <div className='App'>
      {!user ? (<Login/>) :( 
      
      <Routes>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/checkout' element={<Paypal/>}/>
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

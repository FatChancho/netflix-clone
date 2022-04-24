import { minHeight,makeStyle } from '@emotion/styled';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';


function App() {
  const user=null;
  const classes =useStyles();
  return (
    <div className={classes.root}>
    <Router>
      {!user ? (<Login/>) : (
        <Switch>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/checkout' element={<Paypal/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Switch>
      )}
    </Router>
    </div>
  );
}

const useStyles = makeStyle((theme)=>({
  root:{
    backgroundColor:'#111',
    minHeight:'100vh',
  },
}));

export default App;

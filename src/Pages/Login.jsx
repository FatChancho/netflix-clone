import React, { useState } from 'react';
import './Pages.css'
import logo from '../Images/logo.png'
import heroBanner from '../Images/Hero-bannner.jpg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Signup from '../Pages/Signup'

function Login(props) {
    const[signin,setSignin]=useState(true)
    return (
      <div className='login'>
        
            <Link to='/'>
                <div>
                    <img className='logo' src={logo} alt='logo'></img>
                </div>
            </Link>
            <Link to='/login'>
                <div className='btn'>
                    <Button>Iniciar sesion</Button>
                </div>
            </Link>
        
            {signin ? (<Signup/>) : (
                <div>
                    <div className='info'>
                        <h3>Unlimited films, TV progrmas and more</h3>
                        <h5>Watch anywhere. Cancel at any time</h5>
                        <h6>Ready to watch? Enter your email to create or restar your membership</h6>
                    </div>
                    <div className='input'>
                        <input placeholder='E-mail address'></input>
                        <div className='btn-start'><Button>GET STARTED</Button></div>
                    </div>
                </div>
                 )}
            
      </div>        
    );
}

export default Login;
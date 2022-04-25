import React from 'react';
import Header from '../components/Header';
import avatar from '../Images/aa64a1ee094b8f798053b51800c622fb.jpg'
import Plans from '../components/Plans'
import { Button } from '@mui/material';

function Profile() {
    return (
        <div className='profilePage'>
            <Header/>   
            <h1>Edit Profile</h1>
            <div className='flex'>
                    <img className='avatar' src={avatar} alt='avatar'></img>
                    <div className='column'>
                        <h3>Email Usuario</h3>
                        <h2>Plans</h2>
                        <hr/>
                    </div>                        
            </div>
                <div className='plans'>
                    <Plans cost={7.99}>Netflix Standard</Plans>
                    <Plans cost={9.99}>Netflix Basic</Plans>
                    <Plans cost={12.99}>Netflix Premium</Plans>
                </div>
            <div className='btn2'>
                <Button>Sign out</Button>
            </div>
        </div>
        
    );
}

export default Profile;
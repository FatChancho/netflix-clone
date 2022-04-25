import React from 'react';
import {Button} from '@mui/material';
import './components.css';

function Plans({props,children}) {
    return (
        <div className='planclass'>
            <p>{children}</p>
            <Button>Subscribe</Button>
        </div>
    );
}

export default Plans;
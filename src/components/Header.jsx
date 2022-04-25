import React, { useEffect, useState } from 'react';
import {AppBar, Avatar, Toolbar,IconButton} from '@mui/material'
import logo from '../Images/logo.png'
import './components.css'
import { Link } from 'react-router-dom';

function Header(props) {
    const [show,setShow]=useState(true);
    let clase=' appBar';
    show ? clase+=' show':clase+=' hide'

    const hideHeader=()=>{
        window.scrollY>100 ? setShow(true) : setShow(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll',hideHeader)
        return ()=>window.removeEventListener('scroll',hideHeader)
    },[])
    return (
        <AppBar className={clase}>
            <Toolbar className='toolBar'>
                <Link to='/'><IconButton><img src={logo} alt='logo' className='logo'></img></IconButton></Link>
                <Link to='/profile'><Avatar style={{cursor:'pointer'}}/></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
import { Button } from '@mui/material';
import React from 'react';
import heroBanner from '../Images/netflix.jpg'

function Banner() {
    const truncate = (str,n)=> str?.length>n ? `${str.substr(0,n-1)}...` : str

    return (
        <div>
            <div className='banner'>
                <img src={heroBanner} alt='banner'></img>
                <h1>Movie Title</h1>
            </div>
            <div className='buttons'>
                <Button>Play</Button>
                <Button>My List</Button>
            </div>
            <div className='description'>
                <p>{truncate(`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,150)}</p>
            </div>
        </div>
    );
}

export default Banner;
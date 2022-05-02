import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import heroBanner from '../Images/netflix.jpg'
import { baseURL } from '../Requests';
import request from '../Requests';

function Banner() {
    const truncate = (str,n)=> str?.length>n ? `${str.substr(0,n-1)}...` : str
    const[movie,setMovie]=useState();
    const url_img='https://image.tmdb.org/t/p/original'
    
    useEffect(()=>{
        axios.get(baseURL+request.fetchNetflixOriginals)
        .then((response)=>{
            const random=Math.floor(Math.random()*(response.data.results.length-1))
            random ? setMovie(response.data.results[random]):
            console.log('Movie',movie)
        })
        .catch((err)=>console.log('error al traer random',err))
    },[])

    return (
        <div>
            <div className='banner'>
                {movie && <img src={url_img+movie.poster_path} alt='banner'></img>}
                {movie && <h1>{movie.original_name}</h1>}
            </div>
            <div className='buttons'>
                <Button>Play</Button>
                <Button>My List</Button>
            </div>
            <div className='description'>
                {movie && <p>{truncate(movie.overview,150)}</p>}
            </div>
        </div>
    );
}

export default Banner;
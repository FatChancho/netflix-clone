import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../Requests';

function Row({titulo,fetchURL}) {
    const [movies,setMovies]=useState([]);
    const url_img='https://image.tmdb.org/t/p/original'

    useEffect(()=>{
        axios.get(baseURL+fetchURL)
        .then((response)=>{setMovies(response.data.results);})
        .catch((err)=>console.log('error al traer la data',err))
    },[]);

    return (
        <div className='row'>
            <div>
                <h3>{titulo}</h3>
            </div>
            <div className='row-flex'>
            {movies?.map((peli)=>(
                <img key={peli.id} className='image' src={url_img+peli.poster_path} alt='poster_peli'></img>
                ))}
            </div>
        </div>
    );
}

export default Row;
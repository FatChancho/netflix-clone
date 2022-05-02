import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row'
import request from '../Requests'

function Home(props) {
    return (
        <div>
            <Header/>
            <Banner/>
            <Row titulo='Netflix Originals' fetchURL={request.fetchNetflixOriginals}/>
            <Row titulo='Top Rated' fetchURL={request.fetchTopRated}/>
            <Row titulo='Trending' fetchURL={request.fetchTrending}/>
            <Row titulo='Action Movies' fetchURL={request.fetchActionMovies}/>
            <Row titulo='Horror Movies' fetchURL={request.fetchHorrorMovies}/>
            <Row titulo='Comedy Movies' fetchURL={request.fetchComediesMovies}/>
            <Row titulo='Romance Movies' fetchURL={request.fetchRomanceMovies}/> 
            <Row titulo='Documentaries' fetchURL={request.fetchDocumentaries}/> 
        </div>
    );
}

export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList';

export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState([]);
    
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get('https://movies-library-6xb2.onrender.com/trending');
        console.log(response);
        
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending data:', error);
      }
    };
  

    useEffect(() => {
      fetchTrendingData();
    }, []);
  
    return (
      <div>
        <h1>Trending Movies</h1>
        <MovieList movies={trendingMovies} />
      </div>
    );
  };


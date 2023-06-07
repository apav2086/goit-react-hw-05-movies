import { useState, useEffect } from 'react';
import Movies from '../pages/Movies';
import MoviesDetails from './MovieDetails';
import { getTrendingMovies } from '../services/movies-api';;


export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);
            })
    }, []);
    return (
        <Movies>
            <MoviesDetails data={movies} />
        </Movies>
    );  
}
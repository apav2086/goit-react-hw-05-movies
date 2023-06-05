import { useState, useEffect } from 'react';
import MoviesList from './MoviesList';
import MoviesListItem from './MovieListItem';
import { getTrendingMovies } from 'service/movies-api';


export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
            setMovies((data.results))
        })
    }, [])
    return <MoviesList>
        <MoviesListItem data={movies} />
    </MoviesList>
}
import React, { useState, useEffect } from 'react';
import MovieSearch from '../components/MovieSearch';
import { getSearchMovie } from '../services/movies-api';
import { Link, useSearchParams } from 'react-router-dom';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) {
            return;
        }
        getSearchMovie(query)
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, [searchParams]);

    return (
        <div>
            <MovieSearch setSearchParams={setSearchParams} />
            {movies && (
  <ul>
                {movies.map(({ id, title }) => (
                <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                </li>
                 
            ))}
             </ul>
            )}
        
        </div>
    );
}
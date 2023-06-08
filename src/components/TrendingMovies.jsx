import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/movies-api';
import { Link } from 'react-router-dom';


export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data);
            })
    }, []);
    return (
        <>
            <h4>Trending Today</h4>
           <ul>
                {movies.map(({ id, title }) => (
                <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                </li>
                 
            ))}
             </ul>
            </>
    );  
}
import { useState, useEffect } from 'react';
import Movies from '../pages/Movies';
import { getTrendingMovies } from '../services/movies-api';
import { Link, useNavigate } from 'react-router-dom';


export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data);
            })
    }, []);
    return (
        <>
             <Movies />
            <h4>Trending Today</h4>
           
            {movies.map((data, id) => (<ul>
                <li key={id}>
<Link to={nav(data.homepage)}>{data.title}</Link>
                </li>
            </ul>
                 
            ))}
            </>
    );  
}
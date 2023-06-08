import { useState, useEffect } from 'react';
import MovieSearch from '../components/MovieSearch';
import { getSearchMovie } from '../services/movies-api';
import { Link } from 'react-router-dom';
export default function Movies() {
    const [search, setSearch] = useState([]);
    useEffect(() => {
        getSearchMovie()
            .then(data => {
                setSearch(data);
            })
    }, []);
    return (
        <div>
            <MovieSearch setSearch={setSearch} search={search} />
            {search && (
  <ul>
                {search.map(({ id, title }) => (
                <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                </li>
                 
            ))}
             </ul>
            )}
        
        </div>
    );
}
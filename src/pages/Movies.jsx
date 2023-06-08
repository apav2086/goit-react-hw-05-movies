import { useState, useEffect } from 'react';
import MovieSearch from '../components/MovieSearch';
import { Link } from 'react-router-dom';
import { getSearchMovie } from '../services/movies-api';
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
          
    </div>
    );
}
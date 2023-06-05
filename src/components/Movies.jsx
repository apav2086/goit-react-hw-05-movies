import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchMovie } from 'services/movies-api';
import MovieSearch from './MovieSearch';

export default function Movies() {
    const [movie, setMovie] = useState('');
    const navigate = useNavigate();
   

    const handleSubmit = searchQueryValue => {
        if (searchQuery === searchQueryValue) {
            return console.log('Input new search query')
        }
        navigate(`${location.pathname}?query=${searchQuery}`);
        setSearchQuery(searchQueryValue);
    }
    useEffect(() => {
        if (query !== '') {
            setSearchQuery(query);
        }
    }, [query])

    return <div>
        <MovieSearch searchQuery={ searchQuery } />
    </div>
}
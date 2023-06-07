import { useState } from 'react';
import MovieSearch from '../components/MovieSearch';

export default function Movies() {
    const [search, setSearch] = useState('');

    return (
        <div>
            <MovieSearch setSearch={setSearch} search={search} />
        MOVIES
    </div>
    );
}
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCast } from '../services/movies-api';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getCast(movieId).then(data => {
            setCast(data.cast);
        })
    }, [movieId]);

    return (
        <div>
            {cast && (
                <ul>{cast.map(({ id, character, original_name, profile_path }) => (
                < li key={id} >
                    <div>{profile_path}</div>
                    <p>{original_name}</p>
                    <p>{character}</p>
                </li>))}
            </ul>)}
        </div>);
}
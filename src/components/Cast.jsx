import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../services/movies-api';
import css from '../styles/cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  console.log(cast);

  return (
    <div>
      {cast && (
        <ul className={css.list}>
          {cast.map(({ id, character, original_name, profile_path }) => (
            <li className={css.list} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`} width={'120 px'}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
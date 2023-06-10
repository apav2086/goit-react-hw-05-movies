import { useEffect, useState } from 'react';
import { Outlet} from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { getMovieById } from '../services/movies-api';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = getMovieById(id);
  //const [data] = useState(() => data.filter(movie => movie));

  return (
    <div>
      <Link to="/">Back</Link>
      {movie && (
        <div>
          <h3>{movie.title}</h3>
          <img src={movie.poster_path} alt="movie poster" />
          <h4>User Score: {movie.score}</h4>
          <h5>Overview: {movie.overview}</h5>
          <h5>Genres: {movie.genres}</h5>
          <h5>Additional information</h5>
          <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="cast" element={<Reviews />} /> 
            </Routes>
          <Outlet />
        </div>
      )}
    </div>
  );
}
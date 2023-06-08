import { useState } from 'react';
import { Outlet} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetails() {
 
  const [data] = useState(() => data.filter(movie => movie));

  return (
    <div>
      <Link to="/">Back</Link>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <img src={data.poster_path} alt="movie poster" />
          <h4>User Score: {data.score}</h4>
          <h5>Overview: {data.overview}</h5>
          <h5>Genres: {data.genres}</h5>
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
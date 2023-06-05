import { useState } from "react";
import { Outlet} from "react-router-dom";
import { Link} from 'react-router-dom';

export default function MovieDetails() {
 
  const [data, setData] = useState(() => moviesData.filter(movie =>
    movie))
 
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
          <ul>
            <li>
              <Link to={`/movies/${data.Id}/cast`} >Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${data.Id}/reviews`} >Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
       
      )
      }
    </div>
  );
}
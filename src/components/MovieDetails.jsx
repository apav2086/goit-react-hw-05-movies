import { useEffect, useState } from 'react';
import { useNavigate, useParams, Outlet, Route, Routes, Link } from 'react-router-dom';
import { getMovieById } from '../services/movies-api';
import Cast from './Cast';
import Reviews from './Reviews';
import css from '../styles/movieDetails.module.css';


export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(error => {
        // Handle error
        console.log(error);
        setIsLoading(false);
      });
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={goBack}>Go back</button>
          {movie ? (
              <div className={css.movie}>
                <section className={css.general}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="movie poster"
                />
                <section className={css.details}>
                <h3 className={css.title}>{movie.title}</h3>
                 <p>Popularity: {movie.popularity}</p>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
                <h4>Genres {''}</h4>
                 <ul>
                  {movie.genres.length > 0 ? (
                 movie.genres.map(({ id, name }, index) => (
                  <li key={id}>{(index ? '' : '') + name}</li>
                 ))
                  ) : (
                      <p>Other</p>
                )}   
                  </ul>
                  </section>
                  </section>
                <section className={css.additional}>
                  <h4>Additional Details</h4>
                  <ul className={css.list}>
                    <li className={css.item}><Link to="cast">Cast</Link></li>
                    <li className={css.item}> <Link to="reviews">Reviews</Link></li>
                  </ul>
                <Routes>
                <Route path="/cast" element={<Cast />} />
                <Route path="/reviews" element={<Reviews />} />
              </Routes>
                  <Outlet />
                  </section>
            </div>
          ) : (
            <div>No movie found.</div>
          )}
        </>
      )}
    </div>
  );
}

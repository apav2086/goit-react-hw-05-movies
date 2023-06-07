import axios from 'axios';
const KEY = "888a585cd1ff82046a0cbf3e35de5ad9f";
const URL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = async () => {
  const url = `${URL}trending/movie/day?api_key=${KEY}`;
  try {
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return error;
  }
};

export const getSearchMovie = async movie => {
  const url = `${URL}search/movie?api_key=${KEY}&query=${movie}`;
  try {
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return error;
  }
};

export const getMovieById = async movieId => {
  const url = `${URL}movie/${movieId}?api_key=${KEY}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const getCast = async movieId => {
  const url = `${URL}movie/${movieId}/credits?api_key=${KEY}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const getReviews = async movieId => {
  const url = `${URL}movie/${movieId}/reviews?api_key=${KEY}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};


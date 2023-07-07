import axios from 'axios';

export const API_KEY = 'd7d105da928b8b5d0dfd1c50c77a6910';

export const getMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return response.data.results;
};

export const getMovieDetails = async id => {
  const movieWithId = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return movieWithId.data;
};

export const getCast = async movieId => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return cast.data.cast;
};

export const getReviews = async movieId => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return reviews.data.results;
};

export const searchMovies = async query => {
  const search = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });

  return search.data.results;
};

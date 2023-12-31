import { SearchBar } from 'components/SearchBar/SearchBar';
import { ShowMoviesList } from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
         searchMovies(query)
      .then(response => setMoviesList(response))
      .catch(error => console.log(error));
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ShowMoviesList movies={moviesList} navigate={''} />
    </>
  );
};

export default Movies;
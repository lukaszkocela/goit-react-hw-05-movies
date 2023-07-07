import { ShowMoviesList } from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setMovies(await getMovies());
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ShowMoviesList movies={movies} navigate={'movies/'} />
    </>
  );
};

export default Home;
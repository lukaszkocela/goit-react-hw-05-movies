import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { Suspense, useEffect, useState } from 'react';
import { MovieInfo, Wrapper, Button, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  const link = location.state?.from ?? '/';

      const asyncFunc = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    // eslint-disable-next-line
    asyncFunc();
  }, [id]);

  return (
    <>
      <Link to={link}>
        <Button>← Go back</Button>
      </Link>
      <Wrapper>
        <MovieInfo>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : 'https://img.freepik.com/free-vector/glitch-style-poster_1284-24645.jpg?w=300&t=st=1687363450~exp=1687364050~hmac=c62699308b0e7656912ddd48d9a5df99c7b5de993d3b5d3b02d749643b6d89c1'
            }
            alt={movieDetails.title}
            width={250}
          />
        </MovieInfo>
        <div>
          <h2>{movieDetails.title}{movieDetails.release_date ? `(${movieDetails.release_date.slice(0, 4)})` : ""}</h2>
          <p>User score: {movieDetails.vote_average * 10} %</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <Container>
            {genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </Container>
        </div>
      </Wrapper>
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: link }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: link }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
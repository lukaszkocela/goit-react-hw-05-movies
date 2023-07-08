import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCast(id)
      .then(response => setCast(response))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <ul>
      {cast.length === 0 ? (
        <p>No additional information about the selected film</p>
      ) : (
        cast.map(el => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=200&t=st=1687362525~exp=1687363125~hmac=0b38e340921c7c42beb3fc2b7370fa7a73acf9815fd13471f441ff07e6ae0246'
              }
              width={200}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
import { Main, Error } from './NoInfo.styled';

const NoInfo = () => {
  return (
    <Main>
      <Error>404</Error>
      <p>Sorry, we didn't find that page!!!</p>
    </Main>
  );
};

export default NoInfo;
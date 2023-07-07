import { Wrapper, Input } from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input type="text" name="query" required />
      <button type="submit">Search</button>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
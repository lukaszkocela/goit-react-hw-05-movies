import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  box-shadow: 1px 3px 5px 1px rgba(69, 69, 90, 0.3);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  margin-left: 10px;
  padding: 15px;
`;

export const Link = styled(NavLink)`
  font - size: 24px;
  font-weight: bold;
  color: darkgrey;
  text-decoration: none;
  &.active {
    cursor: pointer;
    color: orangered;
  }
`;

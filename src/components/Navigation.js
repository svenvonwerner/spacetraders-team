import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <LinkButton to="/userstatus">User status</LinkButton>
      <LinkButton to="/ships">Available ships</LinkButton>
      <LinkButton to="/market">Marketplace</LinkButton>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid gold;
  border-radius: 4px;
  background-color: #021e3e;
  text-decoration: none;
  color: gold;
  margin: 5px;

  &.active {
    background-color: gold;
    color: #021e3e;
  }
`;

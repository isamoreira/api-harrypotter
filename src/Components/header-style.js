import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #740001;
`;

export const IMG = styled.img`
  width: 6vw;
`;

export const Lista = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const Item = styled.li`
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #d8ad3c;
  font-size: 30px;
`;

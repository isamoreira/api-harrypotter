import React from "react";
import LogoHP from "../img/logo-hp.png";
import { Nav, IMG, Lista, Item, NavLink } from "./header-style";

const Header = ({ rota1, rota2 }) => {
  return (
    <div>
      <Nav>
        <IMG src={LogoHP} alt="" />
        <Lista>
          <Item>
            <NavLink to="/">{rota1}</NavLink>
          </Item>
          <Item>
            <NavLink to="/personagens">{rota2}</NavLink>
          </Item>
        </Lista>
      </Nav>
    </div>
  );
};

export default Header;

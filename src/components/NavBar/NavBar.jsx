import React from "react";
import { StNavBar } from "../../styles/NavBar.styles";
import { NavBarLink } from "../../styles/GlobalStyles";

function NavBar({ fontSize, fontWeight }) {
  return (
    <StNavBar>
      <ul>
        <NavBarLink to="#" fontSize={fontSize} fontWeight={fontWeight}>
          <li>소개</li>
        </NavBarLink>

        <NavBarLink to="/auction" fontSize={fontSize} fontWeight={fontWeight}>
          <li>경매품</li>
        </NavBarLink>
      </ul>
    </StNavBar>
  );
}

export default NavBar;

import React from "react";
import { StNavBar, linkStyle } from "../../styles/NavBar.styles";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <StNavBar>
      <ul>
        <Link to="#" style={linkStyle}>
          <li>소개</li>
        </Link>

        <Link to="/auction" style={linkStyle}>
          <li>경매품</li>
        </Link>
      </ul>
    </StNavBar>
  );
}

export default NavBar;

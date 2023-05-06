import React from "react";
import {
  StHeader,
  StLogo,
  styleFlex,
  logoLinkStyle,
} from "../../styles/Header.styles";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Header() {
  const navigate = useNavigate();
  return (
    <StHeader>
      <div style={styleFlex}>
        <StLogo>
          <Link to="/" style={logoLinkStyle}>
            Get Ready, Auction!
          </Link>
        </StLogo>

        <NavBar />
      </div>

      <Button
        size="var(--size-small)"
        fontSize="var(--font-small)"
        padding="8px"
        onClick={() => navigate("/user/login")}
      >
        Login
      </Button>
    </StHeader>
  );
}

export default Header;

import React from "react";
import {
  StHeader,
  StLogo,
  styleFlex,
} from "../../styles/Header.styles";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { LogoLink } from "../../styles/GlobalStyles";

function Header() {
  const navigate = useNavigate();
  return (
    <StHeader>
      <div style={styleFlex}>
        <StLogo>
          <LogoLink
            to="/"
            fontSize="var(--font-large)"
          >
            Get Ready, Auction!
          </LogoLink>
        </StLogo>

        <NavBar
          fontSize="var(--font-medium)"
          fontWeight="var(--weight-semi-bold)"
        />
      </div>

      <Button
        size="var(--size-small)"
        fontSize="var(--font-regular)"
        padding="8px"
        onClick={() => navigate("/user/login")}
      >
        Login
      </Button>
    </StHeader>
  );
}

export default Header;

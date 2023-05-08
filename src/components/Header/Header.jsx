import React from "react";
import { StHeaderContainer, StHeader, StLogo, styleFlex } from "../../styles/Header.styles";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { LogoLink } from "../../styles/GlobalStyles";

function Header() {
  const navigate = useNavigate();
  return (
    <StHeaderContainer>
      <StHeader>
        <div style={styleFlex}>
          <StLogo>
            <LogoLink
              to="/"
              fontSize="var(--font-large)"
              fontWeight="var(--weight-semi-bold)"
              color="var(--color-blue)"
            >
              Get Ready, Auction!
            </LogoLink>
          </StLogo>

          <NavBar
            fontSize="var(--font-regular)"
            fontWeight="var(--weight-semi-bold)"
          />
        </div>

<<<<<<< HEAD
      <Button
        size="var(--size-small)"
        fontSize="var(--font-small)"
        color=""
        padding="8px"
        onClick={() => navigate("/user/login")}
      >
        Login
      </Button>
    </StHeader>
=======
        <Button
          size="var(--size-small)"
          fontSize="var(--font-regular)"
          padding="8px"
          onClick={() => navigate("/user/login")}
        >
          Login
        </Button>
      </StHeader>
    </StHeaderContainer>
>>>>>>> a1de9ffc367b5b64d5a77f1fe1b6490f39bdb0d8
  );
}

export default Header;

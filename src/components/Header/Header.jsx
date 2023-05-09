import React, { useEffect } from "react";
import {
  StHeaderContainer,
  StHeader,
  StLogo,
  styleFlex,
} from "../../styles/Header.styles";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { LogoLink } from "../../styles/GlobalStyles";
import { useCookies } from "react-cookie";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux"


function Header() {
  const navigate = useNavigate();
  const [cookies] = useCookies("userAuth");
  console.log(cookies.userAuth)

  // useEffect(() => {
  //   const userAuth = cookies.userAuth;
  //   if (userAuth) {
  //     console.log("로그인한 유저가 있습니다");
  //   } else {
  //     return console.log("로그인한 유저가 없습니다");
  //   }
  // }, []);

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
        {cookies.userAuth === 'undefined' ? (
          <Button
          size="var(--size-small)"
          fontSize="var(--font-regular)"
          padding="8px"
          onClick={() => navigate("/user/login")}
        >
          로그인
        </Button>
        ) : (
          
          <Profile />
        )}
      </StHeader>
    </StHeaderContainer>
  );
}

export default Header;

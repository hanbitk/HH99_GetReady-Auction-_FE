import React from "react";
import NavBar from "../NavBar/NavBar";
import { StFooter, StFooterCopyright } from "../../styles/Footer.styles";
import { LogoLink } from "../../styles/GlobalStyles";

function Footer() {
  return (
    <StFooter>
      <div>
        <LogoLink to="/" fontSize="var(--font-small)">
          Get Ready, Auction!
        </LogoLink>
      </div>
      <div>
        <NavBar
          fontSize="var(--font-small)"
          fontWeight="var(--weight-semi-bold)"
        />
      </div>
      <div>
        <StFooterCopyright>© GetReady,Auction!, 2023. We love our users!</StFooterCopyright>
      </div>
    </StFooter>
  );
}

export default Footer;

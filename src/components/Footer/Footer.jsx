import React from "react";
import NavBar from "../NavBar/NavBar";
import { StFooter, StFooterCopyright } from "../../styles/Footer.styles";
import { LogoLink } from "../../styles/GlobalStyles";

function Footer() {
  return (
    <StFooter>
      <div>
        <LogoLink
          to="/"
          fontSize="var(--font-small)"
          fontWeight="var(--weight-bold)"
          color="var(--color-blue)"
        >
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
        <StFooterCopyright>
          copyright© get ready, auction! all right reserved.
        </StFooterCopyright>
      </div>
    </StFooter>
  );
}

export default Footer;

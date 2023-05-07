import React from "react";
import { StContainer } from "../styles/Login.styles";
import {
  StSignUpContainer,
  LogoLinkStyle,
  StSignUpHeader,
  StSignUpFormHeader,
  StSignUpForm,
  StLogIn,
  StSignUpInputs,
  StSignUpInput,
  StInputBox,
  StSignUp,
  SignUpLinkStyle,
  iconStyle,
  signUpIconStyle,
} from "../styles/Signup.styles";
import { StFooterCopyright } from "../styles/Footer.styles";
import Button from "../components/Buttons/Button";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";

function Signup() {
  return (
    <StContainer>
      <StSignUpContainer>
        <LogoLinkStyle to="/">
          <StSignUpHeader>Get Ready, Auction!</StSignUpHeader>
        </LogoLinkStyle>

        <StSignUpForm>
          <StSignUpFormHeader>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <MdLogin style={signUpIconStyle} />
              <h4 style={{ color: "var(--color-blue)" }}>
                사용자 이름으로 회원가입
              </h4>
            </div>
            <StSignUp>
              <StSignUpInputs>
                <StInputBox borderRadius="10px 10px 0 0">
                  <AiOutlineUser style={iconStyle} />
                  <StSignUpInput placeholder="Username" />
                </StInputBox>
                <StInputBox borderRadius="0 0 10px 10px">
                  <RiLockPasswordLine style={iconStyle} />
                  <StSignUpInput placeholder="Password" />
                </StInputBox>
              </StSignUpInputs>
            </StSignUp>
          </StSignUpFormHeader>
          <Button size="450px" fontSize="var(--font-regular)" padding="10px">
            회원가입
          </Button>
        </StSignUpForm>

        <StLogIn>
          <p
            style={{
              color: "var(--color-blue)",
              fontSize: "var(--font-small)",
            }}
          >
            겟 레디, 옥션! 회원 계정이 있으다면, 지금 시작하세요!
          </p>
          <SignUpLinkStyle to="/user/login">로그인</SignUpLinkStyle>
        </StLogIn>

        <div>
          <StFooterCopyright style={{ fontWeight: "var(--weight-semi-bold)" }}>
            copyright© get ready, auction! all right reserved.
          </StFooterCopyright>
        </div>
      </StSignUpContainer>
    </StContainer>
  );
}

export default Signup;

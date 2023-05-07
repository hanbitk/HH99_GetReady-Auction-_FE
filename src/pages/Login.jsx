import React from "react";
import { useNavigate } from "react-router-dom/dist";
import {
  StLogInContainer,
  LogoLinkStyle,
  StLogInHeader,
  StLogInFormHeader,
  StLogInForm,
  StLogIn,
  StLogInInputs,
  StLogInInput,
  StInputBox,
  StSignUp,
  SignUpLinkStyle,
  iconStyle,
  logInIconStyle,
  StContainer,
} from "../styles/Login.styles";
import { StFooterCopyright } from "../styles/Footer.styles";
import Button from "../components/Buttons/Button";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";

function Login() {
  const navigate = useNavigate();

  return (
    <StContainer>
      <StLogInContainer>
        <LogoLinkStyle to="/">
          <StLogInHeader>Get Ready, Auction!</StLogInHeader>
        </LogoLinkStyle>

        <StLogInForm>
          <StLogInFormHeader>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <MdLogin style={logInIconStyle} />
              <h4 style={{ color: "var(--color-blue)" }}>
                사용자 이름으로 로그인
              </h4>
            </div>
            <StLogIn>
              <StLogInInputs>
                <StInputBox borderRadius="10px 10px 0 0">
                  <AiOutlineUser style={iconStyle} />
                  <StLogInInput placeholder="Username" />
                </StInputBox>
                <StInputBox borderRadius="0 0 10px 10px">
                  <RiLockPasswordLine style={iconStyle} />
                  <StLogInInput placeholder="Password" />
                </StInputBox>
              </StLogInInputs>
            </StLogIn>
          </StLogInFormHeader>
          <Button size="450px" fontSize="var(--font-regular)" padding="10px">
            로그인
          </Button>
        </StLogInForm>

        <StSignUp>
          <p
            style={{
              color: "var(--color-blue)",
              fontSize: "var(--font-small)",
            }}
          >
            겟 레디, 옥션! 회원 계정이 아직 없으신가요?
          </p>
          <SignUpLinkStyle to="/user/signup">회원가입</SignUpLinkStyle>
        </StSignUp>

        <div>
          <StFooterCopyright style={{fontWeight:"var(--weight-semi-bold)"}}>
            copyright© get ready, auction! all right reserved.
          </StFooterCopyright>
        </div>
      </StLogInContainer>
    </StContainer>
  );
}

export default Login;

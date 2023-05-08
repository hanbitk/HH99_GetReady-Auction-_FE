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
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { signUp } from "../core/api/auth/signup";

function Signup() {
  const navigate = useNavigate();
  const [username, onChangeUsernameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo({ ...userInfo, [name]: value });
  // };

  // const queryClient = useQueryClient();
  // const mutation = useMutation(signUp, {
  //   onSuccess: () => {
  //     console.log("회원가입 완료");
  //   },
  // });
  const queryClient = useQueryClient();
  const mutation = useMutation(signUp, {
    onSuccess: () => {
      console.log("회원가입 완료");
    },
  });

  const formValidation = (e) => {
    e.preventDefault();
    const usernameRegex = /^[a-z0-9]{4,10}$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,15}$/;

    if (!username || !password) {
      alert("이메일과 비밀번호를 모두 입력하세요.");
      return;
    } else if (!usernameRegex.test(username)) {
      alert(
        "사용자 이름은 최소 4~10자, 알파벳 소문자 및 숫자로 구성되어야 합니다."
      );
      return;
    } else if (!passwordRegex.test(password)) {
      alert(
        "비밀번호는 최소 8~15자, 알파벳 대소문자 및 숫자로 구성되어야 합니다."
      );
      return;
    } else {
      console.log("username", username);
      mutation.mutate({
        username,
        password,
      });
    }

    console.log("username", username);
    console.log("password", password);

    // setTimeout(() => {
    //   navigate("/auction");
    // }, 1000);
  };

  return (
    <StContainer>
      <StSignUpContainer>
        {/* Header */}
        <LogoLinkStyle to="/">
          <StSignUpHeader>Get Ready, Auction!</StSignUpHeader>
        </LogoLinkStyle>

        {/* Input */}
        <StSignUpForm onSubmit={formValidation}>
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
                  <StSignUpInput
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={onChangeUsernameHandler}
                  />
                </StInputBox>
                <StInputBox borderRadius="0 0 10px 10px">
                  <RiLockPasswordLine style={iconStyle} />
                  <StSignUpInput
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChangePasswordHandler}
                  />
                </StInputBox>
                {/* {errors && (
                  <div
                    style={{
                      color: "var(--color-red)",
                      fontSize: "var(--font-small)",
                      marginTop: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {errors}
                  </div>
                )} */}
              </StSignUpInputs>
            </StSignUp>
          </StSignUpFormHeader>
          <Button size="450px" fontSize="var(--font-regular)" padding="10px">
            회원가입
          </Button>
        </StSignUpForm>

        {/* Footer */}
        <StLogIn>
          <p
            style={{
              color: "var(--color-blue)",
              fontSize: "var(--font-small)",
            }}
          >
            겟 레디, 옥션! 회원 계정이 있다면, 지금 시작하세요!
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

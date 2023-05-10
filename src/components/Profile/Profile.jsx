import React from "react";
import {
  ProfileContainer,
  StProfile,
  StProfileIcon,
} from "../../styles/MyPage.styles";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useCookies } from "react-cookie";
import instance from "../../axios/api";
import { useState } from "react";

function Profile() {
  const [cookies, removeCookie] = useCookies("userAuth");
  const token = cookies.userAuth;

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      // 쿠키 삭제
      removeCookie("userAuth");

      // 홈페이지로 리다이렉트
      setTimeout(() =>{
        window.location.href = "/";
      }, 1000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileContainer>
      <StProfile onClick={() => navigate("/mypage/auction")}>
        <AiOutlineUser style={StProfileIcon} />
      </StProfile>
      <Button
        size="var(--size-small)"
        fontSize="var(--font-regular)"
        padding="8px"
        onClick={logoutHandler}
      >
        로그아웃
      </Button>
    </ProfileContainer>
  );
}

export default Profile;

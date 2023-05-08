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

function Profile() {
  const [cookies, removeCookie] = useCookies("userAuth");
  const token = cookies.userAuth;

  const logoutHandler = async () => {
    // try {
    //   // 쿠키 삭제
    //   removeCookie("userAuth");

    //   // 서버에 로그아웃 요청 보내기
    //   await instance.post("/user/logout", {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });

    //   // 홈페이지로 리다이렉트
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
    alert('로그아웃')
  };

  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <Button
        size="var(--size-small)"
        fontSize="var(--font-regular)"
        padding="8px"
        onClick={logoutHandler}
      >
        로그아웃
      </Button>
      <StProfile onClick={() => navigate("/mypage/auction")}>
        <AiOutlineUser style={StProfileIcon} />
      </StProfile>
    </ProfileContainer>
  );
}

export default Profile;

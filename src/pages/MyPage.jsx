import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import { useRef, useState, useEffect } from "react";
import api from "../axios/api";
import {
  SectionMyPage,
  StMyPageButtons,
  StMyPageArticle,
  ProductsBox,
  StMyProductImg,
} from "../styles/MyPage.styles";
import Section from "../components/Section/Section";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

function MyPage() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const [cookies] = useCookies();

  return (
    <Section>
      {cookies.userAuth == "undefined" || !cookies.userAuth ? (
        (() => {
          setTimeout(() => {
            alert("로그인 후 확인 가능한 페이지입니다.");
            navigate("/user/login");
          }, 500);
        })()
      ) : (
        <SectionMyPage>
          <h1 style={{ marginBottom: "10px" }}>My Page</h1>
          <StMyPageButtons>
            <Button
              size="var(--size-regular)"
              fontSize="var(--font-regular)"
              padding="10px"
              onClick={() => navigate("/mypage/auction")}
            >
              내 경매품 조회
            </Button>

            <Button
              size="var(--size-regular)"
              fontSize="var(--font-regular)"
              padding="10px"
              onClick={() => navigate("/mypage/bidding")}
            >
              내 입찰 조회
            </Button>
          </StMyPageButtons>
          <StMyPageArticle>
            {products.map((product) => {
              return (
                <ProductsBox
                  key={product.id}
                  onClick={() => navigate(`/auction/${product.id}`)}
                >
                  <StMyProductImg src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                  <h4>{product.title}</h4>
                  <p>{product.category}</p>
                  <p>{product.price}</p>
                </ProductsBox>
              );
            })}
          </StMyPageArticle>
        </SectionMyPage>
      )}
    </Section>
  );
}

export default MyPage;

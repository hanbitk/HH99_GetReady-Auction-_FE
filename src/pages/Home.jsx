import React, { useEffect } from "react";
import Section from "../components/Section/Section";
import Button from "../components/Buttons/Button";
import {
  SectionContent,
  StContent,
  StContentTitle,
  StContentDescription,
  StContentSubtitle,
  StDescription,
  ContentImagebox,
  StAbout,
  StAboutTitle,
  SectionAbout,
  AboutImageBox,
  SectionHotList,
  StHotListDescription,
  StHotListTitle,
  StHotListBox,
  StHotListImg,
  ProductsBox,
  Deadline,
} from "../styles/Section.styles";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import instance from "../axios/api";
import { getHotPosts } from "../core/api/posts";

function Home() {
  const [cookies] = useCookies("userAuth");
  const token = cookies.userAuth;
  const navigate = useNavigate();

  // const products = useSelector((state) => state.products.products);

  const { isLoading, isError, data } = useQuery("posts", getHotPosts)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  return (
    <>
      {/* Main Section */}
      <Section>
        <SectionContent>
          <StContent>
            <StContentTitle>
              Get Ready,{" "}
              <span style={{ color: "var(--color-dark-blue)" }}>Auction!</span>
            </StContentTitle>
            <StContentDescription>
              <StContentSubtitle>
                겟레디 옥션,{" "}
                <span style={{ color: "var(--color-dark-blue)" }}>경매장</span>
                에 오신걸 <br /> 환영합니다.
              </StContentSubtitle>
              <StDescription marginBottom="20px">
                전국 매입딜러 90%가 참여하는 경매. <br />
                <span style={{ fontSize: "var(--font-small)" }}>
                  *연락처는 판매요청 전까지 딜러에게 공개되지 않아요.
                </span>
              </StDescription>
              <Button
                size="var(--size-medium)"
                fontSize="var(--font-regular)"
                padding="8px"
                backgroundColor="var(--color-dark-blue)"
                height="40px"
                onClick={() => {
                  if (cookies.userAuth == "undefined" || !cookies.userAuth) {
                    alert("경매장에 오신걸 환영합니다!");
                    setTimeout(() => {
                      navigate("/user/signup");
                    }, 600);
                  } else {
                    setTimeout(() => {
                      navigate("/auction");
                    }, 600);
                  }
                }}
              >
                지금 시작하기
              </Button>
            </StContentDescription>
          </StContent>
          <ContentImagebox>
          <img src="https://fox2now.com/wp-content/uploads/sites/14/2022/06/GettyImages-1195327712.jpg?w=1280&h=720&crop=1"/>
          </ContentImagebox>
        </SectionContent>
      </Section>

      {/* About Section */}

      {/* About 1 */}
      <Section backgroundColor="var(--color-gray)">
        <SectionAbout>
          <AboutImageBox>
            <img src="https://geauction.com/wp-content/uploads/2018/06/Your-First-Auction-What-You-Need-to-Know.jpg"/>
          </AboutImageBox>
          <StAbout>
            <StAboutTitle
              style={{ color: "var(--color-blue)", marginBottom: "20px" }}
            >
              좋은 값에 <br /> 팔고 싶다면,
            </StAboutTitle>
            <StDescription marginBottom="20px" style={{ fontSize: "30px" }}>
              안 쓰는 물건을 좋은 값에{" "}
              <span
                style={{
                  color: "var(--color-red)",
                  fontWeight: "var(--weight-bold)",
                }}
              >
                경매 등록
              </span>
              하자, 그래야 우리 모두가 참여 할 수 있으니까
            </StDescription>
            <Button
              size="var(--size-medium)"
              fontSize="var(--font-regular)"
              padding="8px"
              backgroundColor="var(--color-dark-blue)"
              height="40px"
              onClick={() => {
                if (cookies.userAuth === "undefined" || !cookies.userAuth) {
                  alert("로그인이 필요한 페이지입니다.");
                  setTimeout(() => {
                    navigate("/user/login");
                  }, 1000);
                } else {
                  setTimeout(() => {
                    navigate("/auction/add");
                  }, 500);
                }
              }}
            >
              경매 등록
            </Button>
          </StAbout>
        </SectionAbout>
      </Section>

      {/* About 2 */}
      <Section backgroundColor="var(--color-gray)">
        <SectionAbout>
          <StAbout>
            <StAboutTitle
              style={{
                marginBottom: "20px",
                color: "var(--color-blue)",
              }}
            >
              낙찰과 입찰 그 사이 : 우리
            </StAboutTitle>
            <StDescription style={{ fontSize: "30px" }}>
              내가 원하는 물건은{" "}
              <span
                style={{
                  color: "var(--color-blue)",
                  fontWeight: "var(--weight-bold)",
                }}
              >
                낙찰
              </span>{" "}
              받고,
            </StDescription>
            <StDescription
              style={{
                textAlign: "right",
                marginBottom: "30px",
                fontSize: "30px",
              }}
            >
              너가 원하는 물건은{" "}
              <span
                style={{
                  color: "var(--color-red)",
                  fontWeight: "var(--weight-bold)",
                }}
              >
                입찰
              </span>
              하고
            </StDescription>
            <Button
              size="var(--size-medium)"
              fontSize="var(--font-regular)"
              padding="8px"
              backgroundColor="var(--color-dark-blue)"
              height="40px"
              onClick={() => {
                if (cookies.userAuth === "undefined" || !cookies.userAuth) {
                  alert("로그인이 필요한 페이지입니다.");
                  setTimeout(() => {
                    navigate("/user/login");
                  }, 500);
                } else {
                  setTimeout(() => {
                    navigate("/auction");
                  }, 500);
                }
              }}
            >
              입찰하기
            </Button>
          </StAbout>
          <AboutImageBox>
            <img src="https://news.artnet.com/app/news-upload/2017/11/GettyImages-50947488-1024x687.jpg"/>
          </AboutImageBox>
        </SectionAbout>
      </Section>

      {/* 핫 경품 리스트 */}
      <Section backgroundColor="var(--color-light-gray)">
        <SectionHotList>
          <StHotListDescription>
            <StHotListTitle>
              실시간 <span style={{ color: "var(--color-red)" }}>핫한</span>{" "}
              경매품
            </StHotListTitle>
            <StDescription>
              어서와 핫한 경매품은 처음이지? 입찰하러 가즈아!
            </StDescription>
          </StHotListDescription>
          <StHotListBox>
            {data?.map((product) => {
              return (
                <ProductsBox
                  key={product.id}
                  onClick={() => navigate("/auction")}
                >
                  <Deadline>{product.deadline}</Deadline>
                  <StHotListImg src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                  <h4>{product.title}</h4>
                  <p>{product.category}</p>
                  <p>{product.price}</p>
                </ProductsBox>
              );
            })}
          </StHotListBox>
        </SectionHotList>
      </Section>
    </>
  );
}

export default Home;

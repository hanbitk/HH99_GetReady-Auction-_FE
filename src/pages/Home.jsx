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
import { getHotPosts } from "../core/api/posts";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

function Home() {
  const [cookies] = useCookies("userAuth");
  const navigate = useNavigate();

  //페이지가 로드될 때 로그인 여부 판단
  // useEffect(() => {
  //   const userAuth = cookies.userAuth;
  //   if (userAuth) {
  //     console.log("로그인한 유저입니다");
  //     navigate("/");
  //   } else {
  //     return console.log("로그인 안한 유저입니다");
  //   }
  // }, []);

  const products = useSelector((state) => state.products.products);

  // const { isLoading, isError, data } = useQuery("posts", async () => {
  //   const products = await getHotPosts();
  //   return products.data;
  // });

  // console.log(data)

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error occurred.</div>;
  // }

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
                onClick={() => navigate("/user/login")}
              >
                지금 시작하기
              </Button>
            </StContentDescription>
          </StContent>
          <ContentImagebox>이미지</ContentImagebox>
        </SectionContent>
      </Section>

      {/* About Section */}

      {/* About 1 */}
      <Section backgroundColor="var(--color-gray)">
        <SectionAbout>
          <AboutImageBox>이미지</AboutImageBox>
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
              onClick={() => navigate("/auction/add")}
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
              onClick={() => navigate("/auction")}
            >
              입찰하기
            </Button>
          </StAbout>
          <AboutImageBox>이미지</AboutImageBox>
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
            {products?.map((product) => {
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

import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import Section from "../components/Section/Section";
import {
  SectionMyPage,
  StMyPageButtons,
  StMyPageArticle,
  ProductsBox,
  StMyProductImg,
} from "../styles/MyPage.styles";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getMyBiddings } from "../core/api/posts";
import { useQuery } from "react-query";

function MyPageBidding() {
  const navigate = useNavigate();

  const [cookies] = useCookies("userAuth");
  const token = cookies.userAuth;

  // const products = useSelector((state) => state.products.products);

  const { isLoading, isError, data } = useQuery("posts", async () => {
    const products = await getMyBiddings(token);
    return products.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

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
          <h1 style={{ marginBottom: "20px", padding: "30px 0 0 30px" }}>
            My Page
          </h1>
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
            {data?.map((product) => {
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

export default MyPageBidding;

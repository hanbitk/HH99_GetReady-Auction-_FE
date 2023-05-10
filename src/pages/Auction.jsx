import React from "react";
import { useNavigate, Link } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts, biddingPost } from "../core/api/posts";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import instance from "../axios/api";
import Section from "../components/Section/Section";
import {
  StAuctionAside,
  StAuctionCategory,
  StProductsContainer,
  StProductSearch,
  StSearchInput,
  StProductContainer,
  StProductBoxAuction,
  StProductImg,
} from "../styles/Auction.styles";
import {
  StFlex,
  StLayout,
  StItem,
  StPicture,
  StItems,
  StSearchBar,
} from "../styles/MyPage.styles";
import { useCookies } from "react-cookie";
import { SectionAuction } from "../styles/Auction.styles";
function Auction() {
  const [cookies] = useCookies();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  console.log(data);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  //검색버튼 핸들러
  const searchHandler = async () => {
    try {
      const response = await instance.get("/auction/search", {
        params: {
          page: 0,
          size: 6,
          search: search,
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //   <div>
    //     <StLayout>
    //       <StFlex>
    //         <StSearchBar>
    //           검색--
    //           <input
    //             value={search}
    //             onChange={(e) => setSearch(e.target.value)}
    //             placeholder="검색영역"
    //           />
    //           <button onClick={searchHandler}>버튼</button>
    //         </StSearchBar>

    //         <StItems>
    //           {searchResult
    //             ? searchResult?.map((item) => {
    //                 return (
    //                   <Link
    //                     to={`/auction/${item.id}`}
    //                     key={item.id}
    //                     style={{ textDecoration: "none", color: "black" }}
    //                   >
    //                     <StItem key={item.id}>
    //                       <StPicture>사진들어갈자리</StPicture>
    //                       <div>아이템이름:{item.title}</div>
    //                       <div>현재가격:{item.currentPrice}</div>
    //                       <div>남은기간:{item.deadline}</div>
    //                     </StItem>
    //                   </Link>
    //                 );
    //               })
    //             : data?.map((item) => {
    //                 return (
    //                   <Link
    //                     to={`/auction/${item.id}`}
    //                     key={item.id}
    //                     style={{ textDecoration: "none", color: "black" }}
    //                   >
    //                     <StItem key={item.id}>
    //                       <StPicture>사진들어갈자리</StPicture>
    //                       <div>아이템이름:{item.title}</div>
    //                       <div>현재가격:{item.currentPrice}</div>
    //                       <div>남은기간:{item.deadline}</div>
    //                     </StItem>
    //                   </Link>
    //                 );
    //               })}
    //         </StItems>
    //         {/* <Pagination count={11} defaultPage={6} siblingCount={0} /> */}
    //       </StFlex>
    //       <Button
    //         onClick={() => {
    //           if (cookies.userAuth == "undefined" || !cookies.userAuth) {
    //             alert("로그인이 필요한 페이지입니다.");
    //             setTimeout(() => {
    //               navigate("/user/login");
    //             }, 1000);
    //           } else {
    //             setTimeout(() => {
    //               navigate("/auction/add");
    //             }, 500);
    //           }
    //         }}
    //       >
    //         경매 등록
    //       </Button>
    //     </StLayout>

    //     <Stack spacing={2}>
    //       <Typography>Page: {page}</Typography>
    //       <Pagination count={10} page={page} onChange={handleChange} />
    //     </Stack>
    //   </div>
    // );

    <Section>
      <SectionAuction>
        {/* Aside */}
        <StAuctionAside>
          <h1 style={{ marginBottom: "10px" }}>카테고리</h1>
          <StAuctionCategory>
            <ul>
              <li>가구/인테리어</li>
              <li>패션의류/잡화</li>
              <li>전자제품</li>
              <li>스포츠/레저</li>
              <li>기타</li>
            </ul>
            <Button
              size="220px"
              padding="10px"
              fontSize="var(--font-regular)"
              marginTop='20px'
              onClick={() => {
                if (cookies.userAuth == "undefined" || !cookies.userAuth) {
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
          </StAuctionCategory>
        </StAuctionAside>

        {/* Content */}
        <StProductsContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flexGrow: "2",
            }}
          >
            <StProductSearch>
              <StSearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="상품을 검색해주세요"
              />
              <Button
                size="var(--size-medium)"
                borderRadius="none"
                fontSize="var(--font-regular)"
                onClick={searchHandler}
              >
                검색
              </Button>
            </StProductSearch>

            <StProductContainer>
              {searchResult
                ? searchResult?.map((item) => {
                    return (
                      <StProductBoxAuction
                        to={`/auction/${item.id}`}
                        key={item.id}
                      >
                        <div style={{ display: "flex", alignSelf: "center" }}>
                          <StProductImg src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>현재 가격: {item.currentPrice}</p>
                          <p>{item.deadline}</p>
                        </div>
                      </StProductBoxAuction>
                    );
                  })
                : !isLoading &&
                  data?.map((item) => {
                    return (
                      <StProductBoxAuction
                        to={`/auction/${item.id}`}
                        key={item.id}
                      >
                        <div>
                          <StProductImg src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>현재 가격: {item.currentPrice}</p>
                          <p>{item.deadline}</p>
                        </div>
                      </StProductBoxAuction>
                    );
                  })}
            </StProductContainer>
          </div>
          <Stack spacing={2} style={{ alignSelf: "center" }}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </StProductsContainer>
      </SectionAuction>
    </Section>
  );
}

export default Auction;

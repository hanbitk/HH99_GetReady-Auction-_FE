import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../core/api/posts";
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
import { useCookies } from "react-cookie";
import { SectionAuction } from "../styles/Auction.styles";
function Auction() {
  const [cookies] = useCookies();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", async () =>
    getPosts(page)
  );

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
          page: page,
          size: 6,
          search: search,
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  //이동 - 가전/인테리어
  const category1 = async () => {
    try {
      const response = await instance.get("/auction/category", {
        params: {
          page: 0,
          size: 6,
          category: "가구/인테리어",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
    // setIsOpen(!isOpen);
  };
  //이동 - 가전/인테리어
  const category2 = async () => {
    try {
      const response = await instance.get("/auction/category", {
        params: {
          page: 0,
          size: 6,
          category: "패션의류/잡화",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
    // setIsOpen(!isOpen);
  };
  //이동 - 가전/인테리어
  const category3 = async () => {
    try {
      const response = await instance.get("/auction/category", {
        params: {
          page: 0,
          size: 6,
          category: "전자제품",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
    // setIsOpen(!isOpen);
  };
  //이동 - 가전/인테리어
  const category4 = async () => {
    try {
      const response = await instance.get("/auction/category", {
        params: {
          page: 0,
          size: 6,
          category: "스포츠/레저",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
    // setIsOpen(!isOpen);
  };
  //이동 - 가전/인테리어
  const category5 = async () => {
    try {
      const response = await instance.get("/auction/category", {
        params: {
          page: 0,
          size: 6,
          category: "기타",
        },
      });
      setSearchResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
    // setIsOpen(!isOpen);
  };
  return (
    <Section>
      {/* {page} */}
      <SectionAuction>
        {/* Aside */}
        <StAuctionAside>
          <h1 style={{ marginBottom: "10px" }}>카테고리</h1>
          <StAuctionCategory>
            <ul>
              <div onClick={category1}>
                <li>가구/인테리어</li>
              </div>
              <div onClick={category2}>
                <li>패션의류/잡화</li>
              </div>
              <div onClick={category3}>
                <li>전자제품</li>
              </div>
              <div onClick={category4}>
                <li>스포츠/레저</li>
              </div>
              <div onClick={category5}>
                <li>기타</li>
              </div>
            </ul>
            <Button
              size="220px"
              padding="10px"
              fontSize="var(--font-regular)"
              marginTop="20px"
              onClick={() => {
                if (cookies.userAuth == "undefined" || !cookies.userAuth) {
                  alert("로그인이 필요한 페이지입니다.");
                  setTimeout(() => {
                    navigate("/user/login");
                  }, 300);
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
                : data?.map((item) => {
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
            <Pagination count={5} page={page} onChange={handleChange} />
          </Stack>
        </StProductsContainer>
      </SectionAuction>
    </Section>
  );
}

export default Auction;

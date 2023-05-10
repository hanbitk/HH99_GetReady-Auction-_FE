import React from "react";
import { useNavigate, Link } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../core/api/posts";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  StFlex,
  StLayout,
  StMyPage2,
  StItem,
  StPicture,
  StItems,
  StBackgroundImage,
} from "../styles/MyPage.styles";
import { useCookies } from "react-cookie";
function Auction() {
  const [cookies] = useCookies();
  const [page, setPage] = React.useState(1);
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

  return (
    <div>
      <StLayout>
        <StFlex>
          <StItems>
            {data?.map((item) => {
              return (
                <Link
                  to={`/auction/${item.id}`}
                  key={item.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <StItem key={item.id}>
                    <StPicture>사진들어갈자리</StPicture>
                    <div>아이템이름:{item.title}</div>
                    <div>현재가격:{item.currentPrice}</div>
                    <div>남은기간:{item.deadline}</div>
                  </StItem>
                </Link>
              );
            })}
          </StItems>
          {/* <Pagination count={11} defaultPage={6} siblingCount={0} /> */}
        </StFlex>
        <Button
          onClick={() => {
            if (cookies.hasOwnProperty("userAuth")) {
              setTimeout(() => {
                navigate("/auction/add");
              }, 1000);
            } else {
              alert("로그인이 필요한 페이지입니다.");
              setTimeout(() => {
                navigate("/user/login");
              }, 500);
            }
          }}
        >경매 등록</Button>
      </StLayout>

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default Auction;

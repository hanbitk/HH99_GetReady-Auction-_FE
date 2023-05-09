import React from "react";
import { useNavigate, Link } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import { useRef, useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../core/api/posts";
// import axios from 'axios'
import api from "../axios/api";
import {
  StFlex,
  StLayout,
  StDropdownList,
  StMyPage2,
  StItem,
  StPicture,
  StItems,
  StBackgroundImage,
} from "../styles/MyPage.styles";
function Auction() {
  //이동
  const nav = useNavigate();
  //이동 - 내경매조회
  const MypageAuctionGo = () => {
    nav("/MyPage");
    setIsOpen(!isOpen);
  };
  //이동 - 내입찰조회
  const MypageBiddingnGo = () => {
    nav("/mypage/bidding");
  };
  //드롭다운 온오프
  const [isOpen, setIsOpen] = useState(false);
  //드롭다운 촤라락
  const [selectedItem, setSelectedItem] = useState("마이 페이지");
  //드롭다운 외 클릭시 다운
  const allRef = useRef("");
  useEffect(() => {
    function handleClickOutside(event) {
      //   if (!allRef.current.contains(event.target)) {
      //     setIsOpen(false);
      //   }
      console.log("click");
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [allRef]);
  // and an outside browser click handle
  useEffect(() => {
    const handleWindowBlur = () => {
      setIsOpen(false);
    };
    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  //   const fetchTodos = async () => {
  //     setProducts(data);
  //   };
  //   useEffect(() => {
  //     //db로부터 값을 가져올 것이다.
  //     fetchTodos();
  //   }, []);

  const { isLoading, isError, data } = useQuery("posts", async () => {
    const products = await getPosts();
    console.log(data)
    return products.data;
  });

  console.log(data)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  // React Query - Delete Post //
  //   const queryClient = useQueryClient();
  //   const mutation = useMutation(deletePost, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries("posts");
  //       console.log("포스트 삭제 완료하였습니다!");
  //     },
  //   });

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (isError) {
  //     return <div>Error occurred.</div>;
  //   }
  return (
    <div ref={allRef}>
      <StLayout ref={allRef}>
        <StFlex ref={allRef}>
          <StMyPage2>
            <div onClick={() => setIsOpen(!isOpen)}>
              <h2>{selectedItem}</h2>
            </div>
            <div>
              {isOpen && (
                <div>
                  <StDropdownList onClick={MypageAuctionGo}>
                    <h2>내경매조회</h2>
                  </StDropdownList>
                  <br />
                  <StDropdownList onClick={MypageBiddingnGo}>
                    <h2>내입찰조회</h2>
                  </StDropdownList>
                </div>
              )}
            </div>
          </StMyPage2>
          <StItems>
            {data?.map((item) => {
                console.log(item)
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
        <Link to="/auction/Add">
          <StBackgroundImage />
        </Link>
      </StLayout>
    </div>
  );
}

export default Auction;

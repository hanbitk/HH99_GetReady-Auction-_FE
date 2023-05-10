import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import instance from "../axios/api";
import {
  StLayout,
  StFlex,
  StInput,
  StPicture,
  Stbutton,
  StTopPirce,
  StBidding,
  StTitle,
  StDescription,
  Stasd,
  StModalRemove,
  ModalOverlay,
  ModalContent,
  ModalButton,
} from "../styles/AuctionDetali.styles";
import { getPostDetail, updatePost, biddingPost } from "../core/api/posts";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useCookies } from "react-cookie";

function AuctionDetail() {
  const [contents, setContents] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [biddingPrice, setBiddingPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [startPrice, setStartPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  const { isLoading, isError, data } = useQuery("posts", async () => {
    const products = await getPostDetail(id);
    return products.data;
  });

  //==============쿠키================//
  const [cookies] = useCookies("userAuth");
  const token = cookies.userAuth;

  //==============경매품 수정================//
  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      setContents(contents);
      console.log("포스트 수정 완료하였습니다!");
    },
  });

  const showModal = () => setModalOpen(!modalOpen);
  const showDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  //==============수정 버튼================//
  const updateHandler = async (id) => {
    if (!contents) return alert("Changes cannot be in blank!");
    mutation.mutate({
      id: +id,
      token: token,
      title: data.title,
      content: contents,
      minPrice: data.minPrice,
      deadline: data.deadline,
      category: data.category,
    });
  };

  //==============삭제 버튼================//
  const deleteHandler = async (id) => {
    await instance.delete(`/auction/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    showDeleteModal();
    navigate("/auction");
  };

  //==============입찰 버튼================//

  // const mutationBidding = useMutation(biddingPost, {
  //   async onSuccess(data){
  //     console.log(data)
  //     queryClient.invalidateQueries("posts");
  //     setBiddingPrice(biddingPrice);
  //     console.log("입찰 완료!");
  //   },
  // });

  // const biddingPriceHandler = async (id) => {
  //   if (cookies.userAuth == "undefined" || !cookies.userAuth) {
  //     alert("로그인이 필요한 페이지입니다.");
  //     setTimeout(() => {
  //       navigate("/user/login");
  //     }, 1000);
  //   } else {
  //     mutationBidding.mutate({
  //       id: +id,
  //       token: token,
  //       price: biddingPrice,
  //     });
  //   }
  // };

  const biddingPriceHandler = async () => {
    await instance.post(
      `/bid/add/${id}`,
      {
        price: biddingPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBiddingPrice(biddingPrice)
  };

  const allBidList = data?.allBidList;
  const bidList = allBidList?.map((item) => item.price);

  return (
    <Stasd>
      <StLayout>
        <h1>TITLE : {data?.title}</h1>
        <StTitle>
          <div>
            {/* 수정하는 부분 모달창 구현 */}
            {cookies.userAuth == "undefined" || !cookies.userAuth ? (
              ""
            ) : (
              <Stbutton onClick={showModal}>
                {modalOpen ? "닫기" : "수정하기"}
              </Stbutton>
            )}
          </div>
          {/* 모달창 들어가는 삭제버튼 */}
          {cookies.userAuth == "undefined" || !cookies.userAuth ? (
            ""
          ) : (
            <Stbutton onClick={showDeleteModal}>삭제하기</Stbutton>
          )}
          {/* !!모달창!! */}
          {deleteModalOpen && (
            <ModalOverlay onClick={showDeleteModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalButton>
                  <Stbutton onClick={showDeleteModal}>취소</Stbutton>
                  <Stbutton onClick={() => deleteHandler(id)}>삭제</Stbutton>
                </ModalButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </StTitle>
        <StFlex>
          <StPicture>사진공간</StPicture>
          <div>
            <StTopPirce>
              시작가격 ; {data?.minPrice}
              <br />
              현재가격 ; {data?.currentPrice}
              <br />
            </StTopPirce>
            <StTopPirce>
              최신 가격
              {bidList?.map((item) => {
                return <div key={item.id}>{item}원!</div>;
              })}
            </StTopPirce>
            <StBidding>
              <StInput
                value={biddingPrice}
                onChange={(e) => setBiddingPrice(e.target.value)}
              />
              <Stbutton onClick={() => biddingPriceHandler(id)}>입찰</Stbutton>
            </StBidding>
          </div>
        </StFlex>
        <StDescription>
          {data?.content}
          {modalOpen && (
            <div>
              <StModalRemove
                name="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                placeholder="수정할 정보 입력"
              />
              <Stbutton onClick={() => updateHandler(id)}>수정!</Stbutton>
            </div>
          )}
        </StDescription>
      </StLayout>
    </Stasd>
  );
}

export default AuctionDetail;

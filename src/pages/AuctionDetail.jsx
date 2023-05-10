import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import axios from "axios";
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
import { getPostDetail, updatePost, deletePost } from "../core/api/posts";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useCookies } from "react-cookie";

function AuctionDetail() {
  const [contents, setContents] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", async () => {
    const products = await getPostDetail(id);
    return products.data;
  });

  // 쿠키, 상세페이지 정보 받아오기
  const [cookies] = useCookies("userAuth");
  const token = cookies.userAuth;

  console.log(data);

  // 경매품 수정
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

  // const deleteMutation = useMutation(deletePost, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("posts");
  //     console.log("포스트 삭제 완료하였습니다!");
  //   },
  // });

  // 수정버튼 핸들러
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

  // const deleteHandler = async (id) => {
  //   deleteMutation.mutate({id, token});
  //   showDeleteModal();
  //   return navigate("/auction");
  // };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/auction/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    showDeleteModal();
    navigate("/auction");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  return (
    <Stasd>
      <StLayout>
        <h1>TITLE : {data.title}</h1>
        <StTitle>
          <div>
            {/* 수정하는 부분 모달창 구현 */}
            {cookies.hasOwnProperty("userAuth") ? (
              <Stbutton onClick={showModal}>
                {modalOpen ? "닫기" : "수정하기"}
              </Stbutton>
            ) : (
              ""
            )}
          </div>
          {/* 모달창 들어가는 삭제버튼 */}
          {cookies.hasOwnProperty("userAuth") ? (
            <Stbutton onClick={showDeleteModal}>삭제하기</Stbutton>
          ) : (
            ""
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
              <p>top1 price</p>
              <p>top2 price</p>
              <p>top3 price</p>
            </StTopPirce>
            <StTopPirce>
              <p>최신순 리버스 정렬가격</p>
              <p>최신순 리버스 정렬가격</p>
              <p>최신순 리버스 정렬가격</p>
              <p>최신순 리버스 정렬가격</p>
              <p>최신순 리버스 정렬가격</p>
            </StTopPirce>
            <StBidding>
              <StInput />
              <Stbutton>입찰</Stbutton>
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

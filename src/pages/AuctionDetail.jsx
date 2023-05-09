import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'
// import axios from 'axios'
import api from "../axios/api"
import Header from '../components/Header/Header'
import instance from '../core/api/axios/instance'
import { useCookies } from "react-cookie";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPostDetail,updatePost, deletePost } from "../core/api/posts";

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
    ModalButton
} from '../styles/AuctionDetali.styles'
function AuctionDetail() {
    const { id } = useParams();
    const nav = useNavigate()
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    //상품 정보와 담는곳
    const [products, setProducts] = useState()
    const [product, setProduct] = useState({
        title: "",
        content: "",
        minPrice: "",
        deadline: "",
        category: ""
    })
     // 수정 버튼 
     const [contents, setContents] = useState("")
    
    //수정버튼 모달창 온오프
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(!modalOpen);
    };
   
    //DB 불러옴//토큰
    const [cookies] = useCookies("userAuth");
    const token = cookies.userAuth;
    // console.log("token=", token)
    const { isLoading, isError, data } = useQuery("posts", async () => {
        const products = await getPostDetail(id);
        return products.data;
    });
    //수정하려면 필요한 

    let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      year: today.getFullYear(), //현재 년도
      month: (today.getMonth() + 1).toString().padStart(2, "0"), // 현재 월
      date: today.getDate().toString().padStart(2, "0"), // 현제 날짜
      hours: today.getHours().toString().padStart(2, "0"), //현재 시간
      minutes: today.getMinutes().toString().padStart(2, "0"), //현재 분
      seconds: today.getSeconds().toString().padStart(2, "0"), // 현재 초
    };
    let timestring = `${time.year}년 ${time.month}월 ${time.date}일 ${time.hours}시 ${time.minutes}분 ${time.seconds}초`;
  
    const queryClient = useQueryClient();
    const mutation = useMutation(updatePost, {
    onSuccess: () => {
    queryClient.invalidateQueries("posts");
    setContents(contents)
    console.log("포스트 수정 완료하였습니다!");
    },
    });
console.log("data=",data)


    // 수정버튼 핸들러
const updateHandler = async (id) => {
    if (!contents) return alert('Changes cannot be in blank!');
    mutation.mutate({
        id: +id,
        token: token,  
        title: data.title,
        content: contents,
        minPrice: data.minPrice,
        deadline: timestring,
        category: data.category

    });
    };
    // // 수정버튼 핸들러
    // const removeHandler = async () => {
    //     await instance.patch(`/auction/edit/${id}`,
    //         {...data,
    //             title: data?.title,
    //             category: data?.category,
    //             content: contents,
    //             minPrice: data?.minPrice,
    //             deadline: data?.deadline,
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         })
    //     // setProducts(products.map((item) => {
    //     //     if (item.id == id) {
    //     //         return { ...item, contents: contents }
    //     //     } else {
    //     //         return item
    //     //     }
    //     // }))
    //     setContents("")
    //     showModal()
    // }
    // 삭제 버튼
    // const deleteHandler = async (id) => {
    //     await instance.delete(`/auction/delete/${id}`,{
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       })
    //     setProducts(products.filter((item) => {
    //         return item.id !== id
    //     }))
    //     showDeleteModal()
    //     nav("/auction")
    // }

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("포스트 삭제 완료하였습니다!");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  // Delete Post Function
  const deleteHandler = async (id) => {
    const newFeed = data?.filter((post) => post.id !== id);
    deleteMutation.mutate({id, token});
    return newFeed
  };
    
    const showDeleteModal = () => {
        setDeleteModalOpen(!deleteModalOpen);
    };

//     const productsFind = data?.find((item) => item.id == id)
// console.log("productsFind=",productsFind)

console.log("id=", id)
    return (
        <Stasd>
            <StLayout>
                <h1>TITLE :{data?.title}</h1>
                <StTitle>
                    <div>
                        {/* 수정하는 부분 모달창 구현 */}
                        <Stbutton
                            // width
                            onClick={showModal}
                        >
                            {modalOpen ? "닫기" : "수정하기"}
                        </Stbutton>

                    </div>
                    {/* 모달창 들어가는 삭제버튼 */}
                    <Stbutton
                        // width
                        onClick={showDeleteModal}>삭제하기</Stbutton>
                    {/* !!모달창!! */}
                    {deleteModalOpen &&
                        <ModalOverlay onClick={showDeleteModal}>
                            <ModalContent onClick={(e) => e.stopPropagation()}>
                                <ModalButton>
                                    <Stbutton onClick={showDeleteModal}>취소</Stbutton>
                                    <Stbutton onClick={() => deleteHandler(id)}>삭제</Stbutton>
                                </ModalButton>
                            </ModalContent>
                        </ModalOverlay>}
                </StTitle>
                <StFlex>
                    <StPicture>사진공간</StPicture>
                    <div>
                        <StTopPirce>
                        {data?.currentPrice}
                        {data?.content}
                        </StTopPirce>
                        <StTopPirce>
                            <p>최신순 리버스 정렬가격</p>
                            <p>최신순 리버스 정렬가격</p>
                            <p>최신순 리버스 정렬가격</p>
                            <p>최신순 리버스 정렬가격</p>
                            <p>최신순 리버스 정렬가격</p>
                        </StTopPirce>
                        <StBidding>
                            <StInput
                            // value={comment}
                            // onChange={(e) => setComment(e.target.value)}
                            />
                            <Stbutton
                            // onClick={commentHandler}
                            >입찰</Stbutton>
                        </StBidding>
                    </div>
                </StFlex>
                <StDescription>
                    {data?.content}
                    {modalOpen &&
                        <div>
                            <StModalRemove
                                name='contents'
                                value={contents}
                                onChange={(e) => setContents(e.target.value)}
                                placeholder='수정할 정보 입력' />
                            <Stbutton onClick={() => updateHandler(id)}>수정!</Stbutton>
                        </div>}
                </StDescription>
            </StLayout>
        </Stasd>
    )
}

export default AuctionDetail
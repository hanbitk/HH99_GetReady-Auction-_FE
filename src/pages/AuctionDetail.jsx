import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'
// import axios from 'axios'
import api from "../axios/api"
import Header from '../components/Header/Header'
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
    const HomeButton = () => {
        nav("/")
    }
    //상품 정보와 담는곳
    const [products, setProducts] = useState()
    const [product, setProduct] = useState({
        title: "",
        content: "",
        minPrice: "",
        deadline: "",
        category: ""
    })
    //db에서 가져온 정보
    const fetchTodos = async () => {
        const { data } = await api.get(
            "/todos"
        );
        setProducts(data)
    }
    useEffect(() => {
        //db로부터 값을 가져올 것이다.
        fetchTodos();
    }, [])
    // 파람스에 맞는 DB찾기
    const productsFind = products?.find((item) => item.id == id)
    // console.log(productsFind)

    //수정버튼 모달창 온오프
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(!modalOpen);
    };
    // ???
    const [comment, setComment] = useState("")
    const commentHandler = async () => {
        await api.patch(`/todos/${id}`, {
            comment: comment
        })
        setProducts(products.map((item) => {
            if (item.id == id) {
                return { ...item, comment: comment }
            } else {
                return item
            }
        }))
    }

    // 수정 버튼 
    const [contents, setContents] = useState("")
    // 수정버튼 핸들러
    const removeHandler = async () => {
        await api.patch(`/todos/${id}`, {
            content: contents
        })
        setProducts(products.map((item) => {
            if (item.id == id) {
                return { ...item, contents: contents }
            } else {
                return item
            }
        }))
        setContents("")
        showModal()
    }
    // 삭제 버튼
    const deleteHandler = async (id) => {
        await api.delete(`/todos/${id}`)
        setProducts(products.filter((item) => {
            return item.id !== id
        }))
        showDeleteModal()
        nav("/auction")
    }
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const showDeleteModal = () => {
        setDeleteModalOpen(!deleteModalOpen);
    };

    return (
        <Stasd>
            <StLayout>
                <h1>TITLE :</h1>
                <StTitle>
                    <div>
                        {/* 수정하는 부분 모달창 구현 */}
                        <Stbutton
                            width
                            onClick={showModal}
                        >
                            {modalOpen ? "닫기" : "수정하기"}
                        </Stbutton>

                    </div>
                    {/* 모달창 들어가는 삭제버튼 */}
                    <Stbutton 
                            width
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
                            <StInput
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <Stbutton
                                onClick={commentHandler}>입찰</Stbutton>
                        </StBidding>
                    </div>
                </StFlex>
                <StDescription>
                    {productsFind?.content}
                    {modalOpen &&
                        <div>
                            <StModalRemove
                                name='contents'
                                value={contents}
                                onChange={(e) => setContents(e.target.value)}
                                placeholder='수정할 정보 입력' />
                            <Stbutton onClick={() => removeHandler(id)}>수정!</Stbutton>
                        </div>}
                </StDescription>
            </StLayout>
        </Stasd>
    )
}

export default AuctionDetail
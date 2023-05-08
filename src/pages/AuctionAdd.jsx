import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { useState,useEffect } from 'react'
import Button from '../components/Buttons/Button'
import Header from '../components/Header/Header'
import axios from 'axios'
import api from "../axios/api"
import {
    StPicture,
    StFlex,
    StLayout,
    StInput,
    Stbutton
} from '../styles/AuctionAdd.styles'

function AuctionAdd() {
    let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
        year: today.getFullYear(),  //현재 년도
        month: today.getMonth() + 1, // 현재 월
        date: today.getDate(), // 현제 날짜
        hours: today.getHours(), //현재 시간
        minutes: today.getMinutes(), //현재 분
        seconds: today.getSeconds(), // 현재 초 
    };
    let timestring = `${time.year}년${time.month}월${time.date}일${time.hours}시${time.minutes}분${time.seconds}초`;
    console.log(timestring)

    //이동
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
    //상품 핸들러
    const productHandler = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }
      //db에서 가져온 정보
    const fetchTodos = async () => {
        const { data } = await axios.get(
            "/todos"
        );
        setProducts(data)
    }
    useEffect(() => {
        //db로부터 값을 가져올 것이다.
        fetchTodos();
    }, [])

    //상품 등록 버튼
    const productAddButton = async () => {
        if (product.title.trim() === "" || product.content.trim() === "" || product.minPrice.trim() === "" || product.deadline.trim() === ""|| product.category.trim() === "") 
        return alert("no") 
            await axios.post("/auction/add", {...product,deadline: timestring,})
            fetchTodos()
            setProduct({
                title: "",
                content: "",
                minPrice: "",
                deadline:"",
                category:""
            })
            nav("/auction")
        }
        
    
    return (
        <>
            <StLayout>
                <StFlex>

                    <StPicture>
                        <div>사진 들어가는 구역</div>
                    </StPicture>
                    <div>
                        <div>
                            카테고리: <StInput
                                type='text'
                                name='category'
                                value={product.category}
                                onChange={productHandler} /><br /><br />
                            글제목: <StInput
                                type='text'
                                name='title'
                                value={product.title}
                                onChange={productHandler} /><br /><br />
                            경매기간: <StInput
                                type='text'
                                name='deadline'
                                value={product.deadline}
                                onChange={productHandler} /><br /><br />
                            최저가: <StInput
                                type='text'
                                name='minPrice'
                                value={product.minPrice}
                                onChange={productHandler} /><br /><br />
                            제품 소개: <StInput
                                height="true"
                                type='text'
                                name='content'
                                value={product.content}
                                onChange={productHandler} /><br /><br />
                        </div>
                    </div>
                </StFlex>
                <Stbutton>
                    <Button
                        height="60px"
                        size="var(--size-extra-large)"
                        onClick={productAddButton}>제품등록 버튼</Button>
                </Stbutton>
            </StLayout>
        </>

    )
}

export default AuctionAdd
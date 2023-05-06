import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { GlobalStyles } from '../styles/GlobalStyles'
import styled from 'styled-components'
import { useState } from 'react'
const StPicture = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 300px;
`
const StFlex = styled.div`
    display: flex;
    gap: 50px;
`
function AuctionAdd() {

    const nav = useNavigate()
    const HomeButton = () => {
        nav("/")
    }

    const [product, setProduct] = useState({
        title: "",
        content: "",
        minPrice: 0,
        deadline: "",
        category: ""
    })

    const productHandler = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const productAddButton = () => {
        alert("등록합니다~")
    }
    return (
        <>
            <div>헤더
                <button onClick={HomeButton}>홈으로</button>
            </div>
            <div>
                <StFlex>

                    <StPicture>
                        <div>사진 들어가는 구역</div>
                    </StPicture>
                    <div>
                        <div>
                            카테고리: <input
                                type='text'
                                name='category'
                                value={product.category}
                                onChange={productHandler} /><br /><br />
                            글제목: <input
                                type='text'
                                name='title'
                                value={product.title}
                                onChange={productHandler} /><br /><br />
                            경매기간: <input
                                type='text'
                                name='deadline'
                                value={product.deadline}
                                onChange={productHandler} /><br /><br />
                            제품 소개: <input
                                type='text'
                                name='content'
                                value={product.content}
                                onChange={productHandler} /><br /><br />
                            최저가: <input
                                type='text'
                                name='minPrice'
                                value={product.minPrice}
                                onChange={productHandler} />
                        </div>
                    </div>
                </StFlex>
                <div>
                    <button onClick={productAddButton}>제품등록 버튼</button>
                </div>
                <div>footer</div>
            </div>
        </>

    )
}

export default AuctionAdd
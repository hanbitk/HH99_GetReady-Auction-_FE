import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import Button from '../components/Buttons/Button'
import Header from '../components/Header/Header'
import { useRef, useState, useEffect } from 'react'
import api from "../axios/api"
import {
    StFlex,
    StLayout,
    StDropdownList,
    StMyPage,
    StItem,
    StPicture,
    StItems
} from '../styles/MyPage.styles'

function MyPageBidding() {
    
    const nav = useNavigate()
    const MypageAuctionGo = ()=>{
        nav("/MyPage")
        setIsOpen(!isOpen)
    }
    const MypageBiddingnGo = ()=>{
        nav("/mypage/bidding")
        setIsOpen(!isOpen)
    }
    
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState("마이 페이지");
    const allRef = useRef("");
    useEffect(() => {
        function handleClickOutside(event) {
            if (!allRef.current.contains(event.target)) {
                setIsOpen(false);
            }
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

  return (
   
    <div ref={allRef}>
    <Header />
    <StLayout ref={allRef}>
        <StFlex ref={allRef}>
            <StMyPage>
                <div onClick={() => setIsOpen(!isOpen)}><h2>
                    {selectedItem}</h2>
                </div>
                <div>
                    {isOpen && (
                        <div>
                            <StDropdownList onClick={MypageAuctionGo}><h2>내경매조회</h2></StDropdownList><br />
                            <StDropdownList onClick={MypageBiddingnGo}><h2>내입찰조회</h2></StDropdownList>
                        </div>
                    )}
                </div>
            </StMyPage>
            <StItems>

            <StItem>
                <StPicture>사진들어갈자리</StPicture>
                <div>현재가격:10,210원</div>
                <div>남은기간:9일</div>
                <div>아이템이름:도라에몽주머니</div>
            </StItem>
            <StItem>
                <StPicture>사진들어갈자리</StPicture>
                <div>현재가격:10,210원</div>
                <div>남은기간:9일</div>
                <div>아이템이름:도라에몽주머니</div>
            </StItem>
            <StItem>
                <StPicture>사진들어갈자리</StPicture>
                <div>현재가격:10,210원</div>
                <div>남은기간:9일</div>
                <div>아이템이름:도라에몽주머니</div>
            </StItem>
            <StItem>
                <StPicture>사진들어갈자리</StPicture>
                <div>현재가격:10,210원</div>
                <div>남은기간:9일</div>
                <div>아이템이름:도라에몽주머니</div>
            </StItem>
            </StItems>
        </StFlex>
    </StLayout>
</div>
)
}


export default MyPageBidding
<<<<<<< HEAD
import React from 'react'
import { useNavigate, Link } from 'react-router-dom/dist'
import Button from '../components/Buttons/Button'
import Header from '../components/Header/Header'
import { useRef, useState, useEffect } from 'react'
// import axios from 'axios'
import api from "../axios/api"
import {
    StFlex,
    StLayout,
    StDropdownList,
    StMyPage,
    StItem,
    StPicture,
    StItems,
    StBackgroundImage
} from '../styles/MyPage.styles'
function Action() {
    //이동
    const nav = useNavigate()
    //이동 - 내경매조회
    const MypageAuctionGo = () => {
        nav("/MyPage")
        setIsOpen(!isOpen)
    }
    //이동 - 내입찰조회
    const MypageBiddingnGo = () => {
        nav("/mypage/bidding")
    }
    //드롭다운 온오프
    const [isOpen, setIsOpen] = useState(false)
    //드롭다운 촤라락
    const [selectedItem, setSelectedItem] = useState("마이 페이지");
    //드롭다운 외 클릭시 다운
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
    //상품 핸들러
    const productHandler = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }
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
                        {products?.map((item) => {
                            return (
                                <Link to={`/auction/${item.id}`} key={item.id} style={{ textDecoration: "none", color: "black" }}>
                                    <StItem key={item.id}>
                                        <StPicture>사진들어갈자리</StPicture>
                                        <div>아이템이름:{item.title}</div>
                                        <div>현재가격:{item.minPrice}</div>
                                        <div>남은기간:{item.deadline}</div>
                                    </StItem>
                                </Link>
                            )
                        })}
                    </StItems>
                </StFlex>
<Link to="/auction/Add"><StBackgroundImage/></Link>
            </StLayout>
        </div>
    )
=======
import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { useCookies } from "react-cookie";

function Auction() {
  const nav = useNavigate();
  const HomeButton = () => {
    nav("/");
  };

  const [cookies] = useCookies("userAuth");
  const isAuthenticated = cookies.userAuth != null;

  return (
    <>
      Auction
    </>
  );
>>>>>>> a1de9ffc367b5b64d5a77f1fe1b6490f39bdb0d8
}

export default Auction;

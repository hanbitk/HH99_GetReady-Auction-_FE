import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../components/Buttons/Button";
import Header from "../components/Header/Header";
import { useRef, useState, useEffect } from "react";
import api from "../axios/api";
import Section from "../components/Section/Section";
import {
  SectionMyPage,
  StMyPageButtons,
  StMyPageArticle,
  ProductsBox,
  StMyProductImg,
} from "../styles/MyPage.styles";
import { useSelector } from "react-redux";

function MyPageBidding() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  //     const nav = useNavigate()
  //     const MypageAuctionGo = ()=>{
  //         nav("/MyPage")
  //         setIsOpen(!isOpen)
  //     }
  //     const MypageBiddingnGo = ()=>{
  //         nav("/mypage/bidding")
  //         setIsOpen(!isOpen)
  //     }

  //     const [isOpen, setIsOpen] = useState(false)
  //     const [selectedItem, setSelectedItem] = useState("마이 페이지");
  //     const allRef = useRef("");
  //     useEffect(() => {
  //         function handleClickOutside(event) {
  //             if (!allRef.current.contains(event.target)) {
  //                 setIsOpen(false);
  //             }
  //         }
  //         document.addEventListener("click", handleClickOutside);
  //         return () => {
  //             document.removeEventListener("click", handleClickOutside);
  //         };
  //     }, [allRef]);
  //     // and an outside browser click handle
  //     useEffect(() => {
  //         const handleWindowBlur = () => {
  //             setIsOpen(false);
  //         };
  //         window.addEventListener("blur", handleWindowBlur);
  //         return () => {
  //             window.removeEventListener("blur", handleWindowBlur);
  //         };
  //     }, []);
  //     //상품 정보와 담는곳
  //     const [products, setProducts] = useState()
  //     const [product, setProduct] = useState({
  //         title: "",
  //         content: "",
  //         minPrice: "",
  //         deadline: "",
  //         category: ""
  //     })
  // //db에서 가져온 정보
  // const fetchTodos = async () => {
  //     const { data } = await api.get(
  //         "/todos"
  //     );
  //     setProducts(data)
  // }
  // useEffect(() => {
  //     //db로부터 값을 가져올 것이다.
  //     fetchTodos();
  // }, [])

  return (
    // <div ref={allRef}>
    //   <StLayout ref={allRef}>
    //     <StFlex ref={allRef}>
    //       <StMyPage2>
    //         <div onClick={() => setIsOpen(!isOpen)}>
    //           <h2>{selectedItem}</h2>
    //         </div>
    //         <div>
    //           {isOpen && (
    //             <div>
    //               <StDropdownList onClick={MypageAuctionGo}>
    //                 <h2>내경매조회</h2>
    //               </StDropdownList>
    //               <br />
    //               <StDropdownList onClick={MypageBiddingnGo}>
    //                 <h2>내입찰조회</h2>
    //               </StDropdownList>
    //             </div>
    //           )}
    //         </div>
    //       </StMyPage2>
    //       <StItems>
    //         <StItem>
    //           <StPicture>사진들어갈자리</StPicture>
    //           <div>현재가격:10,210원</div>
    //           <div>남은기간:9일</div>
    //           <div>아이템이름:도라에몽주머니</div>
    //         </StItem>
    //         <StItem>
    //           <StPicture>사진들어갈자리</StPicture>
    //           <div>현재가격:10,210원</div>
    //           <div>남은기간:9일</div>
    //           <div>아이템이름:도라에몽주머니</div>
    //         </StItem>
    //         <StItem>
    //           <StPicture>사진들어갈자리</StPicture>
    //           <div>현재가격:10,210원</div>
    //           <div>남은기간:9일</div>
    //           <div>아이템이름:도라에몽주머니</div>
    //         </StItem>
    //         <StItem>
    //           <StPicture>사진들어갈자리</StPicture>
    //           <div>현재가격:10,210원</div>
    //           <div>남은기간:9일</div>
    //           <div>아이템이름:도라에몽주머니</div>
    //         </StItem>
    //       </StItems>
    //     </StFlex>
    //   </StLayout>
    // </div>
    <Section>
      <SectionMyPage>
        <h1 style={{ marginBottom: "20px", padding:"30px 0 0 30px"}}>My Page</h1>
        <StMyPageButtons>
          <Button
            size="var(--size-regular)"
            fontSize="var(--font-regular)"
            padding="10px"
            onClick={() => navigate("/mypage/auction")}
          >
            내 경매품 조회
          </Button>

          <Button
            size="var(--size-regular)"
            fontSize="var(--font-regular)"
            padding="10px"
            onClick={() => navigate("/mypage/bidding")}
          >
            내 입찰 조회
          </Button>
        </StMyPageButtons>
        <StMyPageArticle>
          {products.map((product) => {
            return (
              <ProductsBox
                key={product.id}
                onClick={() => navigate(`/auction/${product.id}`)}
              >
                <StMyProductImg src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                <h4>{product.title}</h4>
                <p>{product.category}</p>
                <p>{product.price}</p>
              </ProductsBox>
            );
          })}
        </StMyPageArticle>
      </SectionMyPage>
    </Section>
  );
}

export default MyPageBidding;

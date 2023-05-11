import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import Button from "../components/Buttons/Button";
import {
  StContainer,
  StForm,
  StImgSection,
  StFormSection,
  StFormInputs,
  StInput,
  Stbutton123,
  DropdownList
} from "../styles/AuctionAdd.styles";
import instance from "../axios/api";
import { useCookies } from "react-cookie";
import Section from "../components/Section/Section";
import { useRef } from "react";

function AuctionAdd() {
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
  //새로 넣은 드롭다운
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("카테고리");
  const menuRef = useRef("");

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (!menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [menuRef]);
  // // and an outside browser click handle
  // useEffect(() => {
  //   const handleWindowBlur = () => {
  //     setIsOpen(false);
  //   };
  //   window.addEventListener("blur", handleWindowBlur);
  //   return () => {
  //     window.removeEventListener("blur", handleWindowBlur);
  //   };
  // }, []);
  //드롭다운 클릭시 카테고리 변경
  const itemClickHandler = (item) => {
    setProduct({
      ...product,
      category: item,
    });
    setIsOpen(false);
  };

  //이동
  const nav = useNavigate();
  const HomeButton = () => {
    nav("/");
  };
  //상품 정보와 담는곳
  const [products, setProducts] = useState();
  const [product, setProduct] = useState({
    category: "",
    content: "",
    title: "",
    minPrice: 0,
    deadline: timestring,
  });
  //상품 핸들러
  const productHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const [cookies] = useCookies("userAuth");
  const token = cookies.userAuth;

  //상품 등록 버튼
  const productAddButton = async () => {
    if (
      product.title.trim() === "" ||
      product.content.trim() === "" ||
      product.minPrice.trim() === "" ||
      product.deadline.trim() === "" ||
      product.category.trim() === ""
    )
      // return alert("no");
    await instance.post(
      "/auction/add",
      {
        ...product,
        title: product.title,
        category: product.category,
        content: product.content,
        minPrice: product.minPrice,
        deadline: product.deadline,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setProduct({
      title: "",
      category: "",
      content: "",
      minPrice: "",
      deadline: "",
    });
    nav("/auction");
  };

  return (
    <Section 
    // ref={menuRef}
    >
      <StContainer display="flex">
        <StForm
          onSubmit={(e) => {
            e.preventDefault();
            productAddButton();
          }}
        >
          {/* Add Image Upload Field - TBD */}
          <StImgSection>
            <img src="https://hips.hearstapps.com/hmg-prod/images/pringles-template-lightlysalted-1546635619.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
          </StImgSection>

          <StFormSection>
            {/* Add Title Input */}
            <StFormInputs>
              <div>
                <div onClick={() => setIsOpen(!isOpen)}>
                  {selectedItem}
                </div>
                {isOpen && (
                  <DropdownList>
                    <Stbutton123 onClick={() => itemClickHandler("가구/인테리어")}>
                      가구/인테리어
                    </Stbutton123>
                    <Stbutton123 onClick={() => itemClickHandler("패션의류/잡화")}>
                      패션의류/잡화
                    </Stbutton123>
                    <Stbutton123 onClick={() => itemClickHandler("전자제품")}>
                      전자제품
                    </Stbutton123>
                    <Stbutton123 onClick={() => itemClickHandler("스포츠/레저")}>
                      스포츠/레저
                    </Stbutton123>
                    <Stbutton123 onClick={() => itemClickHandler("기타")}>
                      기타
                    </Stbutton123>
                  </DropdownList>
                )}
              </div>
              <div>
                <StInput
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={productHandler}
                />
              </div>
              <div>
                <h4>제목</h4>
                <StInput
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={productHandler}
                />
              </div>
              <div>
                <h4>경매기간</h4>
                <StInput
                  type="text"
                  name="deadline"
                  value={product.deadline}
                  onChange={productHandler}
                />
              </div>
              <div>
                <h4>최저가</h4>
                <StInput
                  type="text"
                  name="minPrice"
                  value={product.minPrice}
                  onChange={productHandler}
                />
              </div>
              <div>
                <h4>제품소개</h4>
                <StInput
                  type="text"
                  name="content"
                  value={product.content}
                  onChange={productHandler}
                />
              </div>
            </StFormInputs>

            <Button size="400px" height="50px">
              제품등록 버튼
            </Button>
          </StFormSection>
        </StForm>
      </StContainer>
    </Section>
  );
}

export default AuctionAdd;

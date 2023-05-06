import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import Header from '../components/Header/Header'
function Home() {
    // const nav = useNavigate()
    // const signupGo = ()=>{
    //     nav("/user/Login")
    // }
    // const auctionGo =()=>{
    //     nav("/Auction")
    // }
    // const auctionAddGo =()=>{
    //     nav("/AuctionAdd")
    // }
    // const mypageGo =()=>{
    //     nav("/Mypage")
    // }
  return (
    <>
    {/* <button onClick={signupGo}>로그인버튼</button>
    <div>Home</div>
    <div><button onClick={auctionGo}>action가기</button></div>
    <div>actionDetail 가기 삭제 수정 에드 버튼</div>
    <div><button onClick={auctionAddGo}>actionAdd가기</button></div>
    <div><button onClick={mypageGo}>mypage가기</button></div> */}
    <Header/>
    </>

  )
}

export default Home
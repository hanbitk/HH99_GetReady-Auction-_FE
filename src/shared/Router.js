import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Auction from "../pages/Auction";
import AuctionAdd from "../pages/AuctionAdd";
import MyPage from "../pages/MyPage";
import AuctionDetail from "../pages/AuctionDetail";
import MyPageBidding from "../pages/MyPageBidding";
import Layout from "../components/Layout/Layout";
import MyPageAuction from "../pages/MyPageAuction";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/auction/add" element={<AuctionAdd />} />
          <Route path="/auction/:id" element={<AuctionDetail />} />
          <Route path="/auction/edit/:id" element={<AuctionDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/bidding" element={<MyPageBidding />} />
          <Route path="/mypage/auction" element={<MyPageAuction/>}/>
        </Route>

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

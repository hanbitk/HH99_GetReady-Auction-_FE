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
import PrivateRoute from "./PrivateRoute";
import { useCookies } from "react-cookie";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/auction/add" element={<AuctionAdd />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/auction/detail" element={<AuctionDetail />} />
          <Route path="/mypage/bidding" element={<MyPageBidding />} />
        </Route>

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

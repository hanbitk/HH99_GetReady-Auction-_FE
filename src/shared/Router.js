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
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/signup" element={<Signup />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/auctionAdd" element={<AuctionAdd />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/auction/detail" element={<AuctionDetail />} />
                <Route path="/mypage/bidding" element={<MyPageBidding />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        {/* <Route>
          <Route path="/user">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

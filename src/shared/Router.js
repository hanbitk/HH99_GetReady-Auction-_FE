import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Auction from "../pages/Auction";
import AuctionAdd from "../pages/AuctionAdd";
import MyPage from "../pages/MyPage";
import AuctionDetail from "../pages/AuctionDetail";
<<<<<<< HEAD
import MyPageBidding from "../pages/MyPageBidding";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/Login" element={<Login />} />
                <Route path="/user/Signup" element={<Signup />} />
                <Route path="/Auction" element={<Auction />} />
                <Route path="/auction/Add" element={<AuctionAdd />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/auction/:id" element={<AuctionDetail />} />
                <Route path="/mypage/bidding" element={<MyPageBidding />} />
=======
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
          <Route path="/auction/:id" element={<AuctionDetail />} />
        </Route>
>>>>>>> a1de9ffc367b5b64d5a77f1fe1b6490f39bdb0d8

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

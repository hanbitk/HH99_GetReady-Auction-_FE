import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Auction from "../pages/Auction";
import AuctionAdd from "../pages/AuctionAdd";
import MyPage from "../pages/MyPage";
import AuctionDetail from "../pages/AuctionDetail";
import Layout from "../components/Layout/Layout";

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

        <Route path="/user/*" element={<Login />} />
        <Route path="/user/*" element={<Signup />} />
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

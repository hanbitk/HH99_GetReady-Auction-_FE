import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Auction from "../pages/Auction";
import AuctionAdd from "../pages/AuctionAdd";
import MyPage from "../pages/MyPage";
import AuctionDetail from "../pages/AuctionDetail";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/Login" element={<Login />} />
                <Route path="/user/Signup" element={<Signup />} />
                <Route path="/Auction" element={<Auction />} />
                <Route path="/AuctionAdd" element={<AuctionAdd />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/AuctionDetail" element={<AuctionDetail />} />



                {/* <Route path="/work" element={<Check />} /> */}
                {/* <Route path="/work/:id" element={<Detail />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

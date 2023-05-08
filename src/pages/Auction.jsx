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
}

export default Auction;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionAuction = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;

export const StAuctionAside = styled.aside`
  width: 20%;
  height: 100vh;
  padding: 10px;
  background-color: var(--color-light-gray);
`;

export const StAuctionCategory = styled.div`
  height: 80%;

  ul {
    font-size: var(--font-regular);
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;

    li {
      background-color: var(--color-light-white);
      padding: 10px;
      padding-left: 10px;
      border-radius: 4px;
    }
  }
`;

export const StProductsContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const StProductSearch = styled.div`
  display: flex;
`;

export const StSearchInput = styled.input`
  background-color: var(--color-light-white);
  padding: 15px;
  width: 90%;
`;

export const StProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px 92px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

export const StProductBoxAuction = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
  background-color: var(--color-light-white);
  text-decoration: none;
  color: var(--color-black);
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
    transition: 0.5s;
  }
`;
export const StProductImg = styled.img`
  width: 240px;
  height: 210px;
  object-fit: cover;
`;

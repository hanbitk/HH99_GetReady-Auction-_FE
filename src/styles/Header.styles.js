import { Link } from "react-router-dom";
import styled from "styled-components";

export const StHeader = styled.header`
  border: 1px solid red;
  padding: 10px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-light-gray);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const styleFlex = {
  display: "flex",
  justifyContent: "space-between",
  gap: "50px",
};

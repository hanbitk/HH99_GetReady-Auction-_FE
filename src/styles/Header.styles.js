import styled from "styled-components";

export const StHeader = styled.header`
  border: 1px solid red;
  padding: 10px 30px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StLogo = styled.div``;

export const logoLinkStyle = {
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
  fontWeight: "var(--weight-semi-bold)",
  fontSize: "var(--font-medium)",
};

export const styleFlex = {
  display: "flex",
  justifyContent: "space-between",
  alignIterms: "center",
  gap: "50px",
};

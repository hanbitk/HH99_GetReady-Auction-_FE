import styled from "styled-components";

export const StHeaderContainer = styled.header`
  z-index: 999;
  position: sticky;
  top: 0;
  background: var(--color-light-white);
`;

export const StHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
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

import styled from "styled-components";

export const StNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: var(--font-regular);

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    li:hover {
      color: red;
    }
  }
`;

export const linkStyle = {
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
};

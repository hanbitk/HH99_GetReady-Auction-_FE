import styled from "styled-components";
import { Link } from "react-router-dom";

export const StNavBar = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 22px;
    align-items: center;

    li {
      color: var(--color-primary);
    }

    li:hover {
      color: var(--color-blue);
    }
  }
`;

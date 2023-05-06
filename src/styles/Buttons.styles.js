import styled from "styled-components";

export const StButton = styled.button`
  border: 1px solid black;
  width: ${(props) => props.size};
  font-size: ${(props) => props.fontSize};
  border-radius: 4px;
  padding: ${(props) => props.padding};
  font-weight: var(--weight-semi-bold);
  height: ${(props) => props.height};

  &:hover {
    transform: translateY(2px);
  }
`;

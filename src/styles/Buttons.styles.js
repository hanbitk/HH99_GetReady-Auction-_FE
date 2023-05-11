import styled from "styled-components";

export const StButton = styled.button`
  width: ${(props) => props.size};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  color: var(--color-light-white);
  background-color: ${(props) =>
    props.backgroundcolor || "var(--color-primary)"};
  margin-top: ${(props) => props.marginTop};

  &:hover {
    background-color: var(--color-blue);
    transform: translateY(1px);
  }
`;

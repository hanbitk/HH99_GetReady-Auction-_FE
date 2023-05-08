import styled from "styled-components";

export const StButton = styled.button`
width: ${(props) => props.size};
font-size: ${(props) => props.fontSize};
border-radius: 4px;
padding: ${(props) => props.padding};
height: ${(props) => props.height};
color: var(--color-light-white);
background-color: var(--color-primary);
`
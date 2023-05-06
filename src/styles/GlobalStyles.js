import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Color */
        --color-black: #000000; /* 191919 */
        --color-white: #ffffff;
        --color-light-white: #f5f5f5;
        --color-gray: #d9d9d9;
        --color-light-gray: #dddddd;

        /* Font size */
        --font-extra-large: 50px;
        --font-large: 32px;
        --font-medium: 20px;
        --font-regular: 16px;
        --font-small: 14px;
        --font-micro: 12px;

        /* Font weight */
        --weight-bold: 700;
        --weight-semi-bold: 600; 
        --weight-regular: 400;
        --weight-light: 300;

        /* Size */
        --size-extra-large: 200px;
        --size-large: 150px;
        --size-medium: 100px;
        --size-small: 80px;
        --size-border-radius: 10px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
        background-color: var(--color-white);
    }

    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0px;
    }

    input {
        border: none;
        background-image: none;
        background-color: transparent;
        box-shadow: none;
        outline: none;
    } 

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
}
    
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: var(--weight-semi-bold);
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`

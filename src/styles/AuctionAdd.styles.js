import styled from "styled-components";

export const StLayout = styled.div`
    max-width: 1200px;
    gap: 50px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 60px;
    border: 1px solid pink;
    height: 500px;
    background-color: var(--color-green);
`
export const StFlex = styled.div`
    display: flex;
    justify-content: center;
    gap: 80px; 
    margin: 30px;
`
export const StPicture = styled.div`
    border: 1px solid pink;
    width: 400px;
    height: 300px;
`
export const StInput = styled.input`
  /* display: block; */
  /* white-space: pre-wrap; */
border: 1px solid pink;
width: 100%;
height: ${props=> props.height? "100px":"25px"};
padding: 5px;
`
export const Stbutton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -30px;
    &:hover{
        filter: brightness(110%);
    }
`
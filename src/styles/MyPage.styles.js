import styled from "styled-components";

export const StLayout = styled.div`
    max-width: 1200px;
    gap: 50px;
    /* margin:40px; */
    margin:10px auto 20px auto;
    border: 1px solid pink;
    height: 800px;
    justify-content: center;
    
`
export const StFlex = styled.div`
    display: flex;
    gap: 70px; 
`
export const StMyPage = styled.div`
    border: 1px solid var(--color-green);
    height: 800px;
    min-width: 130px;
`
export const StDropdownList =styled.div`
display: block;
` 
export const StItems = styled.div`
display: flex;
gap: 80px;
flex-wrap: wrap;
`
export const StItem = styled.div`
    border: 1px solid var(--color-green);
    width: 250px;
    height: 300px;
    margin-top: 10px;
    border-radius: 12px;
    flex-wrap: nowrap;
`
export const StPicture = styled.div`
    border: 1px solid pink;
    margin-top: 10px;
    margin-left: 9px;
    border-radius: 12px;
    width: 230px;
    height: 200px;
    /* justify-content: center; */
`
export const StBackgroundImage = styled.div`
background-image: url(/img/plus.png);
background-repeat: no-repeat;
background-position: top center;
background-size: cover;
/* background-attachment: fixed; */
width: 50px;
height: 50px;
`
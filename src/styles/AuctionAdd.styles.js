import styled from "styled-components";

export const StContainer = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
`;

export const StForm = styled.form`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: var(--color-light-white);
`;

export const StImgSection = styled.div`
  border: 1px solid var(--color-light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: var(--color-white);
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export const StFormSection = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  justify-content: space-between;

`;

export const StFormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const StTitle = styled.p`
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  margin-bottom: 10px;
`;

export const StInput = styled.input`
  border: 1px solid var(--color-light-gray);
  padding: 8px;
  width: ${(props) => props.width || "400px"};
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginBottom};
  background-color: var(--color-white);
`;

export const StTextarea = styled.textarea`
  border: 1px solid var(--color-light-gray);
  width: 400px;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: var(--color-white);
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-family: "Inter", sans-serif;
  }
`;

export const btnDiv = {
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
};

export const StLayout = styled.div`
  max-width: 1200px;
  gap: 50px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 60px;
  border: 1px solid pink;
  height: 500px;
  background-color: var(--color-green);
`;
export const StFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 30px;
`;
export const StPicture = styled.div`
  border: 1px solid pink;
  width: 400px;
  height: 300px;
`;
// export const StInput = styled.input`
//   /* display: block; */
//   /* white-space: pre-wrap; */
// border: 1px solid pink;
// width: 100%;
// height: ${props=> props.height? "100px":"25px"};
// padding: 5px;
// `
export const Stbutton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  &:hover {
    filter: brightness(110%);
  }
`;

export const Stbutton123 = styled.div`
border: 2px solid rgb(238, 238, 238);
margin: 5px;
padding: 5px 10px;
font-size: 14px;
color: rgb(0, 0, 0);
line-height: 1.5;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 16px;
    &:hover{
    filter: brightness(90%)
}
`
export const DropdownList = styled.div`
display: flex;
flex-direction: column;  
position: absolute;
 /* left: 800px; */
//props.absolute 값이 true일 때만 DropdownList 컴포넌트에 position: absolute;와 left: 10px; 스타일 속성이 적용
`
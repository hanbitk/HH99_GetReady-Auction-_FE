import styled from "styled-components";
import { Link } from "react-router-dom";

export const StContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || "#cad5e3"};
`;

export const StLogInContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const StLogInHeader = styled.header`
  margin-bottom: 30px;
  font-size: 40px;
  color: var(--color-dark-blue);
  font-weight: var(--weight-bold);
`;

export const StLogInForm = styled.form`
  border: 1px solid var(--color-gray);
  padding: 30px;
  height: 320px;
  border-radius: 10px;
  background-color: var(--color-light-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StLogInFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StLogIn = styled.div`
  width: 450px;
  border-radius: 4px;
`;

export const StLogInInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StLogInInput = styled.input`
  border-radius: 4px;
  width: 350px;
  padding: 10px;
  cursor: pointer;
`;

export const StInputBox = styled.div`
  border: 1px solid var(--color-light-gray);
  display: flex;
  align-content: center;
  padding: 10px;
  border-radius: ${(props) => props.borderRadius};
`;

export const StSignUp = styled.div`
  margin-block: 10px;
  display: flex;
  align-items: center;
`;

export const LogoLinkStyle = styled(Link)`
  text-decoration: none;
  color: var(--color-blue);
  cursor: pointer;
`;

export const SignUpLinkStyle = styled(Link)`
color: var(--color-blue);
  font-size: var(--font-small);
  padding: 10px;
  cursor: pointer;

  &:hover{
    color: var(--color-dark-blue);
    font-weight: var(--weight-semi-bold);
  }
`

export const iconStyle = {
  fontSize: "var(--font-medium)",
  alignSelf: "center",
  marginRight: "4px",
  color: "var(--color-dark-blue)",
};

export const logInIconStyle = {
  fontSize: "var(--font-medium)",
  alignSelf: "center",
  marginRight: "10px",
  color: "var(--color-blue)",
};

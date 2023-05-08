import React from "react";
import { StButton } from "../../styles/Buttons.styles";

<<<<<<< HEAD
function Button({ children, size, fontSize, padding, onClick,height }) {
=======
function Button({ children, size, fontSize, padding, height, onClick, backgroundColor }) {
>>>>>>> a1de9ffc367b5b64d5a77f1fe1b6490f39bdb0d8
  return (
    <StButton
      size={size}
      fontSize={fontSize}
      padding={padding}
      height={height}
      onClick={onClick}
<<<<<<< HEAD
      height={height}
=======
      backgroundColor={backgroundColor}
>>>>>>> a1de9ffc367b5b64d5a77f1fe1b6490f39bdb0d8
    >
      {children}
    </StButton>
  );
}

export default Button;

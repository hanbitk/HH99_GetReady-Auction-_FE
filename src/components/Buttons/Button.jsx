import React from "react";
import { StButton } from "../../styles/Buttons.styles";

function Button({ children, size, fontSize, padding, height, onClick, backgroundColor }) {
  return (
    <StButton
      size={size}
      fontSize={fontSize}
      padding={padding}
      height={height}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {children}
    </StButton>
  );
}

export default Button;

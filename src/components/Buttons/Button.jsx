import React from "react";
import { StButton } from "../../styles/Buttons.styles";

function Button({ children, size, fontSize, padding, onClick,height }) {
  return (
    <StButton
      size={size}
      fontSize={fontSize}
      padding={padding}
      onClick={onClick}
      height={height}
    >
      {children}
    </StButton>
  );
}

export default Button;

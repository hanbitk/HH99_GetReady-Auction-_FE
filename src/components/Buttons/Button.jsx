import React from "react";
import { StButton } from "../../styles/Buttons.styles";

function Button({
  children,
  size,
  fontSize,
  padding,
  height,
  onClick,
  backgroundColor,
  borderRadius,
  marginTop,
}) {
  return (
    <StButton
      size={size}
      fontSize={fontSize}
      padding={padding}
      height={height}
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      marginTop={marginTop}
    >
      {children}
    </StButton>
  );
}

export default Button;

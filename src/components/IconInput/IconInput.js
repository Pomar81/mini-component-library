import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  font-size: var(--fontSize);
  padding-left: var(--inputLeftPadding);
  padding-bottom: var(--inputBottomPadding);
  width: var(--inputWidth);
  outline-offset: 4px;
  border-bottom: var(--borderThickness) solid black;
  &::placeholder {
    color: ${COLORS.gray500};
  }

  color: inherit;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  margin: auto 0;
  height: var(--inputHeight);
`;

const SIZES = {
  small: {
    iconSize: 16,
    iconStroke: 1,
    inputFontSize: 14,
    inputLeftPadding: 24,
    inputBottomPadding: 4,
    borderThicknes: 1,
    inputHeight: 24,
  },
  large: {
    iconSize: 24,
    iconStroke: 2,
    inputFontSize: 18,
    inputLeftPadding: 36,
    inputBottomPadding: 6,
    borderThicknes: 2,
    inputHeight: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeProps = SIZES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": sizeProps.iconSize + "px" }}>
        <Icon
          size={sizeProps.iconSize}
          strokeWidth={sizeProps.iconStroke}
          id={icon}
        />
      </IconWrapper>
      <NativeInput
        style={{
          "--inputLeftPadding": sizeProps.inputLeftPadding + "px",
          "--inputBottomPadding": sizeProps.inputBottomPadding + "px",
          "--fontSize": sizeProps.inputFontSize + "px",
          "--inputWidth": width + "px",
          "--borderThickness": sizeProps.borderThicknes + "px",
          "--inputHeight": sizeProps.inputHeight + "px",
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default IconInput;

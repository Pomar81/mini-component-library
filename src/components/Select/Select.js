import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const NativeSelect = styled.select`
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

const PresentationWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  border-radius: 8px;
  select:hover + & {
    color: black;
  }
  select:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationWrapper>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" }}>
          <Icon id={"chevron-down"} strokeWidth={2} size={24}></Icon>
        </IconWrapper>
      </PresentationWrapper>
    </SelectWrapper>
  );
};

export default Select;

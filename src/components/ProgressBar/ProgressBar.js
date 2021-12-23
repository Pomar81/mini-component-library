/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  padding: var(--progressBarPadding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--progressBarOuterRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--progressBarHeight);
  width: ${(props) => props.value + "%"};
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const SIZES = {
  small: {
    "--progressBarHeight": "8" + "px",
    "--progressBarPadding": "0",
    "--progressBarOuterRadius": "4" + "px",
  },
  medium: {
    "--progressBarHeight": "12" + "px",
    "--progressBarPadding": "0",
    "--progressBarOuterRadius": "4" + "px",
  },
  large: {
    "--progressBarHeight": "16" + "px",
    "--progressBarPadding": "4" + "px",
    "--progressBarOuterRadius": "8" + "px",
  },
};
const ProgressBar = ({ value, size }) => {
  const limitedValue = Math.max(0, Math.min(value, 100));
  return (
    <Wrapper
      role={"progressbar"}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={limitedValue}
      style={SIZES[size]}
    >
      <BarWrapper>
        <Bar value={limitedValue} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

import * as React from "react";

const SvgCrossSmall = (props) => (
  <svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.947 9.547 1.933 1.533M1.933 9.547l8.014-8.014"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgCrossSmall;

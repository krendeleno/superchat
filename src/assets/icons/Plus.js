import * as React from "react";

const SvgPlus = (props) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 3v22M25 14H3"
      stroke="#fff"
      strokeWidth={5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgPlus;

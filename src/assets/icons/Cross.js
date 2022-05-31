import * as React from "react";

const SvgCross = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.557 3 3.001 18.556M18.557 18.556 3.001 3"
      stroke={props.color}
      strokeWidth={5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgCross;

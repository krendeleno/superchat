import * as React from "react";

const SvgHashtag = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={7} cy={7} r={7} fill="#C4C4C4" />
    <path
      d="M4.881 11H4.81c-.256 0-.384-.092-.384-.276 0-.096.168-.676.504-1.74h-.972c-.312 0-.468-.144-.468-.432 0-.296.152-.448.456-.456h1.272l.696-2.208H4.87c-.312 0-.468-.156-.468-.468 0-.272.156-.42.468-.444h1.344c.152-.576.332-1.152.54-1.728.088-.256.272-.384.552-.384h.072c.264 0 .396.084.396.252 0 .16-.188.78-.564 1.86h1.692l.564-1.728c.088-.256.272-.384.552-.384h.06c.264 0 .396.092.396.276 0 .008-.188.62-.564 1.836h1.068c.312 0 .468.152.468.456 0 .296-.156.448-.468.456H9.633l-.708 2.208h1.128c.304 0 .456.148.456.444 0 .272-.152.42-.456.444H8.637c-.04.12-.124.396-.252.828-.128.432-.212.704-.252.816-.088.248-.272.372-.552.372h-.06c-.272 0-.408-.092-.408-.276 0-.056.012-.12.036-.192l.492-1.548H5.95a54.038 54.038 0 0 1-.528 1.632c-.088.256-.268.384-.54.384Zm2.052-5.112-.708 2.208h1.692c.056-.192.18-.592.372-1.2.2-.608.312-.944.336-1.008H6.933Z"
      fill="#fff"
    />
  </svg>
);

export default SvgHashtag;
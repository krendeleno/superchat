import * as React from "react";

const SvgLogo = (props) => (
  <svg
    width={476}
    height={85}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M226.199 42.22c4.94 0 8.93 1.064 11.97 3.192 3.078 2.09 4.617 5.301 4.617 9.633h-11.001c0-3.42-1.862-5.13-5.586-5.13s-5.586 2.147-5.586 6.441v3.249c0 4.256 1.938 6.384 5.814 6.384 3.876 0 5.814-1.748 5.814-5.244h10.545c0 4.37-1.539 7.619-4.617 9.747-3.04 2.128-7.03 3.192-11.97 3.192-5.282 0-9.424-1.33-12.426-3.99-3.002-2.66-4.503-6.574-4.503-11.742 0-5.168 1.501-9.082 4.503-11.742 3.002-2.66 7.144-3.99 12.426-3.99Zm32.854 3.819a12.447 12.447 0 0 1 4.275-2.793 13.155 13.155 0 0 1 5.13-1.026c3.496 0 6.118.969 7.866 2.907 1.748 1.938 2.622 4.731 2.622 8.379V73h-11.343V54.874c0-1.292-.342-2.318-1.026-3.078-.646-.798-1.577-1.197-2.793-1.197-1.406 0-2.546.456-3.42 1.368-.874.912-1.311 2.033-1.311 3.363V73H247.71V31.675h11.343v14.364Zm41.553-3.819c4.598 0 8.341.779 11.229 2.337 2.888 1.52 4.332 4.009 4.332 7.467v11.742c0 .646.152 1.178.456 1.596.304.418.76.627 1.368.627h2.052v6.555c-.114.076-.418.209-.912.399-.456.152-1.121.304-1.995.456-.874.19-1.881.285-3.021.285-2.204 0-4.028-.323-5.472-.969-1.406-.684-2.375-1.615-2.907-2.793a18.362 18.362 0 0 1-4.845 2.736c-1.786.684-3.876 1.026-6.27 1.026-7.068 0-10.602-2.812-10.602-8.436 0-2.926.779-5.149 2.337-6.669 1.596-1.558 3.876-2.622 6.84-3.192 2.964-.57 6.84-.855 11.628-.855V53.05c0-1.178-.418-2.071-1.254-2.679-.798-.608-1.843-.912-3.135-.912-1.178 0-2.204.209-3.078.627-.836.418-1.254 1.083-1.254 1.995v.228h-11.172a4.302 4.302 0 0 1-.057-.798c0-2.85 1.349-5.111 4.047-6.783 2.736-1.672 6.631-2.508 11.685-2.508Zm4.218 17.67c-3.23 0-5.624.361-7.182 1.083-1.52.684-2.28 1.615-2.28 2.793 0 1.9 1.292 2.85 3.876 2.85 1.482 0 2.774-.399 3.876-1.197 1.14-.798 1.71-1.786 1.71-2.964V59.89Zm38.041-16.986v7.695h-6.384v11.457c0 1.368.228 2.375.684 3.021.456.608 1.292.912 2.508.912h3.192v6.669c-.912.304-2.09.551-3.534.741-1.444.19-2.698.285-3.762.285-3.344 0-5.928-.608-7.752-1.824-1.786-1.216-2.679-3.287-2.679-6.213V50.599h-4.218v-7.695h4.674l2.451-9.12h8.436v9.12h6.384Z"
      fill="#414141"
    />
    <path fill="url(#logo_svg__a)" d="M147 9h61v67h-61z" />
    <defs>
      <pattern
        id="logo_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#logo_svg__b"
          transform="matrix(.00338 0 0 .00308 -.009 0)"
        />
      </pattern>
      <image
        id="logo_svg__b"
        width={301}
        height={325}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgLogo;


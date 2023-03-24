import React from "react";

const ShipIcon = ({className}) => {
  return (
    <svg
      width="55"
      height="48"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_500_35521)">
        <rect x="3" y="3" width="47" height="40" rx="10" fill="black" />
        <path
          d="M26.5274 13C26.3157 13 26.104 13.1 25.8922 13.2L17.5293 17.6C17.2117 17.8 17 18.1 17 18.5V27.5C17 27.9 17.2117 28.2 17.5293 28.4L25.8922 32.8C26.104 32.9 26.3157 33 26.5274 33C26.7391 33 26.9509 32.9 27.1626 32.8L28.1153 32.3C27.7977 31.7 27.6919 31 27.586 30.3V23.6L33.9376 20.2V24C34.6786 24 35.4197 24.1 36.0548 24.3V18.5C36.0548 18.1 35.8431 17.8 35.5255 17.6L27.1626 13.2C26.9509 13.1 26.7391 13 26.5274 13ZM26.5274 15.2L32.879 18.5L30.7618 19.6L24.5161 16.2L26.5274 15.2ZM22.3989 17.3L28.6446 20.8L26.5274 21.9L20.1758 18.5L22.3989 17.3ZM19.1172 20.2L25.4688 23.6V30.3L19.1172 26.9V20.2ZM36.3724 26.8L32.5614 30.4L30.8677 28.8L29.7032 30L32.6673 33L37.7486 28.2L36.3724 26.8Z"
          fill="#F66B0E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_500_35521"
          x="0"
          y="0"
          width="55"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.964706 0 0 0 0 0.419608 0 0 0 0 0.054902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_500_35521"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_500_35521"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShipIcon;

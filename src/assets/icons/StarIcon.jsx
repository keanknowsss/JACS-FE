import React from "react";

const StarIcon = ( {color, className, onMouseEnter, onMouseLeave}) => {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 53 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.3176 1.73932L16.9414 14.6675L2.67551 16.7473C0.11722 17.1184 -0.90805 20.2723 0.947201 22.0787L11.2683 32.1361L8.82714 46.3435C8.38773 48.9115 11.0925 50.8351 13.3579 49.6341L26.12 42.9259L38.8822 49.6341C41.1476 50.8253 43.8523 48.9115 43.4129 46.3435L40.9718 32.1361L51.2929 22.0787C53.1481 20.2723 52.1228 17.1184 49.5645 16.7473L35.2986 14.6675L28.9224 1.73932C27.78 -0.565102 24.4698 -0.594395 23.3176 1.73932Z"
        fill={color ? "#F66B0E" : "#121416"}
      />
    </svg>
  );
};

export default StarIcon

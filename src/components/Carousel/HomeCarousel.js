import React from "react";

import BuildCarousel from "../../assets/images/build-carousel.png";

const HomeCarousel = () => {
  const categories = [
    {
      name: "BUILD",
      icon: (
        <svg
          width="89"
          height="81"
          viewBox="0 0 89 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88.2753 30.9108L84.7787 27.4141C83.8129 26.4484 82.2477 26.4484 81.282 27.4141L79.5345 29.1617L75.069 24.6962C75.9389 21.4035 75.1246 17.7585 72.5427 15.1766L65.5509 8.18486C55.8969 -1.46917 40.2431 -1.46917 30.5875 8.18486L44.5726 15.1766V18.0737C44.5726 20.6958 45.614 23.2113 47.4697 25.0655L55.0625 32.6583C57.6445 35.2402 61.2894 36.0545 64.5821 35.1846L69.0476 39.6501L67.3 41.3976C66.3343 42.3633 66.3343 43.9286 67.3 44.8943L70.7967 48.3909C71.7624 49.3566 73.3276 49.3566 74.2933 48.3909L88.2784 34.4059C89.241 33.4417 89.241 31.8765 88.2753 30.9108ZM43.9731 28.5621C43.4014 27.9904 42.9162 27.3585 42.4511 26.7157L3.03463 63.5163C-0.916291 67.2061 -1.02291 73.4345 2.79822 77.2572C6.61935 81.0799 12.8493 80.9733 16.5391 77.0208L53.3335 37.6089C52.7217 37.1593 52.1129 36.7019 51.5659 36.155L43.9731 28.5621Z"
            fill="#F66B0E"
          />
        </svg>
      ),
      img: BuildCarousel,
      description: "Lorem ipsum dolor ip samet",
      button: "BUILD MY PC",
    },
    {
      name: "SHOP",
      icon: "",
      img: "",
      description: "",
      button: "",
    },
    {
      name: "REPAIR",
      icon: "",
      img: "",
      description: "",
      button: "",
    },
    {
      name: "LEARN",
      icon: "",
      img: "",
      description: "",
      button: "",
    },
  ];

  return (
    <>
        <div>
            Carousel
        </div>
    </>
  );
};

export default HomeCarousel;

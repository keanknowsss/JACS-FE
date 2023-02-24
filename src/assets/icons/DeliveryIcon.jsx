import React from "react";

const DeliveryIcon = ({className}) => {
  return (
    <svg
      width="55"
      height="48"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_500_35520)">
        <rect x="3" y="3" width="47" height="40" rx="10" fill="black" />
        <path
          d="M28.9962 34.5C29.8749 34.5 30.5841 33.83 30.5841 33C30.5841 32.17 29.8749 31.5 28.9962 31.5C28.1176 31.5 27.4083 32.17 27.4083 33C27.4083 33.83 28.1176 34.5 28.9962 34.5ZM30.5841 25.5H27.9376V28H32.659L30.5841 25.5ZM16.293 34.5C17.1716 34.5 17.8809 33.83 17.8809 33C17.8809 32.17 17.1716 31.5 16.293 31.5C15.4144 31.5 14.7051 32.17 14.7051 33C14.7051 33.83 15.4144 34.5 16.293 34.5ZM31.1134 24L34.2892 28V33H32.172C32.172 34.66 30.7535 36 28.9962 36C27.2389 36 25.8204 34.66 25.8204 33H19.4688C19.4688 34.66 18.0503 36 16.293 36C14.5357 36 13.1172 34.66 13.1172 33H11V22C11 20.89 11.9422 20 13.1172 20H27.9376V24H31.1134ZM13.1172 22V31H13.9217C14.504 30.39 15.3509 30 16.293 30C17.2352 30 18.082 30.39 18.6643 31H25.8204V22H13.1172ZM20.5274 23L24.2325 26.5L20.5274 30V27.5H15.2344V25.5H20.5274V23Z"
          fill="#F66B0E"
        />
        <path
          d="M36.343 12.6667H37.4287V15.8095H36.343V12.6667ZM38.5145 9H35.2572V10.0476H38.5145V9ZM36.8859 18.9524C34.7849 18.9524 33.0857 17.3129 33.0857 15.2857C33.0857 13.2586 34.7849 11.619 36.8859 11.619C38.9868 11.619 40.686 13.2586 40.686 15.2857C41.066 15.2857 41.4243 15.3538 41.7717 15.469C41.7717 15.4062 41.7717 15.3486 41.7717 15.2857C41.7717 14.1752 41.37 13.1538 40.7022 12.3471L41.4731 11.6033C41.2288 11.3362 40.9845 11.0952 40.7077 10.8648L39.9368 11.619C39.0953 10.959 38.0367 10.5714 36.8859 10.5714C34.1878 10.5714 32 12.6824 32 15.2857C32 17.889 34.1878 20 36.8859 20C37.2061 20 37.5156 19.9686 37.8142 19.911C37.6459 19.6071 37.5264 19.2667 37.4722 18.9052C37.2767 18.9314 37.0867 18.9524 36.8859 18.9524ZM41.9563 16.7733L40.0074 18.6538L39.1442 17.821L38.5145 18.4286L40.0074 20L42.586 17.5119L41.9563 16.7733Z"
          fill="#F66B0E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_500_35520"
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
            result="effect1_dropShadow_500_35520"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_500_35520"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DeliveryIcon;

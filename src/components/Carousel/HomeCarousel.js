import React from "react";


import { HomeCarouselData as categories } from "../../utils";

const HomeCarousel = () => {
  return (
    <>
      <div className="relative w-full h-full rounded-md">
        <img
          src={categories[0].img}
          className="w-full h-full object-cover rounded-md brightness-50"
          alt=""
        />

        <div className="absolute w-full bottom-5 px-3">
          <div className="flex flex-row items-center">
            {categories[0].icon}
            <h1 className="text-white" style={{ fontSize: 96 }}>
              {categories[0].name}
            </h1>
          </div>

          <span className="w-full block border-t-2 border-[#F66B0E] mb-4"></span>

          <div className="flex flex-col items-end">
            <p className="text-white text-right mb-4 text-[24px] w-[389px]">{categories[0].description}</p>
            <a href="/"
              className="inline-block px-8 py-4 mr-7 mb-7 bg-background text-white font-medium text-md leading-tight uppercase border border-[#F66B0E] hover:border-background rounded shadow-md hover:bg-[#F66B0E] hover:shadow-lg focus:bg-[#F66B0E] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F66B0E] active:shadow-lg transition duration-150 ease-in-out"
            >
              {categories[0].button}
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeCarousel;

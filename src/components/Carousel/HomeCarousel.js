import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, Pagination } from "swiper";

import "./HomeCarousel.scss"

const HomeCarousel = (props) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Thumbs, Autoplay, Pagination]}
        loop
        navigation 
        autoplay
        pagination={{
          type: 'progressbar',
        }}
        className="w-full h-full home-carousel"
      >
        {props.categories.map((category, index) => (
          <SwiperSlide 
            key={index}
            className="relative w-full h-full rounded-md"
          >
            <img
              src={category.img}
              className="w-full h-full object-cover absolute top-0 left-0 rounded-md brightness-50"
              alt=""
            />

            <div className="absolute w-full bottom-5 px-3">
              <div className="flex flex-row items-center">
                {category.icon}
                <h1 className="text-white ml-2" style={{ fontSize: 96 }}>
                  {category.name}
                </h1>
              </div>

              <span className="w-full block border-t-2 border-[#F66B0E] mb-4"></span>

              <div className="flex flex-col items-end">
                <p className="text-white text-right mb-7 text-[24px] w-[389px]">
                  {category.description}
                </p>
                <a
                  href={category.link}
                  className="inline-block px-8 py-4 mr-7 mb-7 bg-background hover:bg-[#F66B0E] text-white font-medium text-md leading-tight uppercase border border-[#F66B0E] rounded shadow-md hover:shadow-[#F66B0E] focus:bg-[#F66B0E] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F66B0E] active:shadow-lg transition duration-150 ease-in-out"
                >
                  {category.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

HomeCarousel.propTypes = {
  categories: PropTypes.array,
};

export default HomeCarousel;

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { categories } from "./HomeCarouselData";

import styles from "./HomeCarousel.module.scss"
import "./SwiperStyles.scss";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Thumbs, Autoplay, Pagination]}
        loop
        autoplay
        pagination={{
          clickable: true
        }}
        className={styles.homeCarousel}
      >
        {categories.map((category, index) => (
          <SwiperSlide 
            key={index}
            className={styles.swiperComponent}
          >
            <img
              src={category.img}
              className={styles.swiperImage}
              alt=""
            />

            <div className={styles.carouselMainContent}>
              <div className={styles.carouselHeadingContent}>
                {category.icon}
                <h1 className={styles.carouselHeadingText}>
                  {category.name}
                </h1>
              </div>

              <span className={styles.divider}></span>

              <div className={styles.carouselText}>
                <p className={styles.description}>
                  {category.description}
                </p>
                <a
                  href={category.link}
                  className={styles.redirect}
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

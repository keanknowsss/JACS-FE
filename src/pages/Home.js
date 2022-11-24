import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { HomeCarousel } from "../components/Carousel";
import { HomeCarouselData } from "../utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import "swiper/css/thumbs";

const Home = () => {
  useEffect(() => {
    document.title = "JACS Home";
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <main className="flex flex-col lg:flex-row h-full lg:h-screen justify-between items-center bg-background p-3">
          <div className="flex-1 bg-container w-full lg:w-64 h-full px-3 pt-3 lg:pb-3 rounded-t-md lg:rounded-l-md lg:rounded-tr-none">
            <div className="bg-background w-full h-screen lg:h-full shadow-md rounded-md">
              <HomeCarousel categories={HomeCarouselData} />
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full lg:w-64 h-screen lg:h-full justify-evenly items-center bg-container py-3 pr-3 pl-3 lg:pl-0 rounded-b-md lg:rounded-r-md lg:rounded-bl-none">
            <div className="bg-background w-full h-full mb-3 rounded-md">
              Title
            </div>
            <div className="bg-background w-full h-full mb-3 rounded-md">
              Most Bought Items
            </div>
            <div className="bg-background w-full h-full rounded-md">
              Trending Builds
            </div>
          </div>
  
        </main>
        <Footer />
      </div>

      {/* <div className="block left-0 top-0">
        <Footer />
      </div> */}
    </>
  );
};

export default Home;

import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { HomeCarousel } from "../components/Carousel";

const Home = () => {
  useEffect(() => {
    document.title = "JACS Home";
  }, []);

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-between items-center bg-background w-full h-auto p-3">
        <div className="bg-container w-full h-screen flex-auto px-3 pt-3 lg:pb-3 rounded-t-md lg:rounded-l-md lg:rounded-tr-none">
          <div className="bg-background w-full h-full rounded-md">
            <HomeCarousel />
          </div>
        </div>

        <div className="flex flex-col flex-auto justify-evenly items-center bg-container w-full h-screen py-3 pr-3 pl-3 lg:pl-0 rounded-b-md lg:rounded-r-md lg:rounded-bl-none">
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

      <div className="block left-0 top-0">
        <Footer />
      </div>
    </>
  );
};

export default Home;

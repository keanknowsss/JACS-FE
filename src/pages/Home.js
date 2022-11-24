import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { HomeCarousel } from "../components/Carousel";
import { ProductCard } from "../components/Card";

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

        <div className="flex flex-col flex-auto justify-evenly items-center bg-container w-full h-screen py-3 pr-3 pl-3 lg:pl-0 lg:rounded-r-md lg:rounded-bl-none  rounded-b-md">
          <div className="bg-background w-full h-full mb-3 rounded-md">
            Title
          </div>
          <div className="bg-background w-full h-full mb-3 rounded-md p-3">
            <p className="text-white text-2xl font-serif font-bold py-3 pl-3">
              Most Bought items
            </p>
            <div className="bg-container rounded-md flex flex-row flex-auto justify-evenly items-center">
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
            </div>
          </div>
          <div className="bg-background w-full h-full mb-3 rounded-md p-3">
            <p className="text-white text-3xl font-serif font-bold py-3 pl-3">
              Trending items
            </p>
            <div className="bg-container rounded-md flex flex-row flex-auto justify-evenly items-center">
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
            </div>
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

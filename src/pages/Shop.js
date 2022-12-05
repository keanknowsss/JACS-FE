import { useEffect } from "react";
import { ProductCard } from "../components/Card";
import { ShopSlider } from "../components/PriceRangeSlider";
import { SearchBar } from "../components/ShopSearch";

const Shop = () => {
  useEffect(() => {
    document.title = "JACS Shop";
  }, []);

	return (
		<>
      <main className="px-5 py-3 w-full h-full justify-center items-center bg-background box-border">
        <div>
          <SearchBar />
        </div>
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2">
          <div>
            <ShopSlider />
          </div>
          <div></div>
          <div className="relative">
            <div className="p-3 text-secondary-default justify-center items-center mb-2 bg-primary-default rounded w-[100px] h-[2rem] absolute bottom-[-9px] right-0"> 
              <div className="flex relative justify-center items-center bottom-[8px]">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
                <span className="text-white">Filter</span>
              </div>
            </div>
          </div>
        </div>
        <div class="my-3 h-px bg-secondary-default "></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-3 md:grid-cols-2 w-full h-full justify-center items-center box-border bg-primary-default rounded-lg">
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
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
      </main>
		</>
	);
};

export default Shop;

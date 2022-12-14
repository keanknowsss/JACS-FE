import { useEffect } from "react";
import { ProductCard } from "../components/Card";
import { PaginationShop } from "../components/PaginationShop";
import { ShopSlider } from "../components/PriceRangeSlider";
import { FilterModal } from "../components/ShopModal";
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
            <FilterModal/>
          </div>
        </div>
        <div class="my-3 h-px bg-secondary-default "></div>
        <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-3 md:grid-cols-2 w-full h-full justify-center items-center box-border bg-primary-default rounded-lg ">
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
        <PaginationShop/>
      </main>
		</>
	);
};

export default Shop;

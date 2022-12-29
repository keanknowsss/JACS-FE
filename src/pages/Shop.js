import { useEffect } from "react";
// import { ProductCard } from "../components/Card";
// import { PaginationShop } from "../components/PaginationShop";
import { SliderApp } from "../components/PriceRangeSlider";
import { FilterModal } from "../components/ShopModal";
import { Paginate } from "../components/ShopPaginate";
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
        <div className="flex justify-between flex-wrap">
          <div>
            <SliderApp />
          </div>
          <div></div>
          <div>
            <FilterModal/>
          </div>
        </div>
        <div class="my-3 h-px bg-secondary-default "></div>
        <div className="">
          <Paginate/>
          {/* <div>
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
          </div> */}
        </div>
        {/* <PaginationShop/> */}
      </main>
		</>
	);
};

export default Shop;

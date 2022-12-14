import { ProductCard } from "../components/Card";

const Shop = ({title}) => {
  document.title = title;

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-between items-center bg-background w-full h-auto p-3">
        {/* <div className="flex flex-col flex-auto justify-evenly items-center bg-container w-full h-screen py-3 pl-3 lg:pl-0 rounded-b-md lg:rounded-r-md lg:rounded-bl-none"> */}
          <div className="flex-row relative justify-evenly w-full">
            <div className="bg-container rounded-md md:flex flex-row flex-auto w-full h-auto justify-evenly relative">
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
            <div className="bg-container rounded-md md:flex flex-row flex-auto w-full justify-evenly relative">
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
			<div className="bg-container rounded-md md:flex flex-row flex-auto w-full justify-evenly relative">
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
          </div>
        {/* </div> */}
      </main>

    </>
  );
};
export default Shop;

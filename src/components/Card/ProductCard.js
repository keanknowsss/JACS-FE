import React from "react";
import { ImageCard } from "../../assets/images";

const ProductCard = () => {
  return (
    <>
      <div>
        <div className="p-3">
            <div className="p-1 bg-[#F66B0E] rounded-t-lg rounded-b-lg relative">
              <img
                className="rounded-t-lg rounded-b-lg w-full h-full object-cover "
                src={ImageCard}
                alt=""
              />
              <div class="absolute bottom-1 left-1 right-1 px-4 py-4 bg-gradient-to-t from-black rounded-b-lg">
                <h3 class="text-xl text-white font-bold">Product Name</h3>
                <p class="mt-2 text-sm text-gray-300 sm:justify-left">
                  Some description text. Some dummy text here. Welcome to
                  KindaCode.com
                </p>
              </div>
                    <div className="absolute border-1 border-solid bg-[#F66B0E] bottom-[-15px] right-3 text-center text-white p-2 rounded-t-lg rounded-b-lg inline-block w-[8.5rem] h-[2.9rem] items-center justify-center">
                      <div className="absolute border-1 border-solid bg-black bottom-[3px] right-[4px] text-center text-white p-2 rounded-t-lg rounded-b-lg inline-block w-[8rem] h-[2.5rem] items-center justify-center">
                        Price 9999
                      </div>
                    </div>
            </div>
        </div>

        {/* <div class="max-w-sm bg-white border border-[#F66B0E] rounded-lg shadow-md dark:bg-gray-800 dark:border-[#F66B0E] mx-3 my-3">
          <div className="">
            <img class="rounded-t-lg" src={ImageCard} alt="" />
          </div>
          <div class="p-5">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PRODUCT NAME
              </h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F66B0E] rounded-lg hover:bg-[#ff6804] focus:ring-4 focus:outline-none focus:ring-[#F66B0E] dark:bg-[#F66B0E] dark:hover:bg-[#F66B0E] dark:focus:ring-[#F66B0E]"
            >
              Price 9999
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductCard;

import React from "react";
import { ImageCard } from "../../assets/images";

const ProductCard = () => {
  return (
    <>
      <div>
        <div className="p-3">
            <div className="p-1 bg-[#F66B0E] rounded-t-lg rounded-b-lg relative overflow-hidden drop-shadow-xl">
              <img
                className="rounded-t-lg rounded-b-lg w-full h-full object-cover"
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
                <div className="absolute border-1 border-solid bg-black bottom-0 right-3 text-center text-white p-2 rounded-t-lg rounded-b-lg">
                Price 99999
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import React from "react";
import { ImageCard } from "../../assets/images";

const ProductCard = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <div className="relative w-auto">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              src={ImageCard}
              alt=""
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black rounded-b-lg ">
              <h3 class="text-xl text-white font-bold">Product Name</h3>
              <p class="mt-2 text-sm text-gray-300">
                Some description text. Some dummy text here. Welcome to
                KindaCode.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

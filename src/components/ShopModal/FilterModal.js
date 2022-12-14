import { useState } from "react";
import Modal from "./Modal";

const FilterModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>
        <div className="p-3 text-secondary-default justify-center items-center mb-2 bg-primary-default rounded w-[100px] h-[50px] absolute bottom-[-9px] right-0">
          <div className="flex justify-center items-center bottom-[8px]">
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
      </button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  );
};

export default FilterModal;

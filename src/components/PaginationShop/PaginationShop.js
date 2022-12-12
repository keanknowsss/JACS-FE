import PaginationShopScss from "./PaginationShopScss.module.scss";

const PaginationShop = () => {
  return (
    <div className={PaginationShopScss.container}>
      <div>
        <svg
          class={PaginationShopScss.nextButton}
          fill="none"
          stroke="#F66B0E"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          ></path>
        </svg>
      </div>
        <div>Previous</div>
        <div className="flex justify-between items-center gap-5">
            <div className={PaginationShopScss.hoverPage}>1</div>
            <div className={PaginationShopScss.hoverPage}>2</div>
            <div className={PaginationShopScss.hoverPage}>3</div>
            <div className={PaginationShopScss.hoverPage}>4</div>
        </div>
        <div>Next</div>
      <div>
        <svg
          class={PaginationShopScss.nextButton}
          fill="none"
          stroke="#F66B0E"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PaginationShop;

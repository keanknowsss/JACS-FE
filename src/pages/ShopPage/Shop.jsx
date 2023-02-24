import { Fragment, useEffect, useState } from "react";
import {
  ArrowNavigation,
  ExitIcon,
  FilterIcon,
  SearchIcon
} from "../../assets/icons";
import { ProductCard } from "../../components/Card";
import { FilterModal } from "./subcomponents";

import ReactPaginate from "react-paginate";
import styles from "./Shop.module.scss";

import EmptyVoid from "../../components/EmptyVoid";
import Loading from "../../components/Loading/Loading";
import { useGetAllProductsQuery } from "../../features/api/builders/productApi";

const Shop = ({ title }) => {
  document.title = title;

  const [minRange, setMinRange] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [items, setItems] = useState([]);
  const [itemRange, setItemRange] = useState({ min: 0, max: 20 });
  const [totalPages, setTotalPages] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    const searchFilter = document.getElementById("searchFilter");
    setSearch(() => searchFilter.value);
    e.preventDefault();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setShowFilter(false);
    }
  });

  const changePageHandler = (page) => {
    setItemRange({
      min: 0 + 20 * page.selected,
      max: 20 + 20 * page.selected,
    });
    setCurrentPage(page.selected + 1);
    window.scrollTo(0, 0);
  };

  const query = {
    page: currentPage,
    limit: 20,
    search: search,
  }

  if(selectedFilter.length > 0) {
    query.category = selectedFilter[0].replace(/ /g, "_");
  }

  const { data, error, isLoading } = useGetAllProductsQuery({
    ...query
  });


  useEffect(() => {
    const products = data ? data["result"]["docs"] : [];
    const {totalPages, totalDocs} = data && data["result"] !== undefined ? data["result"] : {totalPages : 0, totalDocs : 0};
    
    setItems(() => products);
    setTotalPages(() => totalPages);
    setTotalDocs(() => totalDocs);
  }, [items, data, totalPages]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <FilterModal
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <main className={styles.shopPage}>
        <form onSubmit={searchHandler} className={styles.searchBar}>
          <input
            type="search"
            id="searchFilter"
            placeholder="Search Products"
            className={styles.searchInput}
            autoComplete="off"
          />
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </form>

        <div className={styles.optionsContainer}>
          <div className={styles.rangeContainer}>
            <span>Price Range : </span>
            <span>{minRange}</span>
            <input
              type="range"
              min={0}
              max={1000}
              defaultValue={minRange}
              onChange={(e) => setMinRange(e.target.value)}
              className={styles.slider}
            />
            <span>1000</span>
          </div>

          <button
            className={styles.filterBtn}
            onClick={() => setShowFilter(true)}
          >
            <span>Filter</span>
            <FilterIcon className={styles.filterIcon} />
          </button>
        </div>

        {/* 
					FILTERS DIV 
				*/}
        {selectedFilter.length > 0 && (
          <section className={styles.filterSection}>
            {selectedFilter.map((categ) => {
              return (
                <div
                  className={styles.filterContainer}
                  onClick={(e) =>
                    setSelectedFilter(
                      selectedFilter.filter((type) => type !== categ)
                    )
                  }
                >
                  <ExitIcon className={styles.removeFilter} />
                  <span>{categ}</span>
                </div>
              );
            })}
          </section>
        )}

        <hr className={styles.sectionDivider} />

        {/* 
					PRODUCTS 
				*/}

        {items.length !== 0 ? (
          <div className={styles.productContainer}>
            {items.map((item, index) => {
              return (
                <Fragment key={item._id}>
                  <ProductCard {...item} modifierClass={styles.productCard} />
                </Fragment>
              );
            })}
          </div>
        ) : (
          <EmptyVoid />
        )}

        {/* 
					PAGINATION 
				*/}
        <div className={styles.pagination}>
          <div className={styles.paginationRelativeContainer}>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={changePageHandler}
              pageCount={Math.ceil(totalDocs/20)}
              previousLabel="Previous"
              pageRangeDisplayed={5}
              className={styles.paginationComponent}
              activeLinkClassName={styles.activePage}
              pageLinkClassName={styles.pageLink}
              previousLinkClassName={styles.prevLink}
              nextLinkClassName={styles.nextLink}
            />

            <div className={styles.rightArrowContainer}>
              <ArrowNavigation className={styles.rightArrow} />
              <ArrowNavigation className={styles.rightArrow} />
            </div>

            <div className={styles.leftArrowContainer}>
              <ArrowNavigation className={styles.leftArrow} />
              <ArrowNavigation className={styles.leftArrow} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;

import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArrowNavigation } from "../../../../assets/icons";
import { ReviewCard } from "../../../../components/Card";
import styles from "./Reviews.module.scss";

import { useParams } from "react-router-dom";
import { CircleLoading } from "../../../../assets/images";
import { Select } from "../../../../components/Select";
import { useGetAllReviewsOfRefQuery } from "../../../../features/api/builders/reviewApi";
import AddReviewModal from "./AddReviewModal/AddReviewModal";

const Reviews = () => {
  const { productId } = useParams();
  const [totalDocs, setTotalDocs] = useState(0);
  const [reviewDocs, setReviewDocs] = useState([]);
  const [itemRange, setItemRange] = useState({ min: 0, max: 20 });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [sortedBy, setSortedBy] = useState();
  const [filter, setFilter] = useState();

  const sortOptions = ['Recent', 'Likes', 'Stars'];
  const filterOptions = [5, 4, 3, 2, 1];

  const getSort = (getSelected) => {
    setSortedBy(getSelected);
  };

  const getFilter = (getSelected) => {
    setFilter(getSelected);
  }

  // Get product reviews
  const query = {
    page: currentPage,
    limit: currentLimit,
    sortedBy,
    filter,
  };

  const {
    data: reviews,
    error: reviewError,
    isLoading: isReviewLoading,
  } = useGetAllReviewsOfRefQuery({ productId, query });

  const changePageHandler = (page) => {
    setItemRange({
      min: 0 + 20 * page.selected,
      max: 20 + 20 * page.selected,
    });
    setCurrentPage(page.selected + 1);
    // window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (reviews) {
      const { totalDocs: totalReviews, docs: reviewDocs } = reviews["result"];
      setTotalDocs((initial) => (initial = totalReviews));
      setReviewDocs((initial) => (initial = reviewDocs));
    }
  }, [reviews]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Reviews {`(${totalDocs})`}</h1>
        {/* <button className={styles.btn}>
          <AddIcon className={styles.addIcon} />
          Add a Review
        </button> */}
        <AddReviewModal referenceID={productId}/>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.sortAndFilter}>
        <Select label={"Sort by"} options={sortOptions} getSelected={getSort}/>
        <Select label={"Filter by"} options={filterOptions} getSelected={getFilter}/>
      </div>

      {isReviewLoading ? (
        <div className={styles.reviewLoader}>
          <img src={CircleLoading} alt="" className={styles.loader} />
        </div>
      ) : (
        <div>
          {reviewDocs.length > 0 ? (
            <div>
              {reviewDocs.map((review, index) => {
                return (
                  <Fragment key={index}>
                    <ReviewCard {...review} />
                  </Fragment>
                );
              })}

              <div className={styles.pagination}>
                <div className={styles.paginationRelativeContainer}>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={changePageHandler}
                    pageCount={Math.ceil(totalDocs / currentLimit)}
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
            </div>
          ) : (
            <p>No reviews yet. Add a review!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;

import React, { Fragment } from "react";
import { AddIcon } from "../../../../assets/icons";
import { ReviewCard } from "../../../../components/Card";
import styles from "./Reviews.module.scss";

const Reviews = (props) => {
  const { docs: reviews, totalDocs } = props;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Reviews {`(${totalDocs})`}</h1>
        <button className={styles.btn}>
          <AddIcon className={styles.addIcon} />
          Add a Review
        </button>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.sortAndFilter}>
        <button className={styles.btn}>Sort by</button>
        <button className={styles.btn}>Filter</button>
      </div>

      {reviews.length > 0 ? (
        reviews.map((review, index) => {
          return (
            <Fragment key={index}>
              <ReviewCard {...review} />
            </Fragment>
          );
        })
      ) : (
        <p>No reviews yet. Add a review!</p>
      )}
    </div>
  );
};

export default Reviews;

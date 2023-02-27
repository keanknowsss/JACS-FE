import React, { useEffect, useState } from "react";
import StarRating from "../../../../components/StarRating/StarRating";
import styles from "./Ratings.module.scss";

const Ratings = (props) => {
  const [totalAverage, setTotalAverage] = useState();
  const [individualStars, setIndividualStars] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props && Object.keys(props).length !== 0) {
      const { totalAverage: ave, totalIndividualStars: stars } = props;
      const individualStars = stars.slice().reverse();
      setTotalAverage((currentAve) => (currentAve = ave));
      setRating((currentRating) => (currentRating = ave));
      setIndividualStars(
        (currentIndividualStars) => (currentIndividualStars = individualStars)
      );
    }
  }, [props]);

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Ratings</h1>
      {totalAverage === undefined || individualStars === undefined ? (
        <p>No reviews yet. Add a Review!</p>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.averageRatings}>
              <p>
                <span className={styles.average}>
                  {totalAverage.toFixed(1)}
                </span>
                <span className={styles.maxStars}>/5</span>
              </p>
              <StarRating
                rating={rating}
                onRating={(rate) => setRating(rate)}
                modify={false}
              />
            </div>

            <div className={styles.individualStars}>
              {individualStars.map((stars, index) => {
                let allStars = 5;
                return (
                  <div key={index} className={styles.starContainer}>
                    <div className={styles.individualStar}>
                      <StarRating key={index} rating={(allStars -= index)} modify={false} />
                    </div>
                    <div>
                      <p key={index}>
                        {stars.total} {stars.total > 1 ? `reviews` : `review`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Ratings;

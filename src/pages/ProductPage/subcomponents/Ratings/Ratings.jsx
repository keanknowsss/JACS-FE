import React, { useEffect, useState } from "react";
import EmptyVoid from "../../../../components/EmptyVoid";
import styles from "./Ratings.module.scss";

const Ratings = (props) => {
  const [totalAverage, setTotalAverage] = useState();
  const [individualStars, setIndividualStars] = useState();

  useEffect(() => {
    if (props && Object.keys(props).length !== 0) {
      const { totalAverage: ave, totalIndividualStars: stars } = props;
      const individualStars = stars.slice().reverse();
      setTotalAverage((currentAve) => (currentAve = ave));
      setIndividualStars(
        (currentIndividualStars) => (currentIndividualStars = individualStars)
      );
    }
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Ratings</h1>
      {totalAverage === undefined || individualStars === undefined ? (
        <EmptyVoid />
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
            </div>

            <div className={styles.individualStars}>
              {individualStars.map((stars, index) => {
                let allStars = 5;
                return (
                  <p key={index}>
                    {(allStars -= index)}: {stars.total}{" "}
                    {stars.total > 1 ? `reviews` : `review`}
                  </p>
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

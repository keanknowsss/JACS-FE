import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";
import styles from "./StarRating.module.scss";

const StarRating = ({ count, rating, color, onRating, modify }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        const getColor = (index) => {
          if (hoverRating >= index) {
            return true;
          } else if (!hoverRating && rating >= index) {
            return true;
          }
          return false;
        };
        return (
          <button
            key={idx}
            className={styles.button}
            style={modify ? {cursor: "pointer"} : {cursor: "default"}}
            onClick={modify ? (() => onRating(idx)) : null}
            onMouseEnter={modify ? (() => setHoverRating(idx)) : null}
            onMouseLeave={modify ? (() => setHoverRating(0)) : null}
          >
            <StarIcon className={styles.star} color={getColor(idx)} />
          </button>
        );
      });
  }, [count, modify, onRating, hoverRating, rating]);

  return <div className={styles.main}>{starRating}</div>;
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: PropTypes.bool
};

StarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: false,
};

export default StarRating;

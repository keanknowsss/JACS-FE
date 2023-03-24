import { useMemo, useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";
import styles from "./StarRating.module.scss";

const StarRating = ({ count, rating, color, onRating, modify }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const countStars = count || 5;
  const ratingStars = rating || 0;
  const colorStars = color || false;

  const starRating = useMemo(() => {
    return Array(countStars)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        const getColor = (index) => {
          if (hoverRating >= index) {
            return true;
          } else if (!hoverRating && ratingStars >= index) {
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
  }, [countStars, modify, onRating, hoverRating, ratingStars]);

  return <div className={styles.main}>{starRating}</div>;
};


export default StarRating;

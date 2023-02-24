import { ImageCard } from "../../assets/images";
import styles from "./ProductCard.module.scss";

import { Link } from "react-router-dom";

const ProductCard = (props, { modifierClass }) => {
  const { _id, category, name, img, price } = props;

  return (
    <>
      <div className={`${styles.productCard} ${modifierClass}`}>
        <div className={styles.mainCard}>
          <Link to={`/products/${_id}`}>
            <div className={styles.mainImg}>
              <div className={styles.imgContainer}></div>
              <img
                className={styles.productImg}
                src={img ? img[0] : ImageCard}
                alt=""
              />
            </div>

            <div className={styles.textContainer}>
              <h3>{name}</h3>
              <ul>
                <li>
                  Category:{" "}
                  {category ? category.replace(/_/g, " ") : "Sample category"}
                </li>
              </ul>
            </div>
            <div className={styles.priceContainer}>
              <span>&#8369; {price}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

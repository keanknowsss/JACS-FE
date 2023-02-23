import { ImageCard } from "../../assets/images";
import styles from "./ProductCard.module.scss";

const ProductCard = (props, { modifierClass }) => {
  const { _id, category, name, img, price } = props;

  return (
    <a href={`/products/${_id}`}>
      <div className={`${styles.productCard} ${modifierClass}`}>
        <div className={styles.mainCard}>
          <div className={styles.mainImg}>
            <div className={styles.imgContainer}></div>
            <img className={styles.productImg} src={ImageCard} alt="" />
          </div>

          <div className={styles.textContainer}>
            <h3>{name}</h3>
            <ul>
              <li>Category: {category.replace(/_/g, " ")}</li>
            </ul>
          </div>
          <div className={styles.priceContainer}>
            <span>&#8369; {price}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;

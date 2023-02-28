import { ImageCard } from "../../assets/images";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ modifierClass, productKey }) => {
	return (
		<div key={productKey} className={`${styles.productCard} ${modifierClass}`}>
			<div className={styles.mainCard}>
				<div className={styles.mainImg}>
					<div className={styles.imgContainer}></div>
					<img className={styles.productImg} src={ImageCard} alt="" />
				</div>

				<div className={styles.textContainer}>
					<h3>Lorem ipsum dolor sit amet, consectetur</h3>
					<ul>
						<li>Brand: Lorem</li>
						<li>Category: Lorem</li>
					</ul>
				</div>
				<div className={styles.priceContainer}>
					<span>&#8369; 9999</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

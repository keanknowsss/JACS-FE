import { Product } from "../../../../assets/placeholder";
import styles from "./ItemRow.module.scss";

const ItemRow = () => {
	return (
		<div className={styles.item}>
			<img src={Product} alt="item" />
			<div className={styles.itemContent}>
				<p className={styles.itemName}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					saepe nostrum natus ipsa asperiores molestiae facilis, dolorem sunt
					mollitia corporis aspernatur architecto quasi. Exercitationem et
					blanditiis, doloribus rerum quidem deleniti.
				</p>
				<p className={styles.price}>&#8369; 1.00</p>
			</div>
			<p className={styles.quantity}>x1</p>
		</div>
	);
};

export default ItemRow;

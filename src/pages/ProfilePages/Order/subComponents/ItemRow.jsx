import { Product } from "../../../../assets/placeholder";
import styles from "./ItemRow.module.scss";

const ItemRow = () => {
	return (
		<div className={styles.item}>
			<img
				src={Product}
				alt="item"
			/>
			<div className={styles.content}>
				<div className={styles.texts}>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
						voluptas non eveniet, error, vitae assumenda libero expedita
						quisquam dolor autem explicabo. Maiores assumenda porro tempore.
						Quaerat aliquid explicabo libero veritatis!
					</p>
					<h2 className={styles.price}>&#8369; 1.00</h2>
				</div>

				<div className={styles.modifyItem}>qty: 1</div>
			</div>
		</div>
	);
};

export default ItemRow;

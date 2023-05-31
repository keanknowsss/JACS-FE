import { AddIcon, MinusIcon } from "../../assets/icons";
import styles from "./ItemIncrementer.module.scss";

const ItemIncrementer = ({ addQtyHandler, changeQtyHandler, minusQtyHandler, quantity }) => {
	return (
		<div className={styles.incrementer}>
			<button onClick={addQtyHandler}>
				<AddIcon className={styles.addQty} />
			</button>
			<input
				type="number"
				value={quantity}
				onChange={changeQtyHandler}
				className={styles.qty}
			/>
			<button onClick={minusQtyHandler}>
				<MinusIcon className={styles.minusQty} />
			</button>
		</div>
	);
};

export default ItemIncrementer;

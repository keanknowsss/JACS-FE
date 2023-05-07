import { useEffect, useState } from "react";
import ItemIncrementer from "../../../../components/ItemIncrementer";
import { Product } from "../../../../assets/placeholder";
import { DeleteIcon, HeartIcon } from "../../../../assets/icons";
import styles from "./ItemRow.module.scss";
import Checkbox from "../../../../components/Checkbox/Checkbox";

const ItemRow = ({ itemId, itemChecked, itemSaved }) => {
	const [quantity, setQuantity] = useState(1);
	const [isChecked, setIsChecked] = useState(false || itemChecked);
	const [isSaved, setIsSaved] = useState(false || itemSaved);

	const addQtyHandler = () => {
		setQuantity(quantity + 1);
	};

	const minusQtyHandler = () => {
		setQuantity(quantity <= 1 ? 1 : quantity - 1);
	};

	const changeQtyHandler = (e) => {
		setQuantity(e.target.value);
	};

	useEffect(() => {
		setIsChecked(itemChecked);
	}, [itemChecked]);

	return (
		<div className={styles.item}>
			<Checkbox
				className={styles.selectItem}
				isChecked={isChecked}
				setIsChecked={setIsChecked}
			/>
			<img src={Product} alt="item" />
			<div className={styles.content}>
				<div className={styles.texts}>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
						voluptas non eveniet, error, vitae assumenda libero expedita quisquam
						dolor autem explicabo. Maiores assumenda porro tempore. Quaerat
						aliquid explicabo libero veritatis!
					</p>
					<h2 className={styles.price}>&#8369; 1.00</h2>
				</div>

				<div className={styles.modifyItem}>
					<ItemIncrementer
						addQtyHandler={addQtyHandler}
						changeQtyHandler={changeQtyHandler}
						minusQtyHandler={minusQtyHandler}
						quantity={quantity}
					/>
					<div className={styles.btnContainer}>
						<button
							className={`${styles.heart} ${isSaved ? styles.saved : null}`}
							onClick={() => setIsSaved(!isSaved)}
						>
							<HeartIcon />
						</button>
						<button className={styles.delete}>
							<DeleteIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemRow;

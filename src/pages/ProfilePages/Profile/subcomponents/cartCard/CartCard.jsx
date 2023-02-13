import { useState } from "react";
import { AddIcon, DeleteIcon, HeartIcon, MinusIcon } from "../../../../../assets/icons";
import { ImageCard } from "../../../../../assets/images";
import styles from "./CartCard.module.scss";

const CartCard = () => {
	const [quantity, setQuantity] = useState(1);

	const addQtyHandler = () => {
		setQuantity(quantity + 1);
	};

	const minusQtyHandler = () => {
		setQuantity(quantity <= 1 ? 1 : quantity - 1);
	};

	const changeQtyHandler = (e) => {
		setQuantity(e.target.value);
	};

	return (
		<>
			<div className={styles.cartCardComponent}>
				<div className={styles.cartCardCol1}>
					<img src={ImageCard} alt="My Cart" />
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
				</div>
				<div className={styles.cartCardCol2}>
					<p className={styles.productName}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
						quasi assumenda? Aliquid harum ipsum odit deleniti cum officia
						fugiat incidunt nihil error voluptatem! Dolor voluptatum nihil
						cumque hic doloremque sed cum inventore perferendis natus corrupti
						voluptas, itaque id pariatur delectus commodi optio voluptate,
						officiis saepe illo, dolorum eaque excepturi quis dolore
						repudiandae. Delectus voluptas cupiditate ratione debitis sed, quis
						modi dolor voluptatem rerum error libero tempora ad at, quidem et
						dolorem aperiam eaque ut sit laborum placeat suscipit. Nam
						distinctio repellat inventore autem soluta, minus labore officiis
						eligendi consequuntur aperiam eaque libero explicabo quam recusandae
						non numquam ipsa cum excepturi?
					</p>
                    <h3 className={styles.price}>&#8369; 9999</h3>
				</div>
                <div className={styles.btnIcons}>
                    <button>
                        <HeartIcon className={styles.save} />
                    </button>
                    <button>
                        <DeleteIcon className={styles.delete} />
                    </button>
                </div>
			</div>
		</>
	);
};

export default CartCard;

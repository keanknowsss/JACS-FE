import { ShopIcon } from "../../../../assets/icons";
import ItemRow from "./ItemRow";
import styles from "./StoreRow.module.scss";

const StoreRow = ({ name }) => {
	const itemID = [0, 1];

	return (
		<div className={styles.store}>
			<p className={styles.storeName}>
				<ShopIcon className={styles.shopIcon} />
				<span>{name}</span>
			</p>
			<div className={styles.itemCheckout}>
				<div className={styles.itemLists}>
					{itemID.map((item) => (
						<ItemRow itemId={item} />
					))}
				</div>

				<div className={styles.storeCheckoutDetails}>
					<div className={styles.message}>
						<p>Message:</p>
						<input type="text" placeholder="Please Leave a Message" />
					</div>
					<hr />
					<div className={styles.priceContainer}>
						<p>Order Total (2 Items)</p>
						<p className={styles.totalPrice}>&#8369; 1.00</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreRow;

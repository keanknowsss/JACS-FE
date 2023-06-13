import { ShopIcon } from "../../../../assets/icons";
import ItemRow from "./ItemRow";
import styles from "./StoreRow.module.scss";

const StoreRow = ({ name, products }) => {

	return (
		<div className={styles.store}>
			<p className={styles.storeName}>
				<ShopIcon className={styles.shopIcon} />
				<span>{name}</span>
			</p>
			<div className={styles.itemCheckout}>
				<div className={styles.itemLists}>
					{products.map((item) => (
						<ItemRow itemId={item._productId} item={item} />
					))}
				</div>

				<div className={styles.storeCheckoutDetails}>
					<div className={styles.message}>
						<p>Message:</p>
						<input type="text" placeholder="Please Leave a Message" />
					</div>
					<hr />
					<div className={styles.priceContainer}>
						<p>Order Total</p>
						<p className={styles.totalPrice}>$ 1.00</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreRow;

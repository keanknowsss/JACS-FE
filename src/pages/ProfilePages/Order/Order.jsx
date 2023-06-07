import styles from "./Order.module.scss";
import StoreRow from "./subComponents/StoreRow";

const Order = ({ title }) => {
	document.title = title;

	// FOR TEST
	const STORE_NAME = ["PCX", "Silicon Volley"];

	return (
		<main className={styles.orderPage}>
			<section className={styles.itemsContainer}>
				<div className={styles.storeItemsContainer}>
          {STORE_NAME.map((name) => (
            <StoreRow
              name={name}
              checked={null}
            />
          ))}
        </div>
			</section>
		</main>
	);
};

export default Order;
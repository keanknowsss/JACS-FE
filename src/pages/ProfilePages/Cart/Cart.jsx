import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { DeleteIcon, LocationIcon } from "../../../assets/icons";
import Checkbox from "../../../components/Checkbox";
import StoreRow from "./cartSubcomponents/StoreRow";
import Checkout from "./Checkout";

const Cart = ({ title, checkoutTitle }) => {
	document.title = title;

	const [selectAll, setSelectAll] = useState(false);

	const [selectedItem, setSelectedItem] = useState([]);

	const [page, setPage] = useState("cart");

	const goToCheckout = () => {
		setPage("checkout");
	};

	// FOR TEST
	const STORE_NAME = ["PCX", "Silicon Volley"];

	return page === "cart" ? (
		<main className={styles.cartPage}>
			<section className={styles.itemsContainer}>
				<div className={styles.tools}>
					<div className={styles.selectContainer}>
						<Checkbox
							className={styles.select}
							isChecked={selectAll}
							setIsChecked={setSelectAll}
						/>
						<p>Select all item(s)</p>
					</div>

					<button className={styles.deleteBtn}>
						<DeleteIcon className={styles.delete} />
						<p>Delete</p>
					</button>
				</div>
				<div className={styles.storeItemsContainer}>
					{STORE_NAME.map((name) => (
						<StoreRow name={name} checked={selectAll} />
					))}
				</div>
			</section>
			<section className={styles.summaryContainer}>
				<div className={styles.summaryInfo}>
					<div className={styles.location}>
						<h2>Location</h2>
						<p>
							<LocationIcon className={styles.locationIcon} />
							{/* -- WITH ADDRESS */}
							{/* <span className={styles.address}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt, illum deserunt aperiam perferendis odio mollitia sint
							consequuntur minus quidem? Voluptatum?
						</span> */}
							{/* -- WITHOUT ADDRESS */}
							<span className={styles.addAddress}>Add Shipping Address</span>
						</p>
					</div>
					<div className={styles.payables}>
						<div className={styles.summary}>
							<h2>Order Summary</h2>
							<div className={styles.summaryDetails}>
								<p className={styles.rowDetail}>
									<span>Subtotal (0 items)</span>
									<span>&#8369; 0.00</span>
								</p>
								<p className={styles.rowDetail}>
									<span>Shipping Fee</span>
									<span>&#8369; 0.00</span>
								</p>
							</div>
						</div>
						<div className={styles.subTotal}>
							<span>Subtotal</span>
							<span>&#8369; 0.00</span>
						</div>
					</div>
				</div>

				<button className={styles.checkout} onClick={goToCheckout}>
					Proceed to Checkout
				</button>
			</section>
		</main>
	) : (
		<Checkout setPage={setPage} title={checkoutTitle} />
	);
};

export default Cart;

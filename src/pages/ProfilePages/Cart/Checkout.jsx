import { useState } from "react";
import { ArrowLine, LocationIcon } from "../../../assets/icons";
import styles from "./Checkout.module.scss";
import StoreRow from "./checkoutSubcomponents/StoreRow";
import { useNavigate } from "react-router-dom";

const Checkout = ({ title, setPage }) => {
	document.title = title;

	const [transactions, setTransactions] = useState("walk-in");
	const [payment, setPayment] = useState("cash");
	const navigate = useNavigate();

	const sample_order_id = "adsad234e13143"

	const orderHandler = () => {
		navigate(`/order/${sample_order_id}`)
	};

	const goToCart = () => {
		setPage("cart");
	};

	const STORE_NAME = ["PCX", "Silicon Volley"];

	return (
		<main className={styles.checkoutPage}>
			<section className={styles.itemsContainer}>
				<div className={styles.tools}>
					<button className={styles.returnBtn} onClick={goToCart}>
						<ArrowLine className={styles.return} />
						<p>Checkout</p>
					</button>
				</div>
				<div className={styles.storeItemsContainer}>
					{
						STORE_NAME.map((name) => (
							<StoreRow name={name} />
						))
					}
				</div>
			</section>
			<section className={styles.checkoutDetails}>
				<div className={styles.transactionMode}>
					<h2>Transaction Mode</h2>
					<hr />
					<div className={styles.toggleChoices}>
						<button
							className={`${
								transactions === "walk-in" ? styles.selected : null
							}`}
							onClick={() => setTransactions("walk-in")}
						>
							Walk-in
						</button>
						<button
							className={`${
								transactions === "delivery" ? styles.selected : null
							}`}
							onClick={() => setTransactions("delivery")}
						>
							Delivery
						</button>
					</div>
				</div>
				<div className={styles.paymentMethod}>
					<h2>Select Payment Method</h2>
					<hr />
					<div className={styles.toggleChoices}>
						<button
							className={`${payment === "cash" ? styles.selected : null}`}
							onClick={() => setPayment("cash")}
						>
							Cash
						</button>
						<button
							className={`${payment === "gcash" ? styles.selected : null}`}
							onClick={() => setPayment("gcash")}
						>
							GCash
						</button>
					</div>
				</div>
				<div className={styles.summaryContainer}>
					<div className={styles.summaryInfo}>
						<div className={styles.location}>
							<h2>Location</h2>
							<p>
								<LocationIcon className={styles.locationIcon} />
								{/* -- REQUIRED WITH ADDRESS */}
								<span className={styles.address}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Nesciunt, illum deserunt aperiam perferendis odio mollitia
									sint consequuntur minus quidem? Voluptatum?
								</span>
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

					<button className={styles.checkout} onClick={orderHandler}>
						Place Order
					</button>
				</div>
			</section>
		</main>
	);
};

export default Checkout;

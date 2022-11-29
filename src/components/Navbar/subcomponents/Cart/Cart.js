import { Link } from "react-router-dom";
import { Product } from "../../../../assets/placeholder";
import styles from "./Cart.module.scss";

const Cart = ({ setCartActive, LOGGED_IN }) => {
	return (
		<section
			aria-label="profile dropdown"
			className={`${styles.cartSection} ${LOGGED_IN ? "w-80" : "w-68"}`}
			onMouseEnter={(e) => setCartActive(true)}
			onMouseLeave={(e) => setCartActive(false)}
		>
			<div className={`flex ${LOGGED_IN ? "justify-start" : "justify-center"}`}>
				<h1>{LOGGED_IN ? "My Cart" : "No Account Signed In"}</h1>
			</div>

			<hr />

			{LOGGED_IN && (
				<>
					<div className={styles.productDetails}>
						<div className="row-span-2 justify-self-center h-fit">
							<img className={styles.productImg} src={Product} alt="Product" />
						</div>
						<p className={styles.productName}>
							AMD Ryzen™ 5 5500 6-Core, 12-Thread Unlocked Desktop Processor
							with Wraith Stealth
						</p>
						<div className="col-span-2 flex justify-between h-fit">
							<span className={styles.qty}>Qty: 1</span>
							<span className={styles.price}>&#8369; 15782.84</span>
						</div>
					</div>
					<div className={styles.productDetails}>
						<div className="row-span-2 justify-self-center h-fit">
							<img className={styles.productImg} src={Product} alt="Product" />
						</div>
						<p className={styles.productName}>
							AMD Ryzen™ 5 5500 6-Core, 12-Thread Unlocked Desktop Processor
							with Wraith Stealth
						</p>
						<div className="col-span-2 flex justify-between h-fit">
							<span className={styles.qty}>Qty: 1</span>
							<span className={styles.price}>&#8369; 15782.84</span>
						</div>
					</div>
					<hr className={styles.secondBorder} />
					<div className="flex justify-between mb-1">
						<h2 className="text-xl font-black ml-6">TOTAL</h2>
						<h2 className="text-xl font-extrabold text-secondary-default">&#8369; 15782.84</h2>
					</div>
				</>
			)}

			<div className="flex justify-between mt-1.5 gap-2">
				{LOGGED_IN ? (
					<>
						<Link className={styles.cart} to="/">
							View Cart
						</Link>
						<Link className={styles.checkout} to="/">
							Proceed to Checkout
						</Link>
					</>
				) : (
					<>
						<Link className={styles.login} to="/login">
							Login
						</Link>
						<Link className={styles.register} to="/register">
							Register
						</Link>
					</>
				)}
			</div>
		</section>
	);
};

export default Cart;

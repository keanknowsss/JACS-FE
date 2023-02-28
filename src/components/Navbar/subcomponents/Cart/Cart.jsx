import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "../../../../assets/placeholder";
import { selectCurrentToken } from "../../../../features/slice/userAccessSlice";
import styles from "./Cart.module.scss";

const Cart = forwardRef(({ setCartActive, className }, ref) => {
	const token = useSelector(selectCurrentToken);

	return (
		<section
			aria-label="profile dropdown"
			className={`${styles.cartSection} ${token ? "w-80" : "w-68"} ${className}`}
			onMouseEnter={(e) => setCartActive && setCartActive(true)}
			onMouseLeave={(e) => setCartActive && setCartActive(false)}
			ref={ref}
		>
			<div className={`flex ${token ? "justify-start" : "justify-center"}`}>
				<h1>{token ? "My Cart" : "No Account Signed In"}</h1>
			</div>

			<hr />

			{token && (
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
				{token ? (
					<>
						<Link className={styles.cart} to="/profile/cart">
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
});

export default Cart;

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DeleteIcon, LocationIcon } from "../../../assets/icons";
import Checkbox from "../../../components/Checkbox";
import Loading from "../../../components/Loading/Loading";
import styles from "./Cart.module.scss";
import Checkout from "./Checkout";
import StoreRow from "./cartSubcomponents/StoreRow";
import EmptyVoid from "../../../components/EmptyVoid/EmptyVoid";

import { getCart, useUpdateCartMutation } from "../../../features/api/builders/cartApi";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";
import { useNavigate } from "react-router-dom";
import { getUserDetail } from "../../../features/api/builders/userApi";

const Cart = ({ title, checkoutTitle }) => {
	document.title = title;

	const navigate = useNavigate();

	const [selectAll, setSelectAll] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const [page, setPage] = useState("cart");
	const [isLoading, setIsLoading] = useState(true);
	const [inventory, setInventory] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0.0);
	const [checkedItems, setCheckedItems] = useState([]);
	const [isUpdatingCart, setIsUpdatingCart] = useState(false);

	const [address, setAddress] = useState();

	const [existingCart, setExistingCart] = useState(false);
	const [stores, setStores] = useState([]);

	const currentUser = useSelector(selectCurrentUserId);
	const [getUserDetailQuery] = getUserDetail.useLazyQuery();
	const [getUserCart] = getCart.useLazyQuery();
	const [updateCart] = useUpdateCartMutation();

	useLayoutEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserCart(currentUser);
				const { products } = data.result;

				const user = await getUserDetailQuery(currentUser);
				setAddress(user.data.result.address);
				const storeName = Array.from(
					new Set(products.map((name) => name.storeName.trim()))
				);
				setStores(storeName);
				setInventory(products);
				setExistingCart(true);
				setIsLoading(false);
			} catch (error) {
				console.log("Error in fetching cart", error);
				setExistingCart(false);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [currentUser, getUserCart]);

	const updateTotalPrice = useCallback((updatedTotalPrice) => {
		setTotalPrice(updatedTotalPrice);
	}, []);

	const updateCheckedItems = useCallback((items) => {
		setCheckedItems(items);
	}, []);

	useEffect(() => {
		// Update the cart on the server when checkedItems change
		const updateCartOnServer = async () => {
			try {
				setIsUpdatingCart(true);

				const body = [];
				checkedItems.map((item) => {
					body.push({ _productId: item.itemId, quantity: item.quantity });
				});

				// console.log(userId)
				// console.log(body);

				if (body && body.length > 0 && body.length == inventory.length) {
					await updateCart({ id: currentUser, products: body });
				}
				// console.log("Cart updated successfully");
			} catch (error) {
				console.log("Error updating cart:", error);
			} finally {
				setIsUpdatingCart(false);
			}
		};

		updateCartOnServer();
	}, [updateCart, checkedItems]);

	const goToCheckout = () => {
		setPage("checkout");
	};

	const editAddressHandler = () => {
		navigate("/profile/settings", { state: { editAddress: true } });
	};

	if (isLoading) {
		return <Loading />;
	}

	return page === "cart" ? (
		<main className={styles.cartPage}>
			{existingCart ? (
				<>
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

							{/* <button className={styles.deleteBtn}>
								<DeleteIcon className={styles.delete} />
								<p>Delete</p>
							</button> */}
						</div>
						<div className={styles.storeItemsContainer}>
							{stores.map((shop) => (
								<StoreRow
									key={shop}
									name={shop}
									checked={selectAll}
									inventory={inventory.filter((item) => item.storeName.trim() === shop)}
									totalPrice={totalPrice}
									updateTotalPrice={updateTotalPrice}
									updateCheckedItems={updateCheckedItems}
									isUpdatingCart={isUpdatingCart}
									selectedItem={selectedItem}
									setSelectedItem={setSelectedItem}
								/>
							))}
						</div>
					</section>
					<section className={styles.summaryContainer}>
						<div className={styles.summaryInfo}>
							<div className={styles.location}>
								<h2>Location</h2>
								<p>
									<LocationIcon className={styles.locationIcon} />
									{address ? (
										<span className={styles.address}>{address}</span>
									) : (
										<span className={styles.addAddress} onClick={editAddressHandler}>
											Add Shipping Address
										</span>
									)}
								</p>
							</div>
							<div className={styles.payables}>
								<div className={styles.summary}>
									<h2>Order Summary</h2>
									<div className={styles.summaryDetails}>
										<p className={styles.rowDetail}>
											<span>Subtotal (0 items)</span>
											<span>&#8369; {totalPrice}</span>
										</p>
										<p className={styles.rowDetail}>
											<span>Shipping Fee</span>
											<span>&#8369; 0.00</span>
										</p>
									</div>
								</div>
								<div className={styles.subTotal}>
									<span>Subtotal</span>
									<span>&#8369; {totalPrice}</span>
								</div>
							</div>
						</div>

						<button className={styles.checkout} onClick={goToCheckout}>
							Proceed to Checkout
						</button>
					</section>
				</>
			) : (
				<div className="w-full h-full relative">
					<EmptyVoid />
					<h1 className="w-full text-center font-medium text-3xl -mt-5 absolute text-secondary-default top-44">
						Add items in your cart first.
					</h1>
				</div>
			)}
		</main>
	) : (
		<Checkout
			setPage={setPage}
			title={checkoutTitle}
			stores={stores}
			products={inventory}
      address={address}
		/>
	);
};

export default Cart;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DeliveryIcon, DiscountIcon, ShipIcon } from "../../../../assets/icons";
import Modal from "../../../../components/Modal";
import styles from "./MainDescription.module.scss";

import {
	getCart,
	useAddCartMutation,
	useUpdateCartMutation,
} from "../../../../features/api/builders/cartApi";
import { getUserDetail } from "../../../../features/api/builders/userApi";
import { selectCurrentUserId } from "../../../../features/slice/userAccessSlice";

const MainDescription = ({ details, specifications, setShowModal }) => {
	const productId = details._id;
	const [addCart] = useAddCartMutation();
	const [updateCart] = useUpdateCartMutation();
	const [queryData] = getUserDetail.useLazyQuery();
	const [queryCart] = getCart.useLazyQuery();

	const currentUser = useSelector(selectCurrentUserId);

	const addToCartHandler = async (e) => {
		e.preventDefault();

		try {
			const { data: user, error: userError } = await queryData(currentUser);
			if (userError) {
				console.log("error in profile name", userError?.result);
			}

			const userId = user && user.result && user.result._userId;
			// console.log(userId);

			const { data: cart, error: cartError } = await queryCart(userId);
			if (cartError) console.log("error in cart name", cartError?.result);

			if (!cart) {
				const body = {
					_userId: userId,
					products: [
						{
							_productId: productId,
							quantity: 1,
						},
					],
				};

				const result = await addCart(body);
				// console.log(result);
			} else {
				// console.log(cart);

				const products = [...cart.result.products];

				products.push({
					_productId: productId,
					quantity: 1,
				});

				const result = await updateCart({ id: userId, products });
				// console.log(result);
			}
		} catch (error) {
			console.log(error);
		}

		setShowModal(true);
	};

	return (
		<>
			<div className={styles.main}>
				<div className={styles.images}>
					<img
						src={details.img[0]}
						className={styles.image}
						alt="product"
					/>
				</div>

				<div className={styles.description}>
					<h1 className={styles.productName}>{details.name}</h1>
					<p className={styles.brand}>Brand: {specifications.manufacturer}</p>
					<p className={styles.price}>$ {details.price}</p>

					<div className={styles.btns}>
						<button
							className={styles.addCartBtn}
							onClick={addToCartHandler}
						>
							Add to Cart
						</button>
						<button className={styles.buyBtn}>Buy Now</button>
					</div>

					<div className={styles.deliveryDetails}>
						<span>
							<DeliveryIcon />
						</span>
						<p className={styles.time}>Delivery Time</p>
						<p className={styles.timeValue}>06/16/2023</p>
						<span>
							<ShipIcon />
						</span>
						<p className={styles.mode}>Mode of Shipping</p>
						<p className={styles.modeValue}>
							Walk-in <br />
							{/* Delivery */}
						</p>
						{/* <span>
							<DiscountIcon />
						</span>
						<p className={styles.discount}>Discount</p>
						<p className={styles.discountValue}>
							Buy in installments <br />
							Buy by bank transfor for legal entities.
						</p> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default MainDescription;

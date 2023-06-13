import { useLayoutEffect, useState } from "react";
import { Product } from "../../../../assets/placeholder";
import { getProduct } from "../../../../features/api/builders/productApi";
import styles from "./ItemRow.module.scss";

const ItemRow = ({ item }) => {
	const [getProductDetails] = getProduct.useLazyQuery();

	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);

	useLayoutEffect(() => {
		const getData = async () => {
			try {
				const { data, isLoading } = await getProductDetails(item._productId);
				setProduct(data.result);
				setLoading(isLoading);
			} catch (error) {
				console.log("Product Fetch Error", error);
			}
		};
		getData();
	}, []);

	return loading ? (
		<></>
	) : (
		<div className={styles.item}>
			<img src={product.img[0]} alt="item" />
			<div className={styles.itemContent}>
				<p className={styles.itemName}>{product.name}</p>
				<p className={styles.price}>${ product.price}</p>
			</div>
			<p className={styles.quantity}>x{item.quantity}</p>
		</div>
	);
};

export default ItemRow;

import { useEffect, useState } from "react";
import { EditIcon } from "../../../../../../../assets/icons";
import Checkbox from "../../../../../../../components/Checkbox";
import ProductModal from "../modal/ProductModal";
import styles from "./ProductCardShop.module.scss";
import { useNavigate } from "react-router-dom";

const ProductCardShop = ({
	productDetails,
	productKey,
	modifierClass,
	selectedItem,
	setSelectedItem
}) => {
	const itemId = productDetails._id;

	const [editItem, setEditItem] = useState(false);

	const [isChecked, setIsChecked] = useState(false);

	const navigate = useNavigate();

	const productNavigatorHandler = (e) => {
		navigate(`/products/${productDetails._id}`);
	};

	useEffect(() => {
		if (isChecked) {
			setSelectedItem([...selectedItem, itemId]);
		} else {
			if (selectedItem.includes(itemId)) {
				setSelectedItem(selectedItem.filter((item) => item !== itemId));
			}
		}
	}, [isChecked]);

	return productDetails ? (
		<>
			<div
				// in integration productKey and ID can be same equal to the itemID (id from database)
				key={productKey}
				className={`${styles.productCardShop} ${modifierClass}`}
			>
				{editItem && (
					<ProductModal
						type="edit"
						productId={itemId}
						showModal={editItem}
						setShowModal={setEditItem}
					/>
				)}

				<div className={styles.mainCard}>
					<button className={styles.editIcon} onClick={() => setEditItem(true)}>
						<EditIcon className={styles.editPicture} />
					</button>
					<Checkbox
						className={styles.selectProduct}
						isChecked={isChecked}
						setIsChecked={setIsChecked}
					/>
					<div className={styles.mainImg} onClick={productNavigatorHandler}>
						<div className={styles.imgContainer}></div>
						<img className={styles.productImg} src={productDetails.img[0]} alt="Item" />
					</div>

					<div className={styles.textContainer}>
						<h3>{productDetails.name}</h3>
						<ul>
							{/* <li>Brand: Lorem</li> */}
							<li>Category: {productDetails.category}</li>
						</ul>
					</div>
					<div className={styles.priceContainer}>
						<span>&#8369; {productDetails.price}</span>
					</div>
				</div>
			</div>
		</>
	) : null;
};

export default ProductCardShop;

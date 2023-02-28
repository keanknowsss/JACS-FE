import { useState } from "react";
import { EditIcon } from "../../../../../../../assets/icons";
import { ImageCard } from "../../../../../../../assets/images";
import Checkbox from "../../../../../../../components/Checkbox";
import ProductModal from "../modal/ProductModal";
import styles from "./ProductCardShop.module.scss";

const ProductCardShop = ({
	productKey,
	modifierClass,
	selectedItem,
	setSelectedItem,
	itemId,
}) => {
	const [editItem, setEditItem] = useState(false);

	return (
		<>
			

			<div
				key={productKey}
				className={`${styles.productCardShop} ${modifierClass}`}
			>
				<ProductModal
				type="editItem"
				id={itemId}
				showModal={editItem}
				setShowModal={setEditItem}
			/>
				<div className={styles.mainCard}>
					<button className={styles.editIcon} onClick={() => setEditItem(true)}>
						<EditIcon className={styles.editPicture} />
					</button>
					<Checkbox
						className={styles.selectProduct}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						itemId={itemId}
					/>
					<div className={styles.mainImg}>
						<div className={styles.imgContainer}></div>
						<img className={styles.productImg} src={ImageCard} alt="" />
					</div>

					<div className={styles.textContainer}>
						<h3>Lorem ipsum dolor sit amet, consectetur</h3>
						<ul>
							<li>Brand: Lorem</li>
							<li>Category: Lorem</li>
						</ul>
					</div>
					<div className={styles.priceContainer}>
						<span>&#8369; 9999</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCardShop;

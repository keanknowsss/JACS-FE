import { useEffect, useRef, useState } from "react";
import { AddIconCircle, DeleteIcon } from "../../../../../assets/icons";
import ProductCardShop from "./components/card/ProductCardShop";
import ProductModal from "./components/modal/ProductModal";
import styles from "./Products.module.scss";

const Products = () => {
	const [selectedItem, setSelectedItem] = useState([]);

	const [itemModal, setItemModal] = useState(false);
	const [modalDetails, setModalDetails] = useState({
		type: "add",
		id: null
	})

	const deleteRef = useRef();

	// to be removed in integration
	let sample_items = [];

	for (let index = 0; index < 20; index++) {
		sample_items.push(index);
	}

	useEffect(() => {
		if (selectedItem.length === 0) {
			deleteRef.current.classList.add(styles.invalidBtn);
			deleteRef.current.classList.remove(styles.validBtn);
		} else {
			deleteRef.current.classList.add(styles.validBtn);
			deleteRef.current.classList.remove(styles.invalidBtn);
		}
	}, [selectedItem]);

	return (
		<>
			<ProductModal type="add" showModal={itemModal} setShowModal={setItemModal} />
			<header className={styles.contentHeading}>
				<h1 className={styles.headingText}>Store Name's Products</h1>
				<div className={styles.iconContainer}>
					<button ref={deleteRef}>
						<DeleteIcon className={styles.delete} />
					</button>
					<button onClick={() => setItemModal(true)}>
						<AddIconCircle className={styles.add} />
					</button>
				</div>
			</header>
			{sample_items.length > 0 ? (
				<main className={styles.productContainer}>
					{sample_items.map((item, index) => (
						<ProductCardShop
							productKey={index}
							selectedItem={selectedItem}
							setSelectedItem={setSelectedItem}
							modifierClass={styles.productCardShop}
							itemId={item}
						/>
					))}
				</main>
			) : (
				<main className={styles.noItemsDiv}>
					<h1>NO ITEMS ADDED</h1>
					<button>Add Items here</button>
				</main>
			)}
		</>
	);
};

export default Products;

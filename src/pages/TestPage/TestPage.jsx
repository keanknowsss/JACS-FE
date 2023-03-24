import { useState } from "react";
import Modal from "../../components/Modal";
import Checkbox from "../../components/Checkbox";
import ProductCardShop from "../ProfilePages/Shop/contents/products/components/card/ProductCardShop";
import ProductModal from "../ProfilePages/Shop/contents/products/components/modal/ProductModal";

const TestPage = ({ title }) => {
	document.title = title;

	const [showMenu, setShowMenu] = useState(true);
	const [selectedItems, setSelectedItems] = useState([])
	const [showMenu, setShowMenu] = useState(true);
	const [selectedItems, setSelectedItems] = useState([])

	return (
		<>
			<main className="h-screen w-full bg-primary-default">
				{/* <Modal setShowModal={setShowMenu} showModal={showMenu} type="callback">
					<h1>test</h1>
					<p>test</p>
				</Modal> */}
				{/* <Modal setShowModal={setShowMenu} showModal={showMenu} type="callback">
					<h1>test</h1>
					<p>test</p>
				</Modal> */}
				{/* <CartCard /> */}
				{/* <BuildCard /> */}
				{/* <ProductCardShop selectedItem={selectedItems} setSelectedItem={setSelectedItems} /> */}
				{/* <Menu showMenu={true} setShowMenu={setShowMenu} /> */}
			
				<ProductModal type="add" showModal={showMenu} setShowModal={setShowMenu} />
				{/* <ProductCardShop selectedItem={selectedItems} setSelectedItem={setSelectedItems} /> */}
				{/* <Menu showMenu={true} setShowMenu={setShowMenu} /> */}
			
				<ProductModal type="add" showModal={showMenu} setShowModal={setShowMenu} />
			</main>
		</>
	);
};
export default TestPage;

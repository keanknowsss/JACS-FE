import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AddIconCircle, ArrowNavigation, DeleteIcon } from "../../../../../assets/icons";
import ProductCardShop from "./components/card/ProductCardShop";
import ProductModal from "./components/modal/ProductModal";
import styles from "./Products.module.scss";
import {
	getProductBySellerId,
	useAddProductMutation,
	useDeleteProductMutation
} from "../../../../../features/api/builders/productApi";
import { useSelector } from "react-redux";
import { selectCurrentSellerId } from "../../../../../features/slice/sellerAccessSlice";
import { getSellerDetail } from "../../../../../features/api/builders/sellerApi";
import { selectCurrentUserId } from "../../../../../features/slice/userAccessSlice";
import ReactPaginate from "react-paginate";
import Loading from "../../../../../components/Loading/Loading";

const Products = ({ shopName }) => {
	const [selectedItem, setSelectedItem] = useState([]);

	const [itemModal, setItemModal] = useState(false);
	const [itemUploadSuccessful, setItemUploadSuccessful] = useState(false);

	const [products, setProducts] = useState([]);

	// For Pagination
	const [itemRange, setItemRange] = useState({ min: 0, max: 10 });
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);

	const [productId, setProductId] = useState();
	const [sellerId, setSellerId] = useState(useSelector(selectCurrentSellerId));

	const [mainLoading, setMainLoading] = useState(true);
	const [productLoading, setProductLoading] = useState(true);

	const deleteRef = useRef();

	// Integration for add item
	const [getSellerDetailQuery] = getSellerDetail.useLazyQuery();
	const [addProductQuery] = useAddProductMutation();
	const [deleteProductQuery] = useDeleteProductMutation();
	const [getProductQuery] = getProductBySellerId.useLazyQuery();

	const id = useSelector(selectCurrentUserId);

	// Functions
	const changePageHandler = (page) => {
		setProductLoading(true);
		setItemRange({
			min: 0 + 20 * page.selected,
			max: 20 + 20 * page.selected
		});
		setCurrentPage(page.selected + 1);
		window.scrollTo(0, 0);
	};

	const deleteItemHandler = async () => {
		let result = window.confirm("Are you sure you want to remove selected items?");

		if (result) {
			try {
				await deleteProductQuery(selectedItem).unwrap();
				window.location.reload();
			} catch (error) {
				console.log("Error in Deleting Items", error);
			}
		}
	};

	// API Calls
	useLayoutEffect(() => {
		const getId = async () => {
			try {
				const { data } = await getSellerDetailQuery(id);
				setSellerId(data.result._id);
			} catch (error) {
				console.log("id obtain error", error);
			}
		};
		getId();
	}, [getSellerDetailQuery, id]);

	useLayoutEffect(() => {
		const getProducts = async () => {
			try {
				const { data, isLoading } = await getProductQuery({
					sellerId,
					params: {
						page: currentPage,
						limit: 10
					}
				});
				if (!isLoading) {
					setMainLoading(false);
					setProductLoading(false);
					setProducts(data.result.docs);
					setTotalPage(data.result.totalPages);
				}
			} catch (error) {
				console.log("Getting Products Error", error);
			}
		};

		sellerId && getProducts();
	}, [sellerId, currentPage, getProductQuery]);

	useEffect(() => {
		if (selectedItem.length === 0) {
			deleteRef.current.classList.add(styles.invalidBtn);
			deleteRef.current.classList.remove(styles.validBtn);
		} else {
			deleteRef.current.classList.add(styles.validBtn);
			deleteRef.current.classList.remove(styles.invalidBtn);
		}
	}, [selectedItem]);

	useEffect(() => {
		const addItem = async () => {
			try {
				const addedProduct = await addProductQuery({
					_sellerId: sellerId,
					name: "sample product",
					description: "sample description",
					category: "cpu",
					price: 1,
					img: ["image1"],
					stock: 1
				}).unwrap();

				setProductId(addedProduct.result._id);
			} catch (error) {
				console.log("adding product error", error);
			}
		};

		const deleteItem = async () => {
			try {
				await deleteProductQuery([productId]);
			} catch (error) {
				console.log("delete product error", error);
			}
		};

		if (itemModal) {
			addItem();
		} else {
			if (!itemModal && !itemUploadSuccessful && productId) {
				deleteItem();
			}
			if (itemUploadSuccessful) {
				setItemUploadSuccessful(false);
			}
		}
	}, [itemModal, setItemModal]);

	return (
		<>
			<ProductModal
				type="add"
				showModal={itemModal}
				setShowModal={setItemModal}
				productId={productId}
				setItemUploadSuccessful={setItemUploadSuccessful}
				itemUploadSuccessful={itemUploadSuccessful}
			/>
			<header className={styles.contentHeading}>
				<h1 className={styles.headingText}>{shopName}'s Products</h1>
				<div className={styles.iconContainer}>
					<button ref={deleteRef} onClick={deleteItemHandler}>
						<DeleteIcon className={styles.delete} />
					</button>
					<button onClick={() => setItemModal(true)}>
						<AddIconCircle className={styles.add} />
					</button>
				</div>
			</header>
			{mainLoading ? (
				<>
					<Loading />
				</>
			) : products ? (
				<>
					{productLoading ? (
						<div className={styles.modifierClass}>
							<Loading modifierClass={styles.modifierClass} />
						</div>
					) : (
						<main className={styles.productContainer}>
							{products.map((item, index) => (
								<ProductCardShop
									productDetails={item}
									productKey={index}
									selectedItem={selectedItem}
									setSelectedItem={setSelectedItem}
									modifierClass={styles.productCardShop}
								/>
							))}
						</main>
					)}
					{totalPage > 1 && (
						<div className={styles.pagination}>
							<div className={styles.paginationRelativeContainer}>
								<ReactPaginate
									breakLabel="..."
									nextLabel="Next"
									onPageChange={changePageHandler}
									pageCount={totalPage}
									previousLabel="Previous"
									pageRangeDisplayed={5}
									marginPagesDisplayed={1}
									className={styles.paginationComponent}
									activeLinkClassName={styles.activePage}
									pageLinkClassName={styles.pageLink}
									previousLinkClassName={styles.prevLink}
									nextLinkClassName={styles.nextLink}
								/>

								<div className={styles.rightArrowContainer}>
									<ArrowNavigation className={styles.rightArrow} />
									<ArrowNavigation className={styles.rightArrow} />
								</div>

								<div className={styles.leftArrowContainer}>
									<ArrowNavigation className={styles.leftArrow} />
									<ArrowNavigation className={styles.leftArrow} />
								</div>
							</div>
						</div>
					)}
				</>
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

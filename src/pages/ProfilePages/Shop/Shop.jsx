import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../../../assets/icons";
import { DefaultProfilePicture } from "../../../assets/placeholder";
import { Overview, Products, Transactions } from "./contents";
import styles from "./Shop.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";
import {
	getSellerDetail,
	useAddSellerProfilePictureMutation,
	useUpdateSellerDetailMutation
} from "../../../features/api/builders/sellerApi";
import Loading from "../../../components/Loading/Loading";

const Shop = ({ title, content }) => {
	document.title = title;

	const navigate = useNavigate();

	// Store Data
	const [shopProfilePicture, setShopProfilePicture] = useState(DefaultProfilePicture);
	const [shopName, setShopName] = useState();

	const inputImage = useRef();

	// API calls
	const [getSellerDetailQuery] = getSellerDetail.useLazyQuery();
	const [addProfilePicture] = useAddSellerProfilePictureMutation();
	const [updateSellerProfile] = useUpdateSellerDetailMutation();

	const id = useSelector(selectCurrentUserId);
	const [loading, setLoading] = useState(true);

	// functions
	const shopProfilePictureHandler = async (e) => {
		const images = e.target.files[0];
		setShopProfilePicture(URL.createObjectURL(images));

		try {
			const uploadedImage = await addProfilePicture({
				id,
				images
			}).unwrap();

			await updateSellerProfile({
				id,
				updatedDetails: {
					img: uploadedImage.result[0].publicUrl
				}
			});
		} catch (error) {
			console.log("Seller Image Error:", error);
		}
	};

	const editProfileHandler = () => {
		navigate("/profile/settings", { state: { editShop: true } });
	};

	// When ui is loaded / state changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [content]);

	useEffect(() => {
		navigate("/profile/shop/products");
	}, [navigate]);

	useLayoutEffect(() => {
		const getData = async () => {
			try {
				const sellerDetail = await getSellerDetailQuery(id);

				if (!sellerDetail.isLoading) {
					setLoading(false);
				}

				if (sellerDetail.data.result.img) {
					setShopProfilePicture(sellerDetail.data.result.img);
				}

				setShopName(sellerDetail.data.result.storeName);
			} catch (error) {
				console.log("Data Fetching Error:", error);
			}
		};

		getData();
	}, [getSellerDetailQuery, id]);

	return loading ? (
		<>
			<Loading />
		</>
	) : (
		<main className={styles.shopPage}>
			<div className={styles.shopRow}>
				<div className={styles.leftColumn}>
					<section className={styles.shopProfileSection}>
						<div className={styles.pictureContainer}>
							<img
								src={shopProfilePicture}
								alt="My Profile Img"
								className={styles.profilePicture}
							/>
							<button
								className={styles.editIcon}
								onClick={() => inputImage.current.click()}
							>
								<EditIcon className={styles.editPicture} />
							</button>
							<input
								type="file"
								accept="image/jpg. image/png, image/jpeg"
								ref={inputImage}
								onChange={shopProfilePictureHandler}
								hidden
							/>
						</div>
						<div className={styles.mainContent}>
							<div className={styles.userName}>
								<h3>{shopName}</h3>
							</div>
							{/* <div className={styles.followsContainer}>
								<div>
									<p>0</p>
									<p>Followers</p>
								</div>
								<div>
									<p>0</p>
									<p>Following</p>
								</div>
							</div> */}
							<button className={styles.profileBtn} onClick={editProfileHandler}>
								Edit Profile
							</button>
						</div>
					</section>
					{/* <section className={styles.shopMenuSection}>
						<ul>
							<li>
								<button
									className={`${
										content === "overview" ? styles.btnActive : styles.inActive
									} ${styles.btnMenu}`}
									onClick={() => navigate("/profile/shop")}
								>
									Overview
								</button>
							</li>
							<li className={styles.btnMenu}>
								<button
									className={`${
										content === "product" ? styles.btnActive : styles.inActive
									} ${styles.btnMenu}`}
									onClick={() => navigate("/profile/shop/products")}
								>
									Products
								</button>
							</li>
							<li className={styles.btnMenu}>
								<button
									className={`${
										content === "transaction"
											? styles.btnActive
											: styles.inActive
									} ${styles.btnMenu}`}
									onClick={() => navigate("/profile/shop/transactions")}
								>
									Transactions
								</button>
							</li>
						</ul>
					</section> */}
				</div>

				<section className={styles.shopMainContentContainer}>
					{content === "overview" && <Overview />}
					{content === "product" && <Products shopName={shopName} />}
					{content === "transaction" && <Transactions />}
				</section>
			</div>
		</main>
	);
};

export default Shop;

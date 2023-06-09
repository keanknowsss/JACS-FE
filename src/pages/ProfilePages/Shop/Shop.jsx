import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../../../assets/icons";
import { DefaultProfilePicture } from "../../../assets/placeholder";
import { Overview, Products, Transactions } from "./contents";
import styles from "./Shop.module.scss";

const Shop = ({ title, content }) => {
	document.title = title;

	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [content]);

	useEffect(() => {
		navigate("/profile/shop/products");
	}, [navigate]);

	return (
		<main className={styles.shopPage}>
			<div className={styles.shopRow}>
				<div className={styles.leftColumn}>
					<section className={styles.shopProfileSection}>
						<div className={styles.pictureContainer}>
							<img
								src={DefaultProfilePicture}
								alt="My Profile Img"
								className={styles.profilePicture}
							/>
							<button className={styles.editIcon}>
								<EditIcon className={styles.editPicture} />
							</button>
						</div>
						<div className={styles.mainContent}>
							<div className={styles.userName}>
								<h3>Shop Name</h3>
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
							<button className={styles.profileBtn}>Edit Profile</button>
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
					{content === "product" && <Products />}
					{content === "transaction" && <Transactions />}
				</section>
			</div>
		</main>
	);
};

export default Shop;

import { ProductCard } from "../../components/Card";
import { HomeCarousel } from "../../components/Carousel";
import Loading from "../../components/Loading";

import { JACSLogo } from "../../assets/images";
import styles from "./Home.module.scss";

import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Toast from "../../components/Toast";
import { useGetAllProductsQuery } from "../../features/api/builders/productApi";
import { selectCurrentUserIsVerified } from "../../features/slice/userAccessSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const Home = ({ title }) => {
	document.title = title;

	const isVerified = useSelector(selectCurrentUserIsVerified);

	const [isVerifiedToast, showVerifiedToast] = useState(false);
	const [loading, setLoading] = useState(false);

	const [limit, setLimit] = useState(3);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	const [items, setItems] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [totalDocs, setTotalDocs] = useState(0);

	const query = {
		page,
		limit,
		search
	};

	const { data, error, isLoading } = useGetAllProductsQuery({
		...query
	});

	const location = useLocation();

	const resendVerification = () => {
		console.log("reverify");
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);

		if (location?.state?.fromForm) {
			!isVerified && showVerifiedToast(true);
		}

		const products = data ? data["result"]["docs"] : [];
		const { totalPages, totalDocs } =
			data && data["result"] !== undefined
				? data["result"]
				: { totalPages: 0, totalDocs: 0 };

		setItems((currentItems) => (currentItems = products));
		setTotalPages((currentTotalPages) => (currentTotalPages = totalPages));
		setTotalDocs((currentTotalDocs) => (currentTotalDocs = totalDocs));
	}, [location, isVerified, data]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<Toast
						showToast={isVerifiedToast}
						setShowToast={showVerifiedToast}
						symbol="warning"
						type="linkCallback"
						title="Account is not Verified"
						callback={resendVerification}
						linkText="Send email verification"
					/>
					<main className={styles.homeContainer}>
						<div className={styles.homeDiv}>
							{/* <div> */}
							<section aria-label="home carousel" className={styles.carouselSection}>
								<div className={styles.carouselDiv}>
									<HomeCarousel />
								</div>
							</section>

							<div className={styles.logoSection}>
								<JACSLogo />
							</div>

							<div className={styles.itemsSection}>
								<p className={styles.itemHeading}>Most Bought items</p>
								<div className={styles.cardContainer}>
									{items.map((item, index) => {
										return (
											<Fragment key={item._id}>
												<ProductCard {...item} modifierClass={styles.productMod} />
											</Fragment>
										);
									})}
								</div>
							</div>

							<div className={styles.itemsSection}>
								<p className={styles.itemHeading}>Trending items</p>
								<div className={styles.cardContainer}>
									{items.map((item, index) => {
										return (
											<Fragment key={item._id}>
												<ProductCard {...item} modifierClass={styles.productMod} />
											</Fragment>
										);
									})}
								</div>
							</div>
							{/* </div> */}
						</div>
					</main>
				</>
			)}
		</>
	);
};

export default Home;

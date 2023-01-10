import { HomeCarousel } from "../../components/Carousel";
import { ProductCard } from "../../components/Card";

import { JACSLogo } from "../../assets/images";
import styles from "./Home.module.scss";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../../components/Toast";
import { useSelector } from "react-redux";
import { selectCurrentUserIsVerified } from "../../features/slice/userAccessSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const Home = ({ title }) => {
	document.title = title;

	const isVerified = useSelector(selectCurrentUserIsVerified);

	const [isVerifiedToast, showVerifiedToast] = useState(false);

	const location = useLocation();

	const resendVerification = () => {
		console.log("reverify");
	};

	useEffect(() => {
		if (location?.state?.fromForm) {
			!isVerified && showVerifiedToast(true);
		}
	}, [location, isVerified]);

	return (
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
					<section
						aria-label="home carousel"
						className={styles.carouselSection}
					>
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
							<ProductCard modifierClass={styles.productMod} />
							<ProductCard modifierClass={styles.productMod} />
							<ProductCard modifierClass={styles.productMod} />
						</div>
					</div>

					<div className={styles.itemsSection}>
						<p className={styles.itemHeading}>Trending items</p>
						<div className={styles.cardContainer}>
							<ProductCard modifierClass={styles.productMod} />
							<ProductCard modifierClass={styles.productMod} />
							<ProductCard modifierClass={styles.productMod} />
						</div>
					</div>
					{/* </div> */}
				</div>
			</main>
		</>
	);
};

export default Home;

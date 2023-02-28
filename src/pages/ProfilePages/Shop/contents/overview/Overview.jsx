import { StackOverflowIcon, StarIcon } from "../../../../../assets/icons";
import styles from "./Overview.module.scss";

const Overview = () => {
	return (
		<>
			<header className={styles.contentHeading}>
				<h1 className={styles.headingText}>Store Name's Overview</h1>
			</header>
			<main className={styles.categoryContent}>
				<div className={styles.title}>
					<StackOverflowIcon className={styles.titleIcon} />
					<span>Key Metrics</span>
				</div>

				<div className={styles.statsSection}>
					<div className={styles.statsMainContainer}>
						<h3>Sales</h3>
						<p className={styles.statsContent}>&#8369; 9999.99</p>
						<div className={styles.statsDetails}>
							<div className={styles.date}>
								<p>vs MM/DD/YYYY</p>
								<p>Yesterday</p>
							</div>
							<p className={styles.percentage}>0.00%</p>
						</div>
					</div>

					<div className={styles.statsMainContainer}>
						<h3>Sales Per Order</h3>
						<p className={styles.statsContent}>&#8369; 9999.99</p>
						<div className={styles.statsDetails}>
							<div className={styles.date}>
								<p>vs MM/DD/YYYY</p>
								<p>Yesterday</p>
							</div>
							<p className={styles.percentage}>0.00%</p>
						</div>
					</div>

					<div className={styles.statsMainContainer}>
						<h3>Orders</h3>
						<p className={styles.statsContent}>999</p>
						<div className={styles.statsDetails}>
							<div className={styles.date}>
								<p>vs MM/DD/YYYY</p>
								<p>Yesterday</p>
							</div>
							<p className={styles.percentage}>0.00%</p>
						</div>
					</div>

					<div className={styles.statsMainContainer}>
						<h3>Page Views</h3>
						<p className={styles.statsContent}>1000</p>
						<div className={styles.statsDetails}>
							<div className={styles.date}>
								<p>vs MM/DD/YYYY</p>
								<p>Yesterday</p>
							</div>
							<p className={styles.percentage}>0.00%</p>
						</div>
					</div>
				</div>

				<div
					className={`${styles.statsMainContainer} ${styles.reviewsContainer}`}
				>
					<h3>Reviews</h3>
					<div className={styles.reviewContent}>
						<div className={styles.starsContainer}>
							<div className={styles.starPercents}>
								<div className={styles.starContainer}>
									{[...Array(5)].map(() => (
										<StarIcon className={`${styles.stars} ${styles.active}`} />
									))}
								</div>
								<p className={styles.percent}>90%</p>
							</div>
							<div className={styles.starPercents}>
								<div className={styles.starContainer}>
									{[...Array(4)].map(() => (
										<StarIcon className={`${styles.stars} ${styles.active}`} />
									))}
									<StarIcon className={`${styles.stars}`} />
								</div>
								<p className={styles.percent}>4%</p>
							</div>
							<div className={styles.starPercents}>
								<div className={styles.starContainer}>
									{[...Array(3)].map(() => (
										<StarIcon className={`${styles.stars} ${styles.active}`} />
									))}
									{[...Array(2)].map(() => (
										<StarIcon className={styles.stars} />
									))}
								</div>
								<p className={styles.percent}>3%</p>
							</div>
							<div className={styles.starPercents}>
								<div className={styles.starContainer}>
									{[...Array(2)].map(() => (
										<StarIcon className={`${styles.stars} ${styles.active}`} />
									))}
									{[...Array(3)].map(() => (
										<StarIcon className={styles.stars} />
									))}
								</div>
								<p className={styles.percent}>20%</p>
							</div>
							<div className={styles.starPercents}>
								<div className={styles.starContainer}>
									<StarIcon className={`${styles.stars} ${styles.active}`} />
									{[...Array(4)].map(() => (
										<StarIcon className={styles.stars} />
									))}
								</div>
								<p className={styles.percent}>20%</p>
							</div>
						</div>

						{/* <div className="border w-full h-auto"><i>to add</i></div> */}
					</div>
				</div>
			</main>
		</>
	);
};

export default Overview;

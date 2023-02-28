import styles from "./Transactions.module.scss";

const Transactions = () => {
	// to be removed in integration
	let sample_transactions = [];

	for (let index = 0; index < 20; index++) {
		sample_transactions.push(index);
	}

	return (
		<>
			<header className={styles.contentHeading}>
				<h1 className={styles.headingText}>Store Name's Transactions</h1>
			</header>
			{sample_transactions.length > 0 ? (
				<>
					{/* for normal screens */}
					<main className={styles.contentContainer}>
						<div className={styles.transactionsContainer}>
							<div className={styles.headingRow}>
								<h3>Date</h3>
								<h3 className={styles.descriptionHead}>Description</h3>
								<h3>Amount</h3>
								<h3>Status</h3>
							</div>
							{sample_transactions.map(() => (
								<div className={styles.transactionRow}>
									<p>4/20/6969</p>
									<div className={styles.description}>
										<p className={styles.descriptionMain}>
											Income from order 99999999999999
										</p>
										<div className={styles.descriptionSub}>
											<p>Buyer:</p>
											<p className={styles.name}>lorem30</p>
											<p>Item:</p>
											<p className={styles.name}>Item Name</p>
										</div>
									</div>
									<p className={styles.amount}>&#8369; 9999</p>
									<p className={styles.status}>Completed</p>
								</div>
							))}
						</div>
					</main>

					{/* for small screens */}
					<main className={styles.smallContentContainer}>
						{sample_transactions.map(() => (
							<div className={styles.transactionSmallRow}>
								<div className={styles.transactionContentCols}>
									<div>
										<p>Date</p>
										<p>4/20/6969</p>
									</div>
									<div>
										<p>Description</p>
										<div className={styles.description}>
											<p className={styles.descriptionMain}>
												Income from order 99999999999999
											</p>
											<div className={styles.descriptionSub}>
												<p>Buyer:</p>
												<p className={styles.name}>lorem30</p>
												<p>Item:</p>
												<p className={styles.name}>Item Name</p>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.transactionContentCols}>
									<div>
										<p>Amount</p>
										<p className={styles.amount}>&#8369; 9999</p>
									</div>
									<div>
										<p>Status</p>
										<p className={styles.status}>Completed</p>
									</div>
								</div>
							</div>
						))}
					</main>
				</>
			) : (
				<main className={styles.noItemsDiv}>
					<h1>NO TRANSACTIONS YET</h1>
				</main>
			)}
		</>
	);
};

export default Transactions;

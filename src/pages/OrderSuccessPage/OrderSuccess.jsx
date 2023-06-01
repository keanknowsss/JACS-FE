import { useNavigate } from "react-router-dom";
import styles from "./OrderSuccess.module.scss";

const OrderSuccess = () => {
	document.title = "Order Success - JACS";
    const navigate = useNavigate();

    const returnStoreHandler = () => {
        navigate("/shop")
    }

	return (
		<>
			<main className={styles.orderSuccessPage}>
				<div className={styles.successLogo}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<g
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path d="m2 12 5.25 5s1.41939-1.6222 2.625-3m6.125-7-3.5 4" />
							<path d="m8 12 5.25 5 8.75-10" />
						</g>
					</svg>
				</div>
                <div className={styles.orderSuccessText}>
                    <span className={styles.paymenmt}>Payment</span>
                    <span className={styles.successful}>Successful</span>
                </div>
                <p className={styles.thanks}>Thank you for Purchasing!</p>
                <button className={styles.returnStore} onClick={returnStoreHandler}>Back to Store</button>
			</main>
		</>
	);
};

export default OrderSuccess;

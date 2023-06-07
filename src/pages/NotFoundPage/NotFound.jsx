import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = ({ title }) => {
	document.title = title;
	const navigate = useNavigate();

	const returnHome = (e) => {
		navigate("/");
	};

	return (
		<main className={styles.notFoundPage}>
			<div className={styles.iconContainer}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
					className={styles.XIcon}
				>
					<path d="m18.266 26.068 7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zm12.297-23.537-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
				</svg>
			</div>
			<div className={styles.errText}>
				<span>Page</span>
				<span className={styles.notFoundText}>Not Found</span>
			</div>
			<p className={styles.notFoundDescription}>
				We searched high and low but couldn’t find what you’re looking for.
				Let’s find a better place for you to go.
			</p>
      <button className={styles.returnHome} onClick={returnHome}>
        JACS Home
      </button>
		</main>
	);
};

export default NotFound;

import { useState } from "react";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import styles from "./StoreProfile.module.scss";

const StoreProfile = ({ title }) => {
	document.title = title;

	const [storeName, setStoreName] = useState("");
	const [storeContactNumber, setStoreContactNumber] = useState("");
	const [storeEmail, setStoreEmail] = useState("");

	const registerHandler = (e) => {
		e.preventDefault();

		console.log("name", storeName);
		console.log("contact", storeContactNumber);
		console.log("email", storeEmail);
	};

	return (
		<>
			<div className={styles.formTitleContainer}>
				<div className={styles.formTitle}>
					<h1>Create New Shop</h1>
					<p>Shop Profile (Registration 2 of 2)</p>
				</div>
			</div>

			<main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={registerHandler}>
					<FormContainer>
						<div data-title="heading">
							<h1>Shop Credentials</h1>
							<p>This is displayed in your Shop Profile</p>
						</div>
						<div data-title="inputContainer">
							<InputField
								name="storeName"
								type="text"
								state={storeName}
								setState={setStoreName}
								required={true}
							>
								Store Name
							</InputField>
							<InputField
								name="storeContactNumber"
								type="tel"
								state={storeContactNumber}
								setState={setStoreContactNumber}
								required={true}
							>
								Contact Number
							</InputField>
							<InputField
								name="storeEmail"
								type="email"
								state={storeEmail}
								setState={setStoreEmail}
								required={true}
							>
								Email
							</InputField>
						</div>
						<button type="submit">Proceed to Profile</button>
					</FormContainer>
				</form>

				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon} />
					</div>

					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default StoreProfile;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import Modal from "../../../../components/Modal";
import styles from "./StoreProfile.module.scss";

import { useAddSellerDetailsMutation } from "../../../../features/api/builders/sellerApi";
import { getUserDetail } from "../../../../features/api/builders/userApi";
import { selectCurrentUserId } from "../../../../features/slice/userAccessSlice";

const StoreProfile = ({ title }) => {
	document.title = title;

	const [storeName, setStoreName] = useState("");
	const [storeContactNumber, setStoreContactNumber] = useState("");
	const [storeEmail, setStoreEmail] = useState("");

	const [showModal, setShowModal] = useState(false);

	const currentUser = useSelector(selectCurrentUserId);
	const [queryData] = getUserDetail.useLazyQuery();

	const navigate = useNavigate();

	const [addSellerDetails] = useAddSellerDetailsMutation();

	const registerHandler = async (e) => {
		e.preventDefault();

		console.log("name", storeName);
		console.log("contact", storeContactNumber);
		console.log("email", storeEmail);

		try {
			const { data, error } = await queryData(currentUser);
			if (!error) {
			} else {
				console.log("error in profile name", error?.result);
			}

			const userId = data && data.result && data.result._userId;
			const name = storeName.value
			const num = storeContactNumber.value
			const email = storeEmail.value
			console.log(userId)

			const upload = await addSellerDetails({ userId, name, num, email });
			console.log(upload)

		} catch (error) {
			console.log(error)
		}

		setShowModal(true);
	};

	const returnHome = () => {
		navigate("/profile/shop")
	}

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="callback"
				callback={returnHome}
				symbol="success"
			>
				<h1>Created Successfully</h1>
				<p>Your seller account has been created successfully.</p>
			</Modal>

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
							<h1>Shop Profile</h1>
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

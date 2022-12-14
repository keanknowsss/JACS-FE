import { useState } from "react";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";

import styles from "./StoreRegister.module.scss";

const SellerRegister = ({ title }) => {
	document.title = title;

	const [storeName, setStoreName] = useState("");
	const [storeContactNumber, setStoreContactNumber] = useState("");
	const [storeEmail, setStoreEmail] = useState("");
	const [storeType, setStoreType] = useState("microSeller");
	const [validID, setValidID] = useState();
	const [bankAccount, setBankAccount] = useState();
	const [BIRFile, setBIRFile] = useState();
	const [businessDocument, setBusinessDocument] = useState();

	const registerHandler = (e) => {
		e.preventDefault();

		// error handling for files
		if (storeType === "microSeller") {
			if (!validID) {
				return alert("Please upload a file or image of your Valid ID");
			}
			if (!bankAccount) {
				return alert(
					"Please upload a file or image of your Bank Account Document"
				);
			}
		} else {
			if (!BIRFile) {
				return alert("Please upload a file or image of your BIR2032 Document");
			}
			if (!businessDocument) {
				return alert(
					"Please upload a file or image of your Business Permit or Certificate of Registration"
				);
			}
		}

		console.log("name", storeName);
		console.log("contact", storeContactNumber);
		console.log("email", storeEmail);
		console.log("name", storeName);
		console.log("store type", storeType);
		console.log("validID", validID.name);
		console.log("bankAccount", bankAccount.name);
	};

	return (
		<>
			<div className={styles.formTitleContainer}>
				<div className={styles.formTitle}>
					<h1>Create New Shop</h1>
					<p>Sell Items, Earn Money</p>
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
					</FormContainer>

					<FormContainer>
						<div data-title="heading">
							<h1>Shop Documents</h1>
							<p>Used to verify the shop</p>
						</div>
						<div data-title="inputContainer">
							<InputField type="title">Type of Store</InputField>
							<div className="pl-5 flex flex-col ">
								<InputField
									name="microSeller"
									type="radio"
									radioGroup="storeType"
									value="microSeller"
									state={storeType}
									setState={setStoreType}
									checked={true}
									required={true}
								>
									Micro or Individual Sellers
								</InputField>
								<InputField
									name="corporateSeller"
									type="radio"
									radioGroup="storeType"
									value="corporateSeller"
									state={storeType}
									setState={setStoreType}
									required={true}
								>
									Corporate Sellers
								</InputField>
							</div>
							{storeType === "microSeller" ? (
								<>
									<InputField
										type="title-information"
										title="Valid Government ID"
									>
										Used to check legitimacy of user and shop. Upload a single
										image or a single file (if more than one image).
									</InputField>
									<InputField
										type="file"
										name="validID"
										state={validID}
										setState={setValidID}
										required={true}
									/>
									<InputField
										type="title-information"
										title="Proof of Bank Account"
									>
										Used to check legitimacy of user and shop. Upload a single
										image or a single file (if more than one image).
									</InputField>
									<InputField
										type="file"
										name="bankAccount"
										state={bankAccount}
										setState={setBankAccount}
										required={true}
									/>
								</>
							) : (
								<>
									<InputField type="title-information" title="BIR2302">
										Used to check legitimacy of your store. Upload a single
										image or a single file (if more than one image).
									</InputField>
									<InputField
										type="file"
										name="birFile"
										state={BIRFile}
										setState={setBIRFile}
										required={true}
									/>
									<InputField
										type="title-information"
										title="Business Permit or Certificate of Registration"
									>
										Used to check legitimacy of user and shop. Upload a single
										image or a single file (if more than one image).
									</InputField>
									<InputField
										type="file"
										name="businessDocument"
										state={businessDocument}
										setState={setBusinessDocument}
										required={true}
									/>
								</>
							)}
						</div>
						<button type="submit">Create Store</button>
						<p data-title="submit-information">
							JACS team will review your request, you will receive a response in
							your email when the request is accepted or rejected within 1-2
							weeks
						</p>
					</FormContainer>
				</form>

				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon1} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon1} />
					</div>

					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
					</div>

					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon2} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon2} />
					</div>
				</div>
			</main>
		</>
	);
};

export default SellerRegister;

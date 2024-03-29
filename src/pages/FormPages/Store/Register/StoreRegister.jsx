import { useEffect, useState } from "react";
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

import styles from "./StoreRegister.module.scss";

import { useAddSellerDocumentsMutation, useAddSellerMutation, useVerifySellerMutation } from "../../../../features/api/builders/sellerApi";
import { getUserDetail } from "../../../../features/api/builders/userApi";
import { selectCurrentUserId } from "../../../../features/slice/userAccessSlice";

const SellerRegister = ({ title }) => {
	document.title = title;

	const [storeType, setStoreType] = useState("microSeller");
	const [validID, setValidID] = useState(null);
	const [bankAccount, setBankAccount] = useState(null);
	const [BIRFile, setBIRFile] = useState(null);
	const [businessDocument, setBusinessDocument] = useState(null);

	const [showModal, setShowModal] = useState(false);

	const [addSellerDocuments] = useAddSellerDocumentsMutation();
	const [addSeller] = useAddSellerMutation();
	const [verifySeller] = useVerifySellerMutation();

	const currentUser = useSelector(selectCurrentUserId);
	const [queryData] = getUserDetail.useLazyQuery();

	const navigate = useNavigate();

	const registerHandler = async (e) => {
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

			await fileUploading(validID, bankAccount, "MICRO")

		} else {
			if (!BIRFile) {
				return alert("Please upload a file or image of your BIR2032 Document");
			}
			if (!businessDocument) {
				return alert(
					"Please upload a file or image of your Business Permit or Certificate of Registration"
				);
			}

			await fileUploading(BIRFile, businessDocument, "CORPORATE")
		}

		setShowModal(true);
	};

	const returnHome = () => {
		navigate("/store/information")
	}

	const fileUploading = async (file1, file2, type) => {
		console.log(file1)
		try {
			const { data, error } = await queryData(currentUser);
				if (!error) {
				} else {
					console.log("error in profile name", error?.result);
				}

			const userId = data && data.result && data.result._userId;
			
			const uploadedDocument = await addSellerDocuments({
				id: userId,
				file1: file1,
				file2: file2
			}).unwrap();

			const result = uploadedDocument.result
			// console.log(result)
			const links = []
			result.forEach((image) => links.push(image.publicUrl))

			console.log("Documents uploaded!")

			const uploadSeller = await addSeller({
				_userId: userId,
				typeOfSeller: type,
				documents: links
			})
			console.log(uploadSeller)


			const verifyingSeller = await verifySeller(userId)
			console.log(verifyingSeller)

		} catch (error) {
			console.log(error)
		}

	}

	useEffect(() => {
		console.log(BIRFile)
	}, [BIRFile])

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="callback"
				callback={returnHome}
				symbol="success"
			>
				<h1>Submitted Successfully</h1>
				<p>You will be updated if the application is verified</p>
			</Modal>
			<div className={styles.formTitleContainer}>
				<div className={styles.formTitle}>
					<h1>Create New Shop</h1>
					<p>Shop Documents (Registration 1 of 2)</p>
				</div>
			</div>

			<main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={registerHandler}>
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
						<button type="submit">Submit Documents</button>
						<p data-title="submit-information">
							JACS team will review your request, you will receive a response in
							your email when the request is accepted or rejected within 1-2
							weeks
						</p>
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

export default SellerRegister;

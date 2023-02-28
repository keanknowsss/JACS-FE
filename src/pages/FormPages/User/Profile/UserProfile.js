import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
	ChipIcon,
	MonitorIcon,
	MouseIcon,
	PrinterIcon,
} from "../../../../assets/icons";
import FormContainer from "../../../../components/FormContainer";
import InputField from "../../../../components/InputField";
import Modal from "../../../../components/Modal";
import Toast from "../../../../components/Toast";
import { INPUT_INITIAL_VALUE } from "../../../../constants";
import {
	useAddUserDetailsMutation,
	useGetUserDetailQuery,
	userApi,
} from "../../../../features/api/builders/userApi";
import {
	selectCurrentUserId,
	verifyUser,
} from "../../../../features/slice/userAccessSlice";

import styles from "./UserProfile.module.scss";

const UserInformation = ({ title }) => {
	document.title = title;

	const [firstName, setFirstName] = useState(INPUT_INITIAL_VALUE);
	const [lastName, setLastName] = useState(INPUT_INITIAL_VALUE);
	const [contactNumber, setContactNumber] = useState(INPUT_INITIAL_VALUE);
	const [email, setEmail] = useState(INPUT_INITIAL_VALUE);

	const [showModal, setShowModal] = useState(false);

	const [fromLoginToast, setFromLoginToast] = useState(false);
	const [addErrorToast, setAddErrorToast] = useState(false);
	const [toastMessage, setToastMessage] = useState(false);

	const userId = useSelector(selectCurrentUserId);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const [addDetails] = useAddUserDetailsMutation();

	const { data } = useGetUserDetailQuery(userId);
	const [queryData] = userApi.endpoints.getUser.useLazyQuery();

	useEffect(() => {
		if (data) {
			navigate("/");
		}
	}, []);

	useEffect(() => {
		if (location?.state?.fromLogin) {
			setFromLoginToast(true);
		}
	}, [location]);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!formValidation()) {
			return;
		}

		const { error } = await addDetails({
			_userId: userId,
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			contactNo: contactNumber.value,
		});

		if (error) {
			setAddErrorToast(true);
			setToastMessage(error?.data?.message);
			setFirstName({ ...firstName, error: true });
			setLastName({ ...lastName, error: true });
			setContactNumber({ ...contactNumber, error: true });
			setEmail({ ...email, error: true });
			return;
		} else {
			setShowModal(true);
		}
	};

	const formValidation = () => {
		let isFormValid = true;
		if (firstName.value === "") {
			setFirstName({ ...firstName, error: true });
			isFormValid = false;
		}
		if (lastName.value === "") {
			setLastName({ ...lastName, error: true });
			isFormValid = false;
		}
		if (contactNumber.value === "") {
			setContactNumber({ ...contactNumber, error: true });
			isFormValid = false;
		}
		if (email.value === "") {
			setEmail({ ...email, error: true });
			isFormValid = false;
		}
		!isFormValid && alert("Error: Invalid Inputs!");

		return isFormValid;
	};

	const returnHome = async () => {
		const { data, isFetching, isLoading } = await queryData(userId);
		if (!isFetching && !isLoading) {
			const { isVerified } = data?.result;
			console.log(isVerified);
			dispatch(verifyUser(isVerified));
			navigate("/", { state: { fromForm: true } });
		}
	};

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="callback"
				symbol="information"
				callback={returnHome}
			>
				<h1>Verify Your Email</h1>
				<p>An email verification has been sent to your account</p>
			</Modal>
			<Toast
				showToast={fromLoginToast}
				setShowToast={setFromLoginToast}
				symbol="inform"
				title="FILL USER DETAILS"
				subtitle="Please fill the form before proceeding"
			/>
			<Toast
				showToast={addErrorToast}
				setShowToast={setAddErrorToast}
				symbol="error"
				title="Saving Details Failed"
				subtitle={toastMessage}
			/>
			<main className={styles.formContainer}>
				<form
					className={styles.formElement}
					onSubmit={submitHandler}
					noValidate
				>
					<FormContainer>
						<div data-title="heading">
							<h1>User Information</h1>
							<p>Please fill out necessary information</p>
						</div>
						<div data-title="inputContainer">
							<div className="flex gap-3">
								<InputField
									name="firstName"
									type="text"
									state={firstName}
									setState={setFirstName}
									required={true}
								>
									First Name
								</InputField>
								<InputField
									name="lastName"
									type="text"
									state={lastName}
									setState={setLastName}
									required={true}
								>
									Last Name
								</InputField>
							</div>
							<InputField
								name="contactNumber"
								type="tel"
								state={contactNumber}
								setState={setContactNumber}
								required={true}
							>
								Contact Number
							</InputField>
							<InputField
								name="email"
								type="email"
								state={email}
								setState={setEmail}
								required={true}
							>
								Email
							</InputField>
						</div>
						<button type="submit" className={styles.saveButton}>
							Save
						</button>
					</FormContainer>
				</form>

				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
						<ChipIcon className={styles.chipIcon} />
					</div>
					<div className={styles.columnIcon}></div>

					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon} />
						<PrinterIcon className={styles.printerIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default UserInformation;

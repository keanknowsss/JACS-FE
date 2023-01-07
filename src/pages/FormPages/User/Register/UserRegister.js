import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

import { INPUT_INITIAL_VALUE } from "../../../../constants/constants";
import {
	useLoginMutation,
	useRegisterUserMutation,
} from "../../../../features/api/builders/userApi";
import { setCredentials } from "../../../../features/slice/userAccessSlice";

import styles from "./UserRegister.module.scss";

const Register = ({ title }) => {
	document.title = title;

	const [username, setUsername] = useState(INPUT_INITIAL_VALUE);
	const [password, setPassword] = useState(INPUT_INITIAL_VALUE);
	const [confirmPassword, setConfirmPassword] = useState(INPUT_INITIAL_VALUE);

	const [showModal, setShowModal] = useState(false);

	const [apiErrorToast, showApiErrorToast] = useState(false);
	const [apiErrorMessage, setApiErrorMessage] = useState(null);

	const [register] = useRegisterUserMutation();
	const [login] = useLoginMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const checkbox = useRef();

	// insert logic for submit
	const submitHandler = async (e) => {
		e.preventDefault();

		if (
			!formValidation(username.value, password.value, confirmPassword.value)
		) {
			checkbox.current.checked = false;
			return;
		}

		try {
			await register({
				username: username.value,
				password: password.value,
			}).unwrap();

			setShowModal(true);
		} catch (error) {
			if (!error?.status) {
				setApiErrorMessage("No Server Response");
			} else if (error?.status === 400) {
				const { message } = error.data;
				setUsername({ ...username, value: "", error: true });
				setPassword({ value: "", error: true });
				setConfirmPassword({ value: "", error: true });
				checkbox.current.checked = false;
				setApiErrorMessage(message);
			} else {
				setApiErrorMessage(null);
			}
			showApiErrorToast(true);

			return;
		}

		try {
			const { result } = await login({
				username: username.value,
				password: password.value,
			}).unwrap();
			dispatch(setCredentials(result));
		} catch (error) {
			const { message } = error.data;
			setApiErrorMessage(message);
			showApiErrorToast(true);

		}
	};

	const formValidation = (
		usernameValue,
		passwordValue,
		confirmPasswordValue
	) => {
		let isFormValid = true;

		if (usernameValue === "") {
			setUsername({ ...username, error: true });
			isFormValid = false;
		}
		if (
			passwordValue === "" ||
			confirmPasswordValue === "" ||
			passwordValue.length < 5 ||
			passwordValue !== confirmPasswordValue
		) {
			setPassword({ value: "", error: true });
			setConfirmPassword({ value: "", error: true });
			isFormValid = false;
		}
		if (!checkbox.current.checked) {
			alert(
				"You must agree with Terms and Condition and Privacy Policy before Proceeding!"
			);
		}

		return isFormValid;
	};

	const toUserInformation = () => {
		navigate("/user/information")
	}

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				type="callback"
				callback={toUserInformation}
				symbol="success"
			>
				<h1>REGISTRATION SUCCESSFUL</h1>
				<p>Fill out the form to proceed to the site</p>
			</Modal>
			<Toast
				showToast={apiErrorToast}
				setShowToast={showApiErrorToast}
				symbol="error"
				title="User Registration Failed"
				subtitle={apiErrorMessage}
			/>
			<main className={styles.formContainer}>
				<form
					onSubmit={submitHandler}
					className={styles.formElement}
					noValidate
				>
					<FormContainer>
						<div data-title="heading">
							<h1>
								Sign up to <span>JACS.</span>
							</h1>
							<p>
								Have an account already? <Link to="/login">Login Here</Link>
							</p>
						</div>
						<div data-title="inputContainer">
							<InputField
								name="username"
								type="text"
								state={username}
								setState={setUsername}
								required={true}
							>
								Username
							</InputField>
							<InputField
								name="password"
								type="password"
								state={password}
								setState={setPassword}
								required={true}
							>
								Password
							</InputField>
							<InputField
								name="confirmPassword"
								type="password"
								state={confirmPassword}
								setState={setConfirmPassword}
								required={true}
							>
								Confirm Password
							</InputField>
						</div>
						<InputField name="agree" reference={checkbox} type="checkbox" />

						<button type="submit">Register</button>
					</FormContainer>
				</form>

				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
						<ChipIcon className={styles.chipIcon} />
					</div>
					<div className={styles.columnIcon}></div>

					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon} />
						<MouseIcon className={styles.mouseIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Register;

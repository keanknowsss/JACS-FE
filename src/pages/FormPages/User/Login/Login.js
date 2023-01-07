import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
	userApi,
} from "../../../../features/api/builders/userApi";
import {
	logOut,
	setCredentials,
} from "../../../../features/slice/userAccessSlice";
import styles from "./Login.module.scss";

const Login = ({ title }) => {
	document.title = title;

	const [username, setUsername] = useState(INPUT_INITIAL_VALUE);
	const [password, setPassword] = useState(INPUT_INITIAL_VALUE);

	const [passwordModal, setPasswordModal] = useState(false);

	const [apiErrorToast, showApiErrorToast] = useState(false);
	const [apiErrorMessage, setApiErrorMessage] = useState(null);

	const [emailAccount, setEmailAccount] = useState("");
	const [emailExist, setEmailExist] = useState(true);

	const [queryData] = userApi.endpoints.getUserDetail.useLazyQuery();

	const [login] = useLoginMutation();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	// dummy account
	const USER = {
		username: "test",
		password: "12345",
		email: "test@test.com",
	};

	useEffect(() => {
		dispatch(logOut());
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!formValidation()) {
			return;
		}

		try {
			const { result } = await login({
				username: username.value,
				password: password.value,
			}).unwrap();
			dispatch(setCredentials(result));
			setPassword({ ...password, value: "" });
			setUsername({ ...username, value: "" });

			const { data, isLoading, isFetching } = await queryData(result?._id);

			if (!isLoading && !isFetching) {
				data?.result
					? navigate("/", { state: { fromForm: true } })
					: navigate("/user/information", { state: { fromLogin: true } });
			}
		} catch (err) {
			// error logic
			if (!err?.status) {
				// isLoading: true until timeout occurs
				setApiErrorMessage("No Server Response");
			} else if (err.status === 400) {
				setApiErrorMessage("Missing Username or Password");
			} else if (err.status === 401) {
				// Incorrect Credentials
				setUsername({ value: "", error: true });
				setPassword({ value: "", error: true });
				setApiErrorMessage("User not found");
			} else {
				setApiErrorMessage(null);
			}
			showApiErrorToast(true);
		}
	};

	const emailSubmit = (e) => {
		e.preventDefault();
		setEmailAccount("");
		setPasswordModal(false);
		if (emailAccount !== USER.email) {
			setEmailExist(false);
			setPasswordModal(true);
			// insert code for toast
		}
		// insert code for api
	};

	const formValidation = () => {
		let isFormValid = true;
		if (username.value === "") {
			setUsername({ ...username, error: true });
			isFormValid = false;
		}
		if (password.value === "" || password.value.length < 5) {
			setPassword({ ...password, error: true });
			isFormValid = false;
		}
		!isFormValid && alert("Error: Invalid Inputs!");

		return isFormValid;
	};

	return (
		<>
			<Modal
				showModal={passwordModal}
				setShowModal={setPasswordModal}
				type="input"
				input="email"
				value={emailAccount}
				setValue={setEmailAccount}
				submitHandler={emailSubmit}
			>
				<h1>Change Password</h1>
				<p>
					{emailExist
						? "Input the email associated with your account"
						: "Please input the email associated with your account."}
				</p>
				{!emailExist && <span>Input is not linked to any accounts</span>}
			</Modal>
			<Toast
				showToast={apiErrorToast}
				setShowToast={showApiErrorToast}
				symbol="error"
				title="Login Failed"
				subtitle={apiErrorMessage}
			/>
			<main className={styles.formContainer}>
				<form
					className={styles.formElement}
					onSubmit={submitHandler}
					noValidate
				>
					<FormContainer>
						<div data-title="heading">
							<h2>Welcome Back</h2>
							<h1>
								Login to <span>JACS.</span>
							</h1>
							<p>
								Don't have an account? <Link to="/register">Register Here</Link>
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
							<button
								className={styles.forgotPassword}
								type="button"
								onClick={(e) => {
									setPasswordModal(true);
									setEmailExist(true);
									setEmailAccount("");
								}}
							>
								Forgot Password
							</button>
						</div>
						<button type="submit">Login</button>
					</FormContainer>
				</form>
				<div className={styles.iconContainer}>
					<div className={styles.columnIcon}>
						<MouseIcon className={styles.mouseIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<MonitorIcon className={styles.monitorIcon} />
					</div>

					<div className={styles.columnIcon}>
						<ChipIcon className={styles.chipIcon} />
					</div>
					<div className={styles.columnIcon}></div>
					<div className={styles.columnIcon}>
						<PrinterIcon className={styles.printerIcon} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;

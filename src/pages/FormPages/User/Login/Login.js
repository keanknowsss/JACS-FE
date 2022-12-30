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
import { useLoginMutation } from "../../../../features/api/builders/loginAuthApi";
import {
	logOut,
	selectCurrentToken,
	setCredentials,
} from "../../../../features/slice/loginAuthSlice";
import styles from "./Login.module.scss";

const Login = ({ title }) => {
	document.title = title;

	const [username, setUsername] = useState({ value: "", error: false });
	const [password, setPassword] = useState({ value: "", error: false });

	const [passwordModal, setPasswordModal] = useState(false);

	const [emailAccount, setEmailAccount] = useState("");
	const [emailExist, setEmailExist] = useState(true);

	const [login] = useLoginMutation();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	// dummy account
	const USER = {
		username: "test",
		password: "12345",
		email: "test@test.com",
	};

	const token = useSelector(selectCurrentToken);

	useEffect(() => {
		token && navigate("/");
	}, [token, navigate]);

	// to remove when logout is created
	useEffect(() => {
		dispatch(logOut());
	}, [dispatch]);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!formValidation(username.value, password.value)) {
			return;
		}

		try {
			const { result } = await login({
				username: username.value,
				password: password.value,
			}).unwrap();
			const { isVerified } = result;
			dispatch(setCredentials(result));
			setPassword("");
			setUsername("");

			isVerified
				? navigate("/")
				: navigate("/user/information", { state: { fromLogin: true } });
		} catch (err) {
			// error logic
			if (!err?.status) {
				// isLoading: true until timeout occurs
				console.log("No Server Response");
			} else if (err.status === 400) {
				console.log("Missing Username or Password");
			} else if (err.status === 401) {
				// Incorrect Credentials
				setUsername({ ...username, error: true });
				setPassword({ ...password, error: true });
			} else {
				console.log("Login Failed");
			}
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

	const formValidation = (username, password) => {
		let isFormValid = false;
		if (username === "") {
			setUsername({ ...username, error: true });
			isFormValid = false;
		} else {
			isFormValid = true;
		}
		if (password === "" || password.length < 5) {
			setPassword({ ...password, error: true });
			isFormValid = false;
		} else {
			isFormValid = true;
		}

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
			<main className={styles.formContainer}>
				<form className={styles.formElement} onSubmit={submitHandler}>
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
